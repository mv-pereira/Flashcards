# REVISÃO ADAPTATIVA A PARTIR DO DIAGNÓSTICO DO APP

Este arquivo complementa a especificação principal `Questões.md`.

Quando eu fornecer `Questões.md`, o `words.json` quando necessário e um bloco entre `[DIAGNOSTICO_REVISAO_SUECO]` e `[FIM_DIAGNOSTICO]`, use o diagnóstico para criar um NOVO exercício de revisão dirigido às minhas dificuldades.

## Papel do diagnóstico

O diagnóstico é evidência do meu desempenho anterior. Ele NÃO é um exercício a ser reproduzido.

Não copie literalmente as questões originais e não faça apenas uma nova lista pedindo exatamente as mesmas respostas.

Antes de gerar o novo exercício, analise silenciosamente os padrões linguísticos presentes nos dados, como:

- tempos verbais confundidos;
- formas irregulares;
- terminações verbais;
- verbos reflexivos e escolha do pronome;
- infinitivo, presente, pretérito, supino, perfeito e imperativo;
- plural de substantivos;
- mudanças vocálicas;
- gênero e formas definidas/indefinidas;
- ordem das palavras;
- ortografia sueca;
- vocabulário consultado repetidamente;
- formas flexionadas consultadas em vez do lema;
- grupos de erros que indiquem a mesma dificuldade subjacente.

O objetivo é revisar a competência por trás do erro, e não memorizar a resposta da questão anterior.

## Prioridade pedagógica

Use esta ordem:

1. erros em respostas que eu efetivamente tentei;
2. padrões que aparecem em vários erros;
3. erros que mostram confusão gramatical;
4. itens consultados repetidamente;
5. itens consultados uma única vez;
6. questões não respondidas.

Questão não respondida não prova desconhecimento; trate-a como sinal secundário.

Consulta ao vocabulário também não prova desconhecimento. Ela representa dúvida ou necessidade de confirmação. Quanto maior `CONSULTAS`, maior pode ser sua relevância pedagógica.

## Como interpretar os erros

Compare sempre:

- `MINHA_RESPOSTA`;
- `RESPOSTA_ESPERADA`;
- `FEEDBACK_APP`, quando existir;
- a tarefa original.

O `FEEDBACK_APP` é apenas um diagnóstico automático local. Faça sua própria análise linguística.

Se eu produzir uma forma regular onde o correto exige um pretérito irregular, não limite a revisão à grafia daquela palavra. Crie oportunidades novas para distinguir padrões regulares e irregulares já autorizados.

Se vários erros envolverem plural, não repita simplesmente os mesmos substantivos. Explore os padrões de plural usando outras palavras autorizadas quando possível.

## Vocabulário consultado

Nos registros:

- `LEMA_OU_ITEM` indica o item lexical associado;
- `FORMAS_CONSULTADAS` mostra o que apareceu no exercício;
- `TIPOS_DE_FORMA` pode indicar `present`, `past`, `supine`, `infinitive`, plural ou outra forma cadastrada;
- `CONSULTAS` informa quantas vezes o item foi aberto;
- `EXPRESSAO_ORIGEM`, quando existir, indica que a palavra foi encontrada dentro de uma expressão cadastrada.

Não assuma automaticamente que o significado em português é o problema. Consultas repetidas de uma forma flexionada podem indicar dificuldade de reconhecimento da flexão.

## Relação com `Questões.md`

Todas as regras técnicas de estrutura, sintaxe, correção automática e vocabulário autorizado de `Questões.md` continuam válidas.

Nesta modalidade de REVISÃO ADAPTATIVA, porém, o diagnóstico determina o foco pedagógico principal.

Assim:

- respeite integralmente o intervalo de capítulos e o vocabulário autorizado;
- não introduza vocabulário externo;
- dê prioridade, dentro do material autorizado, às dificuldades demonstradas no diagnóstico;
- conteúdos do capítulo mais alto podem continuar aparecendo como integração, mas não precisam dominar se não forem o principal problema revelado pelo diagnóstico.

Se eu informar um intervalo de capítulos, respeite-o.

Se `Questões.md` exigir `words.json` e ele não estiver disponível, peça o arquivo antes de gerar o exercício.

## Como criar a nova revisão

Produza questões novas e varie, quando apropriado:

- reconhecimento;
- produção;
- transformação;
- contraste entre formas semelhantes;
- frases completas;
- itens agrupados;
- múltipla escolha;
- verdadeiro/falso;
- uso contextual.

Quando uma dificuldade aparecer várias vezes, crie mais de uma oportunidade de praticá-la em contextos diferentes.

Evite transformar todos os erros em uma sequência mecânica de `palavra antiga → mesma resposta correta`.

Prefira transferência do conhecimento para material novo.

## Não recompensar o erro

Nunca use minha forma incorreta como modelo linguístico em uma nova questão.

Ela pode aparecer apenas se a tarefa for explicitamente identificar ou corrigir um erro.

## Saída

Entregue o novo exercício diretamente no formato importável definido por `Questões.md`.

Não inclua antes ou depois do exercício:

- diagnóstico do meu desempenho;
- lista das regras detectadas;
- comentários sobre o planejamento;
- Markdown explicativo fora do formato de importação.

Faça a análise silenciosamente e entregue somente o exercício final compatível com o aplicativo.

## Dados

Depois destas instruções eu fornecerei:

`[DIAGNOSTICO_REVISAO_SUECO]`

...

`[FIM_DIAGNOSTICO]`

Use esse bloco como fonte de evidência pedagógica para a nova revisão.
