# REVISÃO ADAPTATIVA A PARTIR DO DIAGNÓSTICO DO APP

Este arquivo complementa a especificação principal `Questões.md` e define uma modalidade especial de REVISÃO ADAPTATIVA.

Quando eu fornecer `Questões.md`, o `words.json` quando necessário e um bloco entre `[DIAGNOSTICO_REVISAO_SUECO]` e `[FIM_DIAGNOSTICO]`, use o diagnóstico para criar um NOVO exercício de revisão dirigido às minhas dificuldades.

O objetivo desta modalidade é seguir a sequência pedagógica:

1. compreender o erro e rever a regra;
2. observar formas corretas e contrastes úteis;
3. recuperar a informação sem copiar;
4. aplicar a regra em questões novas;
5. misturar posteriormente conteúdos próximos para verificar se a aprendizagem se mantém.

A revisão não deve ser apenas uma nova prova. Ela deve ensinar brevemente antes de testar novamente.

---

## 1. PAPEL DO DIAGNÓSTICO

O diagnóstico é evidência do meu desempenho anterior. Ele NÃO é um exercício a ser reproduzido literalmente.

Não copie as questões originais e não faça apenas uma nova lista pedindo exatamente as mesmas respostas.

Antes de gerar a revisão, analise silenciosamente os padrões linguísticos presentes nos dados, como:

- tempos verbais confundidos;
- formas regulares e irregulares;
- terminações verbais;
- verbos reflexivos e escolha do pronome;
- infinitivo, presente, pretérito, supino, perfeito e imperativo;
- plural de substantivos;
- singular e plural definidos ou indefinidos;
- mudanças vocálicas;
- gênero;
- ordem das palavras;
- ortografia sueca;
- compreensão de uma informação do texto anterior;
- vocabulário consultado repetidamente;
- formas flexionadas consultadas em vez do lema;
- grupos de erros que indiquem a mesma dificuldade subjacente.

O objetivo é descobrir a COMPETÊNCIA por trás dos erros, e não fazer o estudante memorizar respostas anteriores.

---

## 2. AGRUPAMENTO PEDAGÓGICO DOS ERROS

Antes de escrever a revisão, agrupe silenciosamente os erros por dificuldade subjacente.

Por exemplo, vários erros diferentes podem pertencer ao mesmo grupo pedagógico se todos revelarem dificuldade com:

- plural definido;
- formação do pretérito;
- imperativo;
- conjugação de verbos reflexivos;
- distinção entre infinitivo e presente;
- mudança vocálica;
- ordem V2;
- reconhecimento de uma forma irregular.

Não trate automaticamente cada erro como um assunto independente.

Se cinco respostas erradas revelarem essencialmente a mesma dificuldade, explique a regra uma vez de forma clara e depois crie várias oportunidades de praticá-la.

Se um erro parecer apenas ortográfico e isolado, não dê a ele o mesmo peso de uma dificuldade gramatical repetida.

Se a forma errada revelar uma generalização plausível de uma regra, explique o contraste entre o padrão esperado e a forma realmente exigida pela palavra.

---

## 3. PRIORIDADE PEDAGÓGICA

Use esta ordem para decidir o que merece mais espaço no texto explicativo e nas questões:

1. erros em respostas que eu efetivamente tentei;
2. padrões que aparecem em vários erros;
3. erros que mostram confusão gramatical ou morfológica;
4. erros em estruturas produtivas importantes, como plural, pretérito, perfeito, imperativo e ordem das palavras;
5. itens consultados repetidamente;
6. itens consultados uma única vez;
7. questões não respondidas.

Questão não respondida não prova desconhecimento; trate-a como sinal secundário.

Consulta ao vocabulário também não prova desconhecimento. Ela representa dúvida ou necessidade de confirmação. Quanto maior `CONSULTAS`, maior pode ser sua relevância pedagógica.

---

## 4. COMO INTERPRETAR CADA ERRO

Compare sempre:

