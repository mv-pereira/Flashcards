Tenho um JSON de flashcards sueco → português. Algumas entradas têm `media.audio.src` preenchido e outras têm `media.audio.src` como `null`, vazio ou ausente.

Quero que você encontre áudios apenas para as entradas sem áudio, usando exclusivamente Wiktionary/Wikimedia Commons, sem estimar nem inventar links finais.

REGRAS ABSOLUTAS

1. Não estime o link final do áudio.
   - Nunca monte diretamente um link como:
     `https://upload.wikimedia.org/wikipedia/commons/...`
   - O link final só pode ser usado se você tiver acessado uma página real `File:` do Wiktionary/Wikimedia e encontrado nela o hiperlink chamado `Original file`.

2. Não use nomes prováveis de arquivo como resposta final.
   - Você pode testar páginas `File:` ou seguir links `Audio: (file)`.
   - Mas só pode preencher `media.audio.src` depois de abrir a página `File:` e extrair o href real de `Original file`.

3. O link salvo no JSON deve ser o link direto do arquivo, sem query string.
   - Se o `Original file` for:
     `https://upload.wikimedia.org/wikipedia/commons/e/e3/LL-Q9027_%28swe%29-Akiaveliara_sv%C3%A5ger.wav?utm_source=en.wiktionary.org&utm_campaign=index&utm_content=original`
   - Salvar apenas:
     `https://upload.wikimedia.org/wikipedia/commons/e/e3/LL-Q9027_%28swe%29-Akiaveliara_sv%C3%A5ger.wav`

4. Aceitar tanto `.ogg` quanto `.wav`.
   - Muitos áudios suecos antigos estão como `Sv-palavra.ogg`.
   - Muitos áudios mais novos aparecem como `LL-Q9027_(swe)-...palavra.wav`.

5. O áudio precisa pertencer à seção Swedish.
   - Não use áudio de Dutch, German, Turkish, Hungarian, etc.
   - Se a página tiver várias línguas, confirme que o `Audio` está dentro da seção `Swedish`.

6. Se não houver áudio confirmado pelo método, deixar `media.audio.src` como `null`.

7. Não substituir áudios já existentes, a menos que estejam inválidos ou explicitamente seja pedido.
   - O foco é preencher somente entradas sem áudio.

PROCESSO PARA CADA ENTRADA SEM ÁUDIO

Para cada item do JSON com `media.audio.src` nulo/vazio/ausente:

1. Determinar o termo-base sueco.

   Campo de origem:
   - Usar `term.swedish`.

   Se for substantivo com artigo:
   - Remover artigo inicial `en ` ou `ett `.
   - Exemplos:
     - `en bok` → `bok`
     - `ett barnbarn` → `barnbarn`
     - `en svärmor` → `svärmor`
     - `en svåger` → `svåger`

   Se for verbo, adjetivo, pronome, advérbio, numeral ou palavra simples:
   - Usar o próprio termo.
   - Exemplos:
     - `plugga` → `plugga`
     - `din` → `din`
     - `ingen` → `ingen`
     - `liten` → `liten`
     - `trettio` → `trettio`

   Se for expressão/frase:
   - Normalmente não haverá áudio.
   - Ainda assim, se for uma locução com verbete real no Wiktionary, pode checar.
   - Exemplos de entradas que provavelmente não terão áudio:
     - `Vad betyder det?`
     - `Hur säger man ... på svenska?`
     - `Jag förstår inte.`
     - `Kan du säga det en gång till?`
     - `Och du? / Du då?`
   - Não dividir a frase em palavras individuais para preencher áudio da frase inteira.
   - Não usar áudio de apenas uma palavra para uma expressão inteira.

2. Abrir a página do verbete no Wiktionary:

   Formato:
   `https://en.wiktionary.org/wiki/<TERMO-BASE>#Swedish`

   Exemplos:
   - `bok`:
     `https://en.wiktionary.org/wiki/bok#Swedish`
   - `svärmor`:
     `https://en.wiktionary.org/wiki/sv%C3%A4rmor#Swedish`
   - `svåger`:
     `https://en.wiktionary.org/wiki/sv%C3%A5ger#Swedish`
   - `din`:
     `https://en.wiktionary.org/wiki/din#Swedish`

3. Dentro da seção Swedish, procurar Pronunciation → Audio.

   Procurar elementos como:
   - `Audio`
   - `(file)`
   - links para `File:...`
   - player de áudio com link de arquivo

   Importante:
   - Se a página tiver áudio em outra seção de idioma, ignorar.
   - O áudio precisa estar dentro da seção Swedish.

4. Seguir o link do arquivo de áudio.

   O link geralmente leva para uma página como:
   - `https://en.wiktionary.org/wiki/File:Sv-bok.ogg`
   - `https://en.wiktionary.org/wiki/File:Sv-barnbarn.ogg`
   - `https://en.wiktionary.org/wiki/File:Sv-en_sv%C3%A4rmor.ogg`
   - `https://en.wiktionary.org/wiki/File:LL-Q9027_(swe)-Akiaveliara_sv%C3%A5ger.wav`

5. Na página `File:...`, localizar o hiperlink `Original file`.

   Só se esse hiperlink existir, extrair o `href` dele.

   O texto próximo pode aparecer como:
   - `Original file`
   - `Ogg Vorbis sound file, length ...`
   - `WAV file, length ...`

6. Limpar o link final.

   Se o link tiver `?utm_source=...`, remover tudo a partir do `?`.

   Exemplo:
   Entrada:
   `https://upload.wikimedia.org/wikipedia/commons/e/e3/LL-Q9027_%28swe%29-Akiaveliara_sv%C3%A5ger.wav?utm_source=en.wiktionary.org&utm_campaign=index&utm_content=original`

   Saída:
   `https://upload.wikimedia.org/wikipedia/commons/e/e3/LL-Q9027_%28swe%29-Akiaveliara_sv%C3%A5ger.wav`

7. Preencher o JSON.

   Formato:
   ```json
   "media": {
     "image": {
       "src": "..."
     },
     "audio": {
       "src": "LINK_CONFIRMADO_AQUI"
     }
   }
