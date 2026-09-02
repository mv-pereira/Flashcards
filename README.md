# Flashcards de Sueco

Aplicativo web para estudar vocabulário e gramática em sueco, feito com **HTML, CSS e JavaScript puro**.

O vocabulário fica armazenado em `data/words.json`.

## Funcionalidades

* Flashcards **Sueco ↔ Português**
* Estudo por áudio
* Modo de resposta escrita com correção automática
* Filtros por tipo, tema, origem, capítulo ou música
* Modo de palavras novas
* Sistema de revisão baseado no desempenho
* Lista de palavras e revisão de erros
* Resumo das sessões de estudo
* Conteúdo de gramática e pronúncia
* Exercícios de múltipla escolha, verdadeiro/falso e escrita
* Correção automática dos exercícios com nota final
* Identificação detalhada de erros de escrita
* Opção **Copiar meus erros**
* Tema claro e escuro
* Progresso dos flashcards salvo no navegador

## Estrutura

```text
index.html
style.css
app.js
manifest.json
getaudio.sh
Questões.md

data/
└── words.json

assets/
└── images/
```

## Tecnologias

* HTML5
* CSS3
* JavaScript puro
* JSON
* `localStorage`
* Clipboard API

# Formato dos cards

As palavras ficam em:

```text
data/words.json
```

Cada card contém identificação, termo e tradução, informações gramaticais, classificação e mídia.

Exemplo:

```json
{
  "id": 2,
  "order": 2,
  "active": true,
  "term": {
    "swedish": "äta",
    "portuguese": "comer",
    "portugueseInfinitive": "comer",
    "portuguesePresent": "come",
    "portuguesePast": "comeu",
    "portugueseSupine": "comido"
  },
  "grammar": {
    "type": "verbo",
    "gender": null,
    "plural": null,
    "definiteSingular": null,
    "definitePlural": null,
    "infinitive": "äta",
    "present": "äter",
    "past": "åt",
    "supine": "ätit"
  },
  "classification": {
    "themes": [
      "vocabulário geral"
    ],
    "chapter": 0,
    "sourceTitle": null
  },
  "media": {
    "audio": {
      "src": "https://..."
    }
  }
}
```

## Campos principais

### Identificação

* `id`: identificador único do card.
* `order`: ordem básica no banco.
* `active`: define se o card será carregado pelo aplicativo.

### `term`

Contém o termo em sueco e sua tradução em português.

Dependendo do tipo da palavra, também pode conter:

* `portuguesePlural`
* `portugueseGender`
* `portugueseInfinitive`
* `portuguesePresent`
* `portuguesePast`
* `portugueseSupine`

### `grammar`

Contém as informações gramaticais da palavra.

Campos utilizados:

* `type`
* `gender`
* `plural`
* `definiteSingular`
* `definitePlural`
* `infinitive`
* `present`
* `past`
* `supine`

Campos que não se aplicam devem ficar como `null`.

### `classification`

Contém informações utilizadas para organizar e filtrar o vocabulário.

Pode incluir:

* `themes`
* `source`
* `chapter`
* `sourceTitle`
* `sourceArtist`

`themes` deve ser sempre um array.

### `media`

Contém a mídia associada ao card.

Atualmente, o principal campo utilizado é:

* `media.audio.src`

Quando não houver áudio disponível, use `null`.

## Observações

* `id` deve ser único.
* `order` deve seguir a sequência do banco.
* `themes` deve ser sempre um array.
* Use `null` quando um campo não se aplicar.
* Evite palavras ou expressões duplicadas.
* Preencha as formas gramaticais conhecidas sempre que possível.
* Para substantivos, informe gênero e formas de plural/definido quando disponíveis.
* Para verbos, informe infinitivo, presente, pretérito e supino quando disponíveis.
* `chapter` deve ser um número ou `null`.
* `sourceTitle` e `sourceArtist` podem ser usados para identificar músicas.
* `media.audio.src` deve conter a URL do áudio ou `null`.

# Adicionando novas palavras

Para ampliar o `words.json`, forneça ao ChatGPT o arquivo atual junto com as novas palavras, frases, trechos de livro ou vocabulário de músicas.

Peça para:

* continuar `id` e `order` depois do último existente;
* evitar duplicatas;
* manter as estruturas `term`, `grammar`, `classification` e `media`;
* usar `themes` como array;
* preencher as formas gramaticais disponíveis;
* preencher `chapter`, `source`, `sourceTitle` e `sourceArtist` quando aplicável;
* usar `null` quando necessário;
* devolver somente um array JSON válido e pronto para incorporar ao `data/words.json`.

# Áudios

Para buscar e preencher automaticamente os áudios das palavras, utilize:

```text
getaudio.sh
```

O script consulta fontes de áudio disponíveis e preenche `media.audio.src` no `words.json` quando encontra um arquivo correspondente.

# Exercícios

Para criar novos exercícios, forneça ao **ChatGPT**:

* `Questões.md`, com as instruções e o formato dos exercícios;
* `words.json`, com o vocabulário disponível.

O exercício gerado pode então ser copiado e colado diretamente na seção **Exercícios** do aplicativo.