- `MINHA_RESPOSTA`;
- `RESPOSTA_ESPERADA`;
- `FEEDBACK_APP`, quando existir;
- a tarefa original.

O `FEEDBACK_APP` é apenas um diagnóstico automático local. Faça sua própria análise linguística.

Distinga, quando possível, entre:

- erro de compreensão;
- erro de regra gramatical;
- erro de escolha da flexão;
- erro de forma irregular;
- erro de terminação;
- erro de mudança vocálica;
- erro de pronome reflexivo;
- erro de ordem das palavras;
- erro puramente ortográfico;
- dúvida lexical.

Não confunda uma diferença de letras com a causa pedagógica real do erro.

Se eu produzir uma forma regular onde o correto exige outro padrão ou uma forma irregular, não limite a revisão à grafia daquela palavra. Explique o padrão relevante e crie oportunidades novas para distingui-lo.

Se vários erros envolverem plural, não repita simplesmente os mesmos substantivos. Explique os padrões que aparecem no diagnóstico e depois explore esses padrões com outras palavras autorizadas quando possível.

---

## 5. VOCABULÁRIO CONSULTADO

Nos registros:

- `LEMA_OU_ITEM` indica o item lexical associado;
- `FORMAS_CONSULTADAS` mostra o que apareceu no exercício;
- `TIPOS_DE_FORMA` pode indicar `present`, `past`, `supine`, `infinitive`, plural ou outra forma cadastrada;
- `CONSULTAS` informa quantas vezes o item foi aberto;
- `EXPRESSAO_ORIGEM`, quando existir, indica que a palavra foi encontrada dentro de uma expressão cadastrada.

Não assuma automaticamente que o significado em português é o problema.

Consultas repetidas de uma forma flexionada podem indicar dificuldade de reconhecer a flexão, relacioná-la ao lema ou distinguir tempos verbais.

Itens consultados várias vezes podem aparecer no texto explicativo como um pequeno lembrete e depois reaparecer em uma ou duas questões, desde que isso seja pedagogicamente útil.

Não transforme todas as consultas únicas em conteúdo obrigatório da revisão. Evite sobrecarregar o estudante com uma lista longa de palavras que talvez tenham sido abertas apenas por curiosidade.

---

## 6. RELAÇÃO COM `Questões.md`

Todas as regras técnicas de estrutura, sintaxe, correção automática e vocabulário autorizado de `Questões.md` continuam válidas, EXCETO quando este arquivo estabelecer explicitamente uma regra especial para a modalidade de REVISÃO ADAPTATIVA.

Nesta modalidade, o diagnóstico determina o foco pedagógico principal.

Assim:

- respeite integralmente o intervalo de capítulos e o vocabulário sueco autorizado;
- não introduza vocabulário sueco externo;
- dê prioridade, dentro do material autorizado, às dificuldades demonstradas no diagnóstico;
- conteúdos do capítulo mais alto podem continuar aparecendo como integração, mas não precisam dominar se não forem o principal problema revelado pelo diagnóstico.

Se eu informar um intervalo de capítulos, respeite-o.

Se `Questões.md` exigir `words.json` e ele não estiver disponível, peça o arquivo antes de gerar o exercício.

---

## 7. FORMATO ESPECIAL DA REVISÃO ADAPTATIVA

Diferentemente de um exercício comum, a revisão adaptativa DEVE começar com um bloco `[TEXTO]` explicativo antes da primeira questão.

Esse primeiro `[TEXTO]` é uma exceção pedagógica às regras gerais de texto principal de `Questões.md`.

Ele NÃO é uma narrativa em sueco e NÃO é um texto de interpretação.

Ele deve ser uma EXPLICAÇÃO DIDÁTICA EM PORTUGUÊS baseada diretamente no diagnóstico.

A estrutura obrigatória é:

`[EXERCICIO]`

`TITULO: ...`

`[TEXTO]`

explicação didática personalizada em português

`[QUESTAO]`

questões de revisão e aplicação

`[FIM]`

