#!/usr/bin/env bash

JSON="words.json"

START_ID=750
END_ID=$(jq '[.[].id] | max' "$JSON")

DELAY_MIN=8
DELAY_MAX=13

ERRORS=()

# ============================================================
# Configuração do curl
#
# --retry 4            = tenta novamente até 4 vezes após
#                        a primeira tentativa
# --retry-all-errors   = repete também em erros de conexão
# --connect-timeout 10 = até 10s para estabelecer conexão
# --max-time 40        = até 40s por requisição
# --retry-max-time 180 = limita o tempo total gasto em retries
# ============================================================

CURL_OPTS=(
  -fsSG
  --retry 4
  --retry-delay 3
  --retry-all-errors
  --connect-timeout 10
  --max-time 40
  --retry-max-time 180
  -H "User-Agent: SwedishFlashcardAudioFinder/1.0"
)


# ============================================================
# Funções auxiliares
# ============================================================

random_delay() {
  local delay

  delay=$(( RANDOM % (DELAY_MAX - DELAY_MIN + 1) + DELAY_MIN ))

  echo "Aguardando ${delay}s..."
  sleep "$delay"
}


log_error() {
  local reason="$1"

  ERRORS+=(
    "ID $ID | $TERM | $reason"
  )
}


# Faz uma chamada curl e coloca a resposta na variável
# cujo nome foi passado como primeiro argumento.
#
# Exemplo:
#   curl_request RESPONSE "Wiktionary sections" URL opções...
#
curl_request() {
  local output_variable="$1"
  local context="$2"

  shift 2

  local response
  local error_file
  local curl_status
  local curl_error

  error_file=$(mktemp)

  if response=$(
    curl "${CURL_OPTS[@]}" "$@" 2>"$error_file"
  ); then

    printf -v "$output_variable" '%s' "$response"

    rm -f "$error_file"
    return 0
  fi

  curl_status=$?

  curl_error=$(
    tr '\n' ' ' < "$error_file"
  )

  rm -f "$error_file"

  echo "ERRO: $context"
  echo "curl exit code: $curl_status"

  if [ -n "$curl_error" ]; then
    echo "$curl_error"
  fi

  log_error \
    "$context | curl exit $curl_status | $curl_error"

  return "$curl_status"
}


# Verifica se a resposta recebida é JSON válido e se a API
# retornou um objeto "error".
validate_api_json() {
  local json="$1"
  local context="$2"

  local api_error

  if ! printf '%s' "$json" | jq -e . >/dev/null 2>&1; then
    echo "ERRO: resposta JSON inválida."

    log_error \
      "$context | resposta JSON inválida"

    return 1
  fi

  api_error=$(
    printf '%s' "$json" |
      jq -r '.error.info // empty'
  )

  if [ -n "$api_error" ]; then
    echo "ERRO da API: $api_error"

    log_error \
      "$context | API: $api_error"

    return 1
  fi

  return 0
}


# ============================================================
# Validações iniciais
# ============================================================

if [ ! -f "$JSON" ]; then
  echo "ERRO: arquivo '$JSON' não encontrado."
  exit 1
fi


for COMMAND in jq curl seq cp mktemp mv; do
  if ! command -v "$COMMAND" >/dev/null 2>&1; then
    echo "ERRO: comando obrigatório não encontrado: $COMMAND"
    exit 1
  fi
done


if ! jq -e . "$JSON" >/dev/null 2>&1; then
  echo "ERRO: '$JSON' não contém JSON válido."
  exit 1
fi


if [ -z "$END_ID" ] || [ "$END_ID" = "null" ]; then
  echo "ERRO: não foi possível determinar o maior ID."
  exit 1
fi


echo "Arquivo: $JSON"
echo "Primeiro ID: $START_ID"
echo "Último ID: $END_ID"
echo


# ============================================================
# Backup
# ============================================================

cp "$JSON" "$JSON.bak"

if [ $? -ne 0 ]; then
  echo "ERRO: não foi possível criar o backup."
  exit 1
