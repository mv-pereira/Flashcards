# Flashcards de Sueco — Fase 1 Mobile

Protótipo funcional pensado para rodar no navegador do celular.

## Recursos

- Carrega palavras de `data/words.json`
- Mostra um card em sueco
- Mostra imagem se existir
- Oculta imagem ausente automaticamente
- Revela a resposta em português
- Marca acerto ou erro
- Avança para o próximo card
- Mostra contador da sessão
- Layout mobile-first

## Estrutura

```text
flashcards-sueco/
│
├── index.html
├── style.css
├── app.js
├── README.md
├── data/
│   └── words.json
└── assets/
    └── images/
```

## Como testar localmente

Como o projeto usa `fetch()` para carregar o JSON, abra com servidor local:

```bash
python -m http.server
```

Depois acesse:

```text
http://localhost:8000
```

## GitHub Pages

Funciona no GitHub Pages porque o `index.html` está na raiz e o JSON é carregado com caminho relativo:

```js
fetch("data/words.json")
```

## Imagens

O JSON já aponta para:

```text
assets/images/book.webp
assets/images/eat.webp
```

Adicione esses arquivos quando quiser testar com imagens reais.