Use exatamente um bloco `[TEXTO]` inicial nessa modalidade, salvo se eu pedir expressamente outra organização.

Não crie `[TEXTO]` adicionais apenas para produzir novas narrativas, diálogos ou textos de compreensão.

Não invente uma marcação como `[REVISAO]`, `[AULA]`, `[EXPLICACAO_GERAL]` ou semelhante. O bloco suportado pelo aplicativo é `[TEXTO]`.

---

## 8. IDIOMA E VOCABULÁRIO DO TEXTO EXPLICATIVO

O texto didático inicial deve ser escrito principalmente em PORTUGUÊS, porque sua função é explicar a dúvida de forma rápida e inequívoca antes da prática.

As restrições de vocabulário sueco de `Questões.md` continuam valendo para TODAS as palavras, expressões e exemplos EM SUECO que aparecerem dentro desse texto.

O português utilizado para explicar gramática, descrever o erro, dar instruções ou comparar conceitos não precisa pertencer ao `words.json`.

Exemplos suecos usados na explicação devem vir de uma destas fontes:

1. formas corretas presentes no diagnóstico;
2. palavras e flexões legitimamente autorizadas pelo `words.json` e pelo intervalo de capítulos;
3. estruturas gramaticais que possam ser formadas somente com esse vocabulário autorizado.

Não introduza vocabulário sueco externo apenas para criar uma explicação mais elegante.

---

## 9. CONTEÚDO DO TEXTO DIDÁTICO INICIAL

O texto deve funcionar como uma pequena revisão orientada, não como uma lista burocrática de erros.

Explique primeiro as dificuldades de maior prioridade e agrupe erros relacionados.

Para cada dificuldade importante, procure incluir de forma natural:

1. O QUE ACONTECEU — diga em português qual confusão apareceu no desempenho.
2. A REGRA — relembre a regra de maneira curta, clara e adequada ao nível do estudante.
3. O CONTRASTE — mostre duas ou mais formas corretas que ajudem a perceber a diferença relevante.
4. O PADRÃO — quando houver uma terminação, mudança vocálica, irregularidade ou estrutura recorrente, destaque-a.
5. UMA DICA DE MEMÓRIA — quando existir uma forma simples e correta de lembrar a regra, use-a.
6. O QUE OBSERVAR NAS QUESTÕES — oriente brevemente qual detalhe o estudante deve procurar ao responder a prática que vem depois.

Não é obrigatório utilizar esses seis elementos como títulos visíveis. Eles são componentes pedagógicos do texto.

### 9.1 NÃO TRANSFORMAR O TEXTO EM UMA LISTA DE 13 CORREÇÕES

Não escreva um parágrafo separado para cada erro quando vários deles pertencem à mesma regra.

Prefira algo equivalente a:

- uma explicação para o grupo de plurais;
- uma explicação para o grupo de pretéritos;
- uma explicação para o imperativo;
- uma observação curta para um erro isolado realmente relevante.

A quantidade de explicação deve acompanhar a importância da dificuldade, e não simplesmente o número do erro no diagnóstico.

### 9.2 MOSTRAR O ERRO SEM REFORÇÁ-LO

É permitido mencionar UMA VEZ uma forma que eu realmente escrevi incorretamente quando isso ajudar a esclarecer a origem da confusão.

Quando fizer isso:

- deixe inequívoco que a forma está incorreta;
- apresente imediatamente a forma correta;
- dê destaque conceitual à forma correta;
- não reutilize a forma errada como exemplo positivo;
- não repita a forma errada várias vezes ao longo da revisão.

Depois da correção inicial, use prioritariamente formas corretas.

### 9.3 EXPLICAÇÃO PROPORCIONAL AO ERRO

Se o problema for apenas uma grafia isolada, uma frase curta pode ser suficiente.

Se houver vários erros de plural definido, pretérito, imperativo ou outra estrutura produtiva, forneça uma explicação mais completa com contraste entre formas.

Se houver indício de confusão entre duas categorias, explique explicitamente a diferença entre elas.

### 9.4 NÃO ENSINAR UMA REGRA FALSA POR EXCESSO DE SIMPLIFICAÇÃO

Não invente regras absolutas apenas para facilitar a memorização.

Quando uma forma for irregular ou pertencer a um padrão com exceções, diga isso de forma simples.

Prefira uma regra curta, correta e limitada a uma regra fácil porém enganosa.

### 9.5 TAMANHO DA MICROAULA ADAPTATIVA

Na REVISÃO ADAPTATIVA, o bloco `[TEXTO]` inicial possui função de MICROAULA ADAPTATIVA e NÃO corresponde ao texto principal em sueco descrito nas regras gerais de tamanho de texto de `Questões.md`.

Portanto, qualquer quantidade de palavras definida em `Questões.md` para o texto principal de um exercício comum NÃO deve ser aplicada automaticamente a esse bloco explicativo.

Salvo se o usuário determinar explicitamente outro tamanho para a revisão adaptativa, NÃO tente atingir uma quantidade fixa de palavras. O tamanho deve ser determinado pela quantidade, pela complexidade e pela relação entre os grupos de dificuldade identificados no diagnóstico.

Use como referência pedagógica:

- 1 dificuldade principal: aproximadamente 150 a 200 palavras;
- 2 ou 3 grupos relevantes de dificuldade: aproximadamente 200 a 350 palavras;
- 4 ou mais grupos relevantes de dificuldade: aproximadamente 350 a 600 palavras.

Normalmente, não ultrapasse aproximadamente 450 palavras. Esse limite é orientativo e pode ser excedido somente quando a complexidade do diagnóstico realmente exigir uma explicação maior para evitar uma revisão incompleta ou enganosa.

A quantidade de palavras NÃO deve ser calculada diretamente pelo número de erros. Vários erros podem compartilhar a mesma causa gramatical e devem ser consolidados em uma única explicação.

Exemplo de princípio pedagógico:

- cinco erros de plural definido não exigem cinco explicações separadas;
- eles podem indicar uma única dificuldade central que deve receber uma explicação consolidada e, em seguida, várias oportunidades de prática.

A extensão da microaula deve ser proporcional à dificuldade subjacente, e não à quantidade bruta de itens registrados no diagnóstico.

Não aumente artificialmente o texto para atingir uma faixa de palavras. Se uma dificuldade puder ser explicada corretamente com menos palavras, prefira a explicação mais curta.

Da mesma forma, não reduza excessivamente a explicação apenas para mantê-la curta quando o estudante demonstrar confusão entre categorias, regras ou padrões que precisem ser contrastados.

O texto inicial deve conter somente o necessário para preparar o estudante para a prática que virá em seguida.

Consultas isoladas de vocabulário simples não precisam necessariamente aparecer na microaula. Elas podem ser retomadas apenas nas questões posteriores quando não representarem uma dificuldade conceitual relevante.

Se o usuário informar explicitamente uma quantidade de palavras para a REVISÃO ADAPTATIVA, essa instrução específica prevalece sobre as faixas orientativas desta seção.

---

## 10. FORMATAÇÃO DO BLOCO `[TEXTO]`

O aplicativo preserva parágrafos separados por linha em branco. Portanto, organize o texto didático em pequenos parágrafos temáticos.

Use normalmente entre 3 e 7 parágrafos, dependendo da quantidade e da variedade de dificuldades relevantes.

Cada parágrafo deve tratar de uma unidade de aprendizagem clara.

Evite um único bloco muito longo.

Evite também quebrar cada frase em uma linha diferente.

IMPORTANTE PARA O LAYOUT DO APP:

Não use pequenos rótulos iniciados por uma ou poucas palavras capitalizadas seguidas imediatamente por dois-pontos no começo de uma linha, como `Regra:` ou `Plural:`.

O aplicativo pode interpretar uma linha nesse formato como fala de diálogo.

Prefira construções como:

`Plural definido — ...`

ou simplesmente um parágrafo corrido:

`No plural definido, observe que ...`

Não use Markdown como `#`, `##`, tabelas ou listas complexas dentro do `[TEXTO]` esperando formatação especial. O bloco deve ser legível como texto corrido com parágrafos.

---

## 11. TOM E NÍVEL DA EXPLICAÇÃO

Explique como um professor que acabou de observar as respostas do estudante.

O texto deve ser:

- direto;
- acolhedor sem ser infantilizado;
- específico para os erros reais;
- curto o suficiente para ser lido antes das questões;
- completo o suficiente para reativar a regra necessária;
- escrito em português claro;
- tecnicamente correto.

Evite frases genéricas como “revise mais os verbos” ou “preste atenção no plural” sem explicar exatamente o que deve ser observado.

Evite também excesso de terminologia linguística se uma explicação mais simples transmitir a mesma regra.

Quando um termo gramatical for útil, use o termo e explique brevemente seu papel.

---

## 12. QUESTÕES COMO CONSOLIDAÇÃO APÓS A EXPLICAÇÃO

Depois do `[TEXTO]`, produza as questões.

As questões devem funcionar como CONSOLIDAÇÃO do que acabou de ser explicado, e não como uma nova bateria desconectada.

Use principalmente:

- `TIPO: MULTIPLA`;
- `TIPO: ESCRITA` individual;
- `TIPO: ESCRITA` com vários subitens `a)`, `b)`, `c)` etc.;
- `TIPO: VF` quando for pedagogicamente útil para contraste ou reconhecimento.

Não crie questões para perguntar se o estudante entendeu o texto em português.

Não pergunte “qual era a regra explicada acima?”.

Faça o estudante APLICAR a regra em sueco.

---

## 13. SEQUÊNCIA PEDAGÓGICA DAS QUESTÕES

Sempre que o material permitir, organize a prática em progressão de dificuldade.

### 13.1 PRIMEIRO — RECONHECIMENTO E CONTRASTE

As primeiras questões podem ajudar o estudante a distinguir formas corretas e incorretas, tempos diferentes ou singular/plural.

Use múltipla escolha ou verdadeiro/falso com parcimônia quando isso ajudar a reconstruir a distinção.

### 13.2 DEPOIS — PRODUÇÃO CONTROLADA

Passe rapidamente para questões ESCRITA em que o estudante precise produzir a forma correta.

Questões agrupadas são especialmente adequadas quando vários itens treinam a mesma regra.

### 13.3 EM SEGUIDA — TRANSFERÊNCIA

Use palavras, frases ou combinações novas dentro do vocabulário autorizado para verificar se o estudante aprendeu a regra e não apenas memorizou o exemplo explicado.

### 13.4 AO FINAL — MISTURA CONTROLADA

Quando houver mais de um grupo de dificuldade, inclua algumas questões em que o estudante precise identificar qual regra aplicar sem receber explicitamente o nome da categoria.

Essa etapa deve permanecer compatível com o nível já estudado.

---

## 14. DISTRIBUIÇÃO DAS QUESTÕES SEGUNDO O DIAGNÓSTICO

A quantidade de prática dedicada a cada assunto deve ser proporcional à evidência de dificuldade.

Como orientação:

- um padrão que apareceu repetidamente deve receber várias oportunidades de prática;
- um erro gramatical isolado pode receber uma ou duas oportunidades;
- uma consulta lexical repetida pode receber uma pequena retomada;
- uma consulta lexical única normalmente não deve ocupar uma questão inteira, salvo se estiver ligada a outro padrão relevante;
- uma questão não respondida deve receber prioridade menor que um erro efetivamente produzido.

Se o usuário determinar uma quantidade de questões, respeite-a.

Se não houver quantidade definida, produza um conjunto suficientemente amplo para revisar os principais grupos de dificuldade sem tornar a sessão cansativa. Prefira profundidade nos padrões realmente frágeis a cobertura superficial de todos os itens do diagnóstico.

---

## 15. COMO CRIAR A NOVA PRÁTICA

Produza questões novas e varie, quando apropriado:

- reconhecimento;
- produção;
- transformação;
- contraste entre formas semelhantes;
- frases curtas;
- itens agrupados;
- múltipla escolha;
- verdadeiro/falso;
- uso contextual dentro do próprio enunciado.

Quando uma dificuldade aparecer várias vezes, crie mais de uma oportunidade de praticá-la em contextos diferentes.

Evite transformar todos os erros em uma sequência mecânica de `palavra antiga → mesma resposta correta`.

Prefira transferência do conhecimento para material novo.

É permitido reapresentar ocasionalmente uma forma que foi errada no diagnóstico para verificar reparação da aprendizagem, mas ela não deve dominar a revisão e não deve ser apresentada no mesmo enunciado copiado da questão anterior.

Não desperdice questões com compreensão de texto genérica quando o diagnóstico mostra uma dificuldade gramatical ou lexical específica.

---

## 16. QUESTÕES ESCRITAS E EXEMPLOS

Todas as regras de `Questões.md` para `TIPO: ESCRITA` continuam obrigatórias.

Portanto, cada questão ESCRITA deve conter exatamente um exemplo de resposta antes da tarefa real, com a mesma granularidade da resposta que será digitada.

O exemplo não pode fornecer a resposta da própria questão.

Na revisão adaptativa, tenha cuidado especial para que o exemplo não use exatamente a forma cuja recuperação está sendo testada no item seguinte.

O exemplo deve ensinar o formato de resposta, não entregar a solução.

---

## 17. NÃO RECOMPENSAR O ERRO

Nunca use minha forma incorreta como modelo linguístico em uma nova questão.

Ela pode aparecer somente em duas situações:

1. no texto didático, uma única vez, para explicar claramente uma confusão real;
2. em uma questão explicitamente criada para identificar ou corrigir um erro.

Mesmo nesses casos, a forma correta deve receber o foco principal.

---

## 18. RELAÇÃO ENTRE EXPLICAÇÃO E QUESTÕES

Tudo que receber explicação relevante no `[TEXTO]` deve, sempre que possível, ser praticado depois.

Não explique extensamente uma regra que não aparecerá em nenhuma questão.

Da mesma forma, não concentre a maior parte das questões em um assunto que o texto inicial praticamente não preparou, salvo quando se tratar de conteúdo já dominado usado apenas como integração.

A revisão deve produzir sensação de continuidade:

EXPLICAÇÃO → RECONHECIMENTO → PRODUÇÃO → TRANSFERÊNCIA → MISTURA.

---

## 19. SAÍDA FINAL

Entregue o novo exercício diretamente no formato importável definido por `Questões.md`.

Não inclua antes ou depois do exercício:

- diagnóstico em formato separado;
- comentários sobre seu planejamento;
- justificativas sobre por que escolheu cada questão;
- Markdown explicativo fora do formato de importação.

A explicação pedagógica deve estar DENTRO do exercício, no primeiro bloco `[TEXTO]`.

A saída final deve seguir este esqueleto:

`[EXERCICIO]`

`TITULO: ...`

`[TEXTO]`

texto didático personalizado em português, dividido em parágrafos naturais

`[QUESTAO]`

...

`[QUESTAO]`

...

`[FIM]`

Faça a análise do diagnóstico silenciosamente e entregue somente o exercício final compatível com o aplicativo.

---

## 20. DADOS

Depois destas instruções eu fornecerei:

`[DIAGNOSTICO_REVISAO_SUECO]`

...

`[FIM_DIAGNOSTICO]`

Use esse bloco como fonte de evidência pedagógica para decidir:

- o que explicar;
- quanto explicar;
- o que praticar mais;
- o que praticar menos;
- quais contrastes são necessários;
- quais itens de vocabulário merecem retomada;
- quais questões devem verificar transferência da aprendizagem.