fi

echo "Backup criado: $JSON.bak"


# ============================================================
# Processamento
# ============================================================

for ID in $(seq "$START_ID" "$END_ID"); do

  echo
  echo "========================================"
  echo "===== ID $ID ====="
  echo "========================================"


  # ----------------------------------------------------------
  # Tipo gramatical
  # ----------------------------------------------------------

  WORD_TYPE=$(
    jq -r --argjson id "$ID" '
      .[]
      | select(.id == $id)
      | .grammar.type // empty
    ' "$JSON"
  )


  if [ -z "$WORD_TYPE" ]; then
    echo "ID não encontrado ou tipo gramatical ausente."
    continue
  fi


  # ----------------------------------------------------------
  # Expressões são ignoradas
  # ----------------------------------------------------------

  if [ "$WORD_TYPE" = "expressão" ]; then
    echo "Tipo: expressão. Ignorado."
    continue
  fi


  # ----------------------------------------------------------
  # Verifica se já existe áudio
  # ----------------------------------------------------------

  CURRENT_AUDIO=$(
    jq -r --argjson id "$ID" '
      .[]
      | select(.id == $id)
      | .media.audio.src // empty
    ' "$JSON"
  )


  if [ -n "$CURRENT_AUDIO" ]; then
    echo "Já possui áudio. Ignorado."
    continue
  fi


  # ----------------------------------------------------------
  # Termo sueco
  # ----------------------------------------------------------

  TERM=$(
    jq -r --argjson id "$ID" '
      .[]
      | select(.id == $id)
      | .term.swedish // empty
    ' "$JSON"
  )


  if [ -z "$TERM" ]; then
    echo "Termo vazio."
    continue
  fi


  echo "Tipo: $WORD_TYPE"
  echo "Termo: $TERM"


  # ==========================================================
  # 1. Procura a seção Swedish no Wiktionary
  # ==========================================================

  SECTIONS_JSON=""

  if ! curl_request \
    SECTIONS_JSON \
    "Falha ao consultar Wiktionary (sections)" \
    "https://en.wiktionary.org/w/api.php" \
    --data-urlencode "action=parse" \
    --data-urlencode "format=json" \
    --data-urlencode "formatversion=2" \
    --data-urlencode "prop=sections" \
    --data-urlencode "page=$TERM"
  then
    random_delay
    continue
  fi


  if ! validate_api_json \
    "$SECTIONS_JSON" \
    "Wiktionary sections"
  then
    random_delay
    continue
  fi


  if ! SWEDISH_INDEX=$(
    printf '%s' "$SECTIONS_JSON" |
      jq -r '
        [
          .parse.sections[]?
          | select(.line == "Swedish")
          | .index
        ][0] // empty
      '
  ); then

    echo "ERRO: falha ao processar as seções do Wiktionary."

    log_error \
      "Falha ao processar JSON do Wiktionary (sections)"

    random_delay
    continue
  fi


  if [ -z "$SWEDISH_INDEX" ]; then
    echo "Sem seção Swedish."
    random_delay
    continue
  fi


  echo "Seção Swedish encontrada: $SWEDISH_INDEX"


  # ==========================================================
  # 2. Procura arquivos de áudio na seção Swedish
  # ==========================================================

  LINKS_JSON=""

  if ! curl_request \
    LINKS_JSON \
    "Falha ao consultar Wiktionary (links)" \
    "https://en.wiktionary.org/w/api.php" \
    --data-urlencode "action=parse" \
    --data-urlencode "format=json" \
    --data-urlencode "formatversion=2" \
    --data-urlencode "prop=links" \
    --data-urlencode "section=$SWEDISH_INDEX" \
    --data-urlencode "page=$TERM"
  then
    random_delay
    continue
  fi


  if ! validate_api_json \
    "$LINKS_JSON" \
    "Wiktionary links"
  then
    random_delay
    continue
  fi


  if ! FILE_TITLE=$(
    printf '%s' "$LINKS_JSON" |
      jq -r '
        [
          .parse.links[]?
          | select(.ns == 6)
          | .title
          | select(
              test("\\.(ogg|wav)$"; "i")
            )
        ][0] // empty
      '
  ); then

    echo "ERRO: falha ao processar links do Wiktionary."

    log_error \
      "Falha ao processar JSON do Wiktionary (links)"

    random_delay
    continue
  fi


  # Isso NÃO é erro.
  if [ -z "$FILE_TITLE" ]; then
    echo "Nenhum arquivo .ogg ou .wav encontrado."
    random_delay
    continue
  fi


  echo "Arquivo: $FILE_TITLE"


  # ==========================================================
  # 3. Consulta Wikimedia Commons para obter a URL real
  # ==========================================================

  COMMONS_JSON=""

  if ! curl_request \
    COMMONS_JSON \
    "Falha ao consultar Wikimedia Commons" \
    "https://commons.wikimedia.org/w/api.php" \
    --data-urlencode "action=query" \
    --data-urlencode "format=json" \
    --data-urlencode "formatversion=2" \
    --data-urlencode "redirects=1" \
    --data-urlencode "prop=imageinfo" \
    --data-urlencode "iiprop=url" \
    --data-urlencode "titles=$FILE_TITLE"
  then
    random_delay
    continue
  fi


  if ! validate_api_json \
    "$COMMONS_JSON" \
    "Wikimedia Commons"
  then
    random_delay
    continue
  fi


  if ! AUDIO_URL=$(
    printf '%s' "$COMMONS_JSON" |
      jq -r '
        .query.pages[0].imageinfo[0].url // empty
        | split("?")[0]
        | select(
            startswith(
              "https://upload.wikimedia.org/"
            )
            and
            test("\\.(ogg|wav)$"; "i")
          )
      '
  ); then

    echo "ERRO: falha ao processar resposta do Commons."

    log_error \
      "Falha ao processar JSON do Wikimedia Commons"

    random_delay
    continue
  fi


  # Também NÃO é tratado como erro de conexão.
  if [ -z "$AUDIO_URL" ]; then
    echo "Commons não retornou URL válido."
    random_delay
    continue
  fi


  echo "URL encontrada:"
  echo "$AUDIO_URL"


  # ==========================================================
  # 4. Atualiza words.json
  # ==========================================================

  TMP=$(mktemp)


  if jq \
    --argjson id "$ID" \
    --arg url "$AUDIO_URL" '
      map(
        if
          .id == $id
          and
          (
            (.media.audio.src? == null)
            or
            (.media.audio.src? == "")
          )
        then
          .media.audio.src = $url
        else
          .
        end
      )
    ' "$JSON" > "$TMP"
  then

    if mv "$TMP" "$JSON"; then
      echo "Atualizado:"
      echo "$AUDIO_URL"
    else
      echo "ERRO: não foi possível substituir o words.json."

      rm -f "$TMP"

      log_error \
        "Falha ao substituir words.json após atualização"
    fi

  else

    echo "ERRO: não foi possível atualizar o JSON."

    rm -f "$TMP"

    log_error \
      "Falha ao processar/atualizar words.json"
  fi


  random_delay

done


# ============================================================
# Resultado geral
# ============================================================

echo
echo
echo "========================================"
echo "PROCESSAMENTO CONCLUÍDO"
echo "========================================"
echo
echo "Arquivo atualizado: $JSON"
echo "Backup original:    $JSON.bak"


# ============================================================
# Resumo de erros reais
# ============================================================

echo
echo "========================================"
echo "RESUMO DE ERROS"
echo "========================================"
echo


if [ "${#ERRORS[@]}" -eq 0 ]; then

  echo "Nenhum erro de conexão, API ou processamento."

else

  printf '%s\n' "${ERRORS[@]}"

  echo
  echo "Total de erros: ${#ERRORS[@]}"

fi


echo
echo "Fim."