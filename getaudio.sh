JSON="words.json"
START_ID=657
END_ID=$(jq '[.[].id] | max' "$JSON")

DELAY_MIN=8
DELAY_MAX=13

random_delay() {
  local delay
  delay=$(( RANDOM % (DELAY_MAX - DELAY_MIN + 1) + DELAY_MIN ))
  echo "Aguardando ${delay}s..."
  sleep "$delay"
}

cp "$JSON" "$JSON.bak"

for ID in $(seq "$START_ID" "$END_ID"); do
  echo
  echo "===== ID $ID ====="

  WORD_TYPE=$(jq -r --argjson id "$ID" '
    .[]
    | select(.id == $id)
    | .grammar.type // empty
  ' "$JSON")

  if [ -z "$WORD_TYPE" ]; then
    echo "ID não encontrado ou tipo gramatical ausente."
    continue
  fi

  if [ "$WORD_TYPE" = "expressão" ]; then
    echo "Tipo: expressão. Ignorado."
    continue
  fi

  CURRENT_AUDIO=$(jq -r --argjson id "$ID" '
    .[]
    | select(.id == $id)
    | .media.audio.src // empty
  ' "$JSON")

  if [ -n "$CURRENT_AUDIO" ]; then
    echo "Já possui áudio. Ignorado."
    continue
  fi

  TERM=$(jq -r --argjson id "$ID" '
    .[]
    | select(.id == $id)
    | .term.swedish // empty
  ' "$JSON")

  if [ -z "$TERM" ]; then
    echo "Termo vazio."
    continue
  fi

  echo "Tipo: $WORD_TYPE"
  echo "Termo: $TERM"

  SECTIONS_JSON=$(
    curl -fsSG \
      -H "User-Agent: SwedishFlashcardAudioFinder/1.0" \
      "https://en.wiktionary.org/w/api.php" \
      --data-urlencode "action=parse" \
      --data-urlencode "format=json" \
      --data-urlencode "formatversion=2" \
      --data-urlencode "prop=sections" \
      --data-urlencode "page=$TERM"
  )

  SWEDISH_INDEX=$(printf '%s' "$SECTIONS_JSON" | jq -r '
    [
      .parse.sections[]?
      | select(.line == "Swedish")
      | .index
    ][0] // empty
  ')

  if [ -z "$SWEDISH_INDEX" ]; then
    echo "Sem seção Swedish."
    random_delay
    continue
  fi

  FILE_TITLE=$(
    curl -fsSG \
      -H "User-Agent: SwedishFlashcardAudioFinder/1.0" \
      "https://en.wiktionary.org/w/api.php" \
      --data-urlencode "action=parse" \
      --data-urlencode "format=json" \
      --data-urlencode "formatversion=2" \
      --data-urlencode "prop=links" \
      --data-urlencode "section=$SWEDISH_INDEX" \
      --data-urlencode "page=$TERM" |
    jq -r '
      [
        .parse.links[]?
        | select(.ns == 6)
        | .title
        | select(test("\\.(ogg|wav)$"; "i"))
      ][0] // empty
    '
  )

  if [ -z "$FILE_TITLE" ]; then
    echo "Nenhum arquivo .ogg ou .wav encontrado."
    random_delay
    continue
  fi

  echo "Arquivo: $FILE_TITLE"

  AUDIO_URL=$(
    curl -fsSG \
      -H "User-Agent: SwedishFlashcardAudioFinder/1.0" \
      "https://commons.wikimedia.org/w/api.php" \
      --data-urlencode "action=query" \
      --data-urlencode "format=json" \
      --data-urlencode "formatversion=2" \
      --data-urlencode "redirects=1" \
      --data-urlencode "prop=imageinfo" \
      --data-urlencode "iiprop=url" \
      --data-urlencode "titles=$FILE_TITLE" |
    jq -r '
      .query.pages[0].imageinfo[0].url // empty
      | split("?")[0]
      | select(
          startswith("https://upload.wikimedia.org/")
          and test("\\.(ogg|wav)$"; "i")
        )
    '
  )

  if [ -z "$AUDIO_URL" ]; then
    echo "Commons não retornou URL válido."
    random_delay
    continue
  fi

  TMP=$(mktemp)

  jq \
    --argjson id "$ID" \
    --arg url "$AUDIO_URL" '
      map(
        if .id == $id
           and (
             (.media.audio.src? == null)
             or (.media.audio.src? == "")
           )
        then
          .media.audio.src = $url
        else
          .
        end
      )
    ' "$JSON" > "$TMP" &&
    mv "$TMP" "$JSON"

  echo "Atualizado: $AUDIO_URL"
  random_delay
done

echo
echo "Processamento concluído."
echo "Arquivo: $JSON"
echo "Backup original: $JSON.bak"