Quero que você gere imagens individualizadas para flashcards de vocabulário sueco a partir do JSON que vou enviar/anexar.

IMPORTANTE: siga estas regras literalmente. Não improvise outro estilo.

OBJETIVO

Gerar imagens individuais para as entradas do JSON que devem ter imagem, salvar cada imagem como arquivo `.webp`, com nome padronizado, e no final entregar um arquivo `.zip` contendo todas as imagens geradas.

ENTRADAS A USAR

Use o JSON enviado nesta conversa.

Para cada item do JSON, leia:

* `id`
* `term.swedish`
* `term.portuguese`
* `grammar.type`

Gere imagem somente para entradas que sejam visualmente representáveis, principalmente:

* `grammar.type = "substantivo"`
* `grammar.type = "verbo"`

Não gere imagem para:

* numerais
* números escritos por extenso
* contas matemáticas
* formas geométricas
* expressões abstratas difíceis de representar
* frases completas que não sejam claramente representáveis como uma cena simples
* pronomes
* advérbios abstratos
* preposições
* palavras gramaticais
* qualquer item que exigiria texto escrito dentro da imagem

Se tiver dúvida se uma entrada deve virar imagem, prefira NÃO gerar.

REGRA ABSOLUTA SOBRE FIGURAS GEOMÉTRICAS

NÃO GERE POR FIGURAS GEOMÉTRICAS.

Nunca gere imagens usando formas geométricas programáticas como:

* círculo
* quadrado
* triângulo
* retângulo
* linhas abstratas
* ícones minimalistas geométricos
* diagramas
* pictogramas geométricos
* símbolos matemáticos
* desenhos feitos por código com formas básicas

Eu não quero imagens feitas com SVG simples, canvas, gráficos vetoriais geométricos ou composição de formas.
Eu quero imagens com aparência de ilustração/cartoon desenhada, como flashcards infantis, não desenhos técnicos.

ESTILO VISUAL OBRIGATÓRIO

Cada imagem deve seguir este estilo:

* imagem individual, uma por arquivo
* estilo cartoon simples
* aparência de ilustração desenhada
* fundo azul claro uniforme
* objeto ou cena centralizada
* contorno preto grosso
* cores suaves
* visual limpo
* sem realismo fotográfico
* sem excesso de detalhes
* sem texto dentro da imagem
* sem letras
* sem palavras
* sem legendas
* sem números escritos
* sem balões de fala
* sem colagem
* sem grade
* sem múltiplas imagens no mesmo arquivo
* sem montagem com 10 imagens juntas
* sem folha de contato
* sem spritesheet
* sem figuras geométricas abstratas

A imagem deve parecer uma versão cartoon simples e clara do conceito, semelhante a uma imagem de flashcard de livro infantil: objeto grande, centralizado, fundo azul claro, contorno preto.

QUANTIDADE POR LOTE

Gere no máximo 10 imagens por lote.

Cada imagem deve ser um arquivo separado.

Não coloque 10 imagens em uma única imagem.
Não faça colagem.
Não faça grid.
Não faça painel.
Não faça comparação.
Não faça imagem composta.

Se houver mais de 10 imagens necessárias, faça apenas as próximas 10 e entregue o ZIP. Depois eu pedirei para continuar.

NOME DOS ARQUIVOS

O nome de cada arquivo deve seguir exatamente este padrão:

`id-termo-sueco.webp`

Exemplos:

* `310-ett-kafé.webp`
* `311-en-fika.webp`
* `312-en-kopp-kaffe.webp`
* `343-boka.webp`
* `352-öppna.webp`
* `397-älska.webp`

Regras para o nome:

* usar o `id` do JSON
* usar o termo sueco de `term.swedish`
* converter espaços em hífens
* manter caracteres suecos como `å`, `ä`, `ö`
* remover pontuação como `?`, `!`, `.`, `,`, `:`, `;`
* extensão final: `.webp`

CONTEÚDO DA IMAGEM

A imagem deve representar o significado do termo sueco.

Use o campo `term.portuguese` para entender o significado quando necessário.

Exemplos de interpretação:

* `en kopp kaffe` → uma xícara de café
* `en kopp te` → uma xícara de chá
* `en kniv` → uma faca simples de cozinha
* `en gaffel` → um garfo
* `en sked` → uma colher
* `en stol` → uma cadeira
* `ett bord` → uma mesa
* `en toalett` → um vaso sanitário ou banheiro simples
* `boka` → uma pessoa marcando uma reserva em calendário ou agenda, sem texto
* `öppna` → uma porta sendo aberta, sem placas ou palavras
* `stänga` → uma porta sendo fechada, sem placas ou palavras
* `vakna` → uma pessoa acordando na cama, sem texto
* `diska` → uma pessoa lavando louça, sem texto
* `somna` → uma pessoa dormindo/adormecendo, sem texto
* `springa` → uma pessoa correndo, sem texto
* `älska` → uma cena simples de carinho/amor, adequada para flashcard, sem texto

REGRAS PARA VERBOS

Para verbos, represente uma ação clara, não um símbolo abstrato.

Exemplos:

* `springa` não deve ser apenas uma seta ou linhas de movimento; deve mostrar uma pessoa correndo em cartoon.
* `öppna` deve mostrar uma ação de abrir, como uma porta sendo aberta.
* `stänga` deve mostrar uma ação de fechar.
* `vakna` deve mostrar uma pessoa acordando.
* `diska` deve mostrar louça sendo lavada.
* `somna` deve mostrar alguém adormecendo.

REGRAS PARA SUBSTANTIVOS ABSTRATOS OU DIFÍCEIS

Se o substantivo for abstrato demais e a imagem ficar confusa, use uma cena concreta simples.

Exemplos:

* `en tid` → um relógio simples ou agenda, mas sem números legíveis/texto.
* `en månad` → calendário genérico sem texto ou números legíveis.
* `ett år` → calendário anual genérico ou passagem de estações sem texto.
* `en vecka` → calendário semanal genérico sem texto ou números.
* `en dag` → sol e céu representando um dia, sem texto.
* `en timme`, `en minut`, `en sekund` → relógio/cronômetro cartoon sem números legíveis.
* `en morgonrutin` → pessoa em rotina matinal simples, sem texto.

ATENÇÃO: mesmo nesses casos, não usar formas geométricas programáticas. O relógio ou calendário precisa parecer desenhado/cartoon, não um ícone geométrico feito por código.

QUALIDADE ESPERADA

As imagens devem ser úteis para memorização visual.

Evite:

* imagens genéricas demais
* objetos minúsculos
* cenas confusas
* múltiplos conceitos concorrendo
* aparência de clipart pobre
* aparência de ícone de app
* aparência de placa/sinalização
* texto escondido ou pseudo-texto
* letras em embalagens, cartazes, livros, telas ou calendários
* números em relógios ou calendários
* marcas/logotipos

O objeto principal deve ocupar boa parte da imagem e ser fácil de reconhecer.

FORMATO FINAL

No final, entregue:

1. Um arquivo `.zip` para download.
2. Dentro do ZIP, cada imagem deve estar em `.webp`.
3. Cada imagem deve estar nomeada corretamente.
4. Não inclua JSON no ZIP, a menos que eu peça.
5. Não inclua arquivos extras desnecessários.
6. Não inclua imagem de grade/preview/colagem.

ANTES DE GERAR

Antes de gerar, liste internamente quais itens serão gerados neste lote, mas não precisa me mostrar uma listagem longa.
Se houver itens que você decidiu pular por não serem substantivo/verbo ou por não serem visualmente representáveis, apenas ignore.

TAREFA AGORA

Leia o JSON anexado, selecione as próximas 10 entradas válidas para imagem, gere as imagens individualizadas no estilo especificado, salve como `.webp` com o padrão `id-termo-sueco.webp`, e entregue um arquivo `.zip` para download.

Repetindo a regra principal:

NÃO GERE POR FIGURAS GEOMÉTRICAS.
Nunca use figuras geométricas programáticas.
Quero imagens reais individualizadas em estilo cartoon simples, fundo azul claro, contorno preto, sem colagem, sem grid, sem texto e sem palavras.
