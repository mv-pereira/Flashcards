# Flashcards de Sueco

Aplicativo simples de flashcards para estudar vocabulário em sueco, feito com HTML, CSS e JavaScript puro.

## Funcionalidades

- Flashcards Sueco ↔ Português
- Modo de escrita com correção automática
- Estudo por imagem e áudio
- Filtros por tipo, tema, origem, capítulo ou música
- Modo de palavras novas
- Resumo de desempenho
- Tema claro e escuro
- Progresso salvo no navegador

## Estrutura

```text
index.html
style.css
app.js
data/words.json
```

## Formato dos cards

As palavras ficam em `data/words.json`.

Cada card segue esta estrutura:

```json
{
  "id": 119,
  "order": 119,
  "active": true,
  "term": {
    "swedish": "en låt",
    "portuguese": "uma música / uma canção"
  },
  "grammar": {
    "type": "substantivo",
    "gender": "en",
    "plural": "låtar",
    "definite": "låten",
    "infinitive": null,
    "present": null,
    "past": null,
    "supine": null
  },
  "classification": {
    "themes": ["dia a dia", "música"],
    "source": "música",
    "chapter": null,
    "sourceTitle": "Nome da música",
    "sourceArtist": "Nome do artista"
  },
  "media": {
    "image": null,
    "audio": {
      "src": null,
      "source": null,
      "sourceUrl": null,
      "author": null,
      "license": null
    }
  }
}
```

## Observações

- `themes` sempre deve ser um array.
- `source` indica a origem da palavra: `"livro"` ou `"música"`.
- `chapter` é usado apenas para palavras do livro.
- `sourceTitle` e `sourceArtist` são usados para músicas.
- Campos desconhecidos devem ficar como `null`.

## Lembrete para aumentar o JSON

Para adicionar novas palavras, copie a lista de palavras, frases, trecho de música ou imagens e peça ao ChatGPT para transformar no formato do `words.json`.

Peça para:

- começar o `id` depois do último existente;
- não repetir palavras que já estão no JSON;
- não repetir palavras dentro do novo complemento;
- usar a estrutura `term`, `grammar`, `classification` e `media`;
- usar `themes` como array;
- preencher `source`, `chapter`, `sourceTitle` e `sourceArtist`;
- devolver apenas um array JSON pronto para colar em `data/words.json`.
