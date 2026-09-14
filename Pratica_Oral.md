# ESPECIFICAÇÃO STANDALONE PARA GERAÇÃO DE PRÁTICA ORAL DE SUECO

## 0. FINALIDADE E ENTRADA

Vou fornecer somente um arquivo `words.json`.

Sua tarefa é gerar um exercício destinado exclusivamente à prática oral em sueco, pronto para importação no meu aplicativo.

Esta especificação é autossuficiente. Não dependa de qualquer outro texto, prompt, arquivo de instruções ou regra externa, exceto do `words.json` fornecido junto com ela.

Não crie bloco `[TEXTO]`.

Não crie questões avaliativas reais. A única `[QUESTAO]` permitida será uma questão dummy obrigatória por compatibilidade técnica com o aplicativo, conforme definido nesta especificação.

---

# 1. VOCABULÁRIO AUTORIZADO

## 1.1 Entradas autorizadas do words.json

Use como base exclusivamente o vocabulário proveniente de entradas do `words.json` que possuam:

- `active: true`;
- `classification.chapter` válido.

Como esta especificação deve funcionar apenas com o `words.json`, sem um parâmetro externo `CAPÍTULOS:`, considere automaticamente autorizados TODOS os capítulos presentes nas entradas ativas válidas do arquivo.

Portanto:

- entradas com `active: false` não podem fornecer vocabulário;
- não introduza palavras suecas comuns externas ao conjunto autorizado;
- não introduza palavras apenas porque sejam frequentes, básicas, úteis ou necessárias para tornar a conversa mais natural;
- quando uma construção desejada exigir vocabulário não autorizado, reformule a fala usando somente o material disponível.

Se o vocabulário disponível for limitado, prefira repetir palavras já autorizadas, reutilizá-las em outros contextos, flexioná-las legitimamente e modificar a estrutura das frases em vez de introduzir vocabulário externo.

## 1.2 O que conta como vocabulário autorizado

Uma palavra, expressão ou lema existente em uma entrada autorizada do JSON pode ser utilizado.

Também podem ser utilizadas flexões gramaticais corretas derivadas das palavras autorizadas, quando forem realmente aplicáveis à palavra em questão.

Isso inclui, conforme o caso:

- singular;
- plural;
- singular definido;
- plural definido;
- formas indefinidas;
- formas com `en`;
- formas com `ett`;
- infinitivo;
- presente;
- pretérito;
- supino;
- perfeito;
- imperativo;
- concordância de adjetivos;
- outras flexões normais e legítimas da língua sueca.

Se um verbo autorizado estiver cadastrado em uma de suas formas, suas demais formas flexionadas gramaticalmente legítimas podem ser usadas.

Se um substantivo autorizado possuir formas legítimas de plural ou definido, essas formas podem ser usadas.

Uma flexão legítima de uma palavra autorizada NÃO constitui vocabulário novo.

Entretanto, não crie outro lema apenas por relação semântica, derivação lexical, associação temática ou semelhança de significado. Sinônimos, antônimos, palavras derivadas ou palavras semanticamente relacionadas não ficam automaticamente autorizados.

## 1.3 Palavras funcionais

Preposições, artigos, pronomes, conjunções, advérbios, auxiliares e demais palavras funcionais NÃO estão automaticamente autorizados apenas por serem frequentes ou necessários em sueco.

Uma palavra funcional somente pode ser utilizada quando satisfizer pelo menos uma destas condições:

1. aparece diretamente em uma entrada autorizada do JSON;
2. aparece dentro de uma expressão autorizada do JSON;
3. constitui uma flexão gramatical legítima de uma palavra autorizada.

Não introduza uma palavra funcional externa apenas para facilitar a construção de uma frase.

Se determinada estrutura exigir uma palavra funcional ainda não autorizada, reformule a construção.

## 1.4 Expressões do JSON e desmembramento

Expressões existentes em entradas autorizadas do JSON podem ser:

- utilizadas integralmente;
- reutilizadas parcialmente;
- desmembradas em suas palavras componentes.

Cada palavra que esteja efetivamente presente dentro de uma expressão autorizada passa a ser considerada vocabulário autorizado.

É permitido:

- usar a expressão integral;
- utilizar isoladamente uma palavra que faça parte dela;
- utilizar outra palavra componente em outra frase;
- combinar palavras realmente presentes nessa expressão com outras palavras autorizadas;
- flexionar legitimamente uma palavra retirada da expressão, quando isso for gramaticalmente possível.

O desmembramento não precisa preservar o significado original da expressão, desde que a nova construção seja gramaticalmente correta e semanticamente coerente.

Porém:

- somente palavras realmente presentes na expressão ficam autorizadas;
- palavras semanticamente relacionadas não ficam autorizadas;
- sinônimos não ficam autorizados;
- palavras normalmente associadas à expressão não ficam autorizadas.

## 1.5 Nomes próprios e elementos geográficos

É permitido introduzir nomes próprios mesmo que eles não apareçam no `words.json`.

Essa exceção inclui:

- nomes de pessoas;
- sobrenomes;
- cidades;
- países;
- regiões;
- bairros;
- ruas;
- rios;
- lagos;
- montanhas;
- ilhas;
- outros nomes geográficos próprios.

Escolha nomes adequados à situação comunicativa criada.

Essa exceção vale SOMENTE para nomes próprios e elementos geográficos.

Ela não autoriza introduzir livremente substantivos comuns, verbos, adjetivos, advérbios, preposições, pronomes, conjunções, profissões, objetos, alimentos, meios de transporte, lugares comuns, expressões ou qualquer outro vocabulário temático externo.

A introdução de um nome geográfico próprio também não autoriza automaticamente palavras comuns relacionadas a esse lugar.

## 1.6 Prioridade em caso de conflito

Quando houver conflito entre naturalidade e restrição lexical, siga esta prioridade:

1. respeitar o vocabulário autorizado;
2. escrever sueco gramaticalmente correto;
3. manter coerência semântica e comunicativa;
4. produzir uma conversa natural;
5. variar estruturas, flexões e vocabulário.

Nunca introduza vocabulário comum externo apenas para tornar a conversa mais bonita, fluida ou natural.

---

# 2. CAPÍTULOS E NÍVEL DO ALUNO

Considere todos os capítulos presentes nas entradas ativas válidas do `words.json` como um único repertório cumulativo autorizado.

Não dê prioridade automática aos capítulos mais altos.

Não siga uma hierarquia do tipo:

capítulo mais alto > capítulo anterior > capítulos anteriores.

Para seleção lexical e construção da conversa, todos os capítulos autorizados podem ser utilizados livremente conforme sua utilidade para naturalidade, variedade, coerência e progressão comunicativa.

Identifique silenciosamente o maior valor de `classification.chapter` existente entre as entradas ativas válidas. Considere esse capítulo apenas como uma referência aproximada do nível mais recente alcançado pelo aluno.

Examine especialmente as expressões existentes nesse capítulo mais alto para estimar:

- complexidade sintática já estudada;
- extensão provável das falas que o aluno consegue compreender e produzir;
- tipos de pergunta e resposta já acessíveis;
- tempos verbais, pronomes, advérbios, preposições e outras estruturas já introduzidas.

Essa análise NÃO autoriza vocabulário externo e NÃO significa que o vocabulário do capítulo mais alto deva dominar a conversa.

Não é necessário repetir constantemente expressões do capítulo final. Utilize-as principalmente como indicador de nível.

---

# 3. OBJETIVO DA PRÁTICA ORAL

Crie uma conversa extensa, coerente, progressiva e semelhante a uma interação real.

A prática deve conter MAIS DE 40 interações no total.

Para eliminar qualquer ambiguidade matemática, produza no mínimo:

- 21 falas do interlocutor; e
- 21 campos `VOCÊ:`.

Assim, a prática terá no mínimo 42 interações comunicativas.

Pode haver mais de 21 pares quando isso contribuir para uma conversa melhor, mas evite alongamento artificial.

Cada fala do interlocutor deve avançar naturalmente a conversa.

Cada campo `VOCÊ:` deve estar semanticamente relacionado à fala imediatamente anterior e pedir ao estudante uma reação comunicativa plausível.

A resposta registrada em `RESPOSTA:` deve responder corretamente ao que acabou de ser dito ou perguntado.

Não produza uma sequência de perguntas e respostas independentes apenas para encaixar vocabulário.

Construa uma situação comunicativa contínua. A conversa pode mudar gradualmente de assunto, desde que as transições façam sentido.

Sempre que possível, reutilize informações já estabelecidas anteriormente na conversa para criar continuidade, referência e progressão.

Não contradiga fatos ou escolhas já estabelecidos na própria conversa.

---

# 4. PROGRESSÃO DA CONVERSA

Comece com construções relativamente simples e avance gradualmente para falas um pouco mais elaboradas, sempre dentro do repertório autorizado.

Ao longo da conversa, quando o material do `words.json` permitir, varie de forma natural:

- afirmações;
- perguntas;
- respostas;
- negações;
- reações;
- comentários;
- pedidos;
- preferências;
- descrições;
- informações sobre pessoas, lugares, atividades, datas, horários, estados ou condições;
- singular e plural;
- formas definidas e indefinidas;
- diferentes pronomes;
- diferentes pessoas verbais;
- presente;
- pretérito;
- infinitivo;
- supino;
- perfeito;
- imperativo;
- diferentes posições dos elementos na frase;
- combinações de duas ou mais informações em uma mesma fala.

Utilize somente estruturas que possam ser construídas legitimamente com o vocabulário autorizado.

Não force variedade gramatical se isso exigir palavras externas.

A dificuldade deve crescer principalmente pela combinação de material já conhecido, e não pela introdução de vocabulário novo.

---

# 5. ESTRUTURA OBRIGATÓRIA DO EXERCÍCIO

O conteúdo importável deve utilizar somente estas marcações estruturais:

[EXERCICIO]
[QUESTAO]
[FALA]
[FIM]

Os campos utilizados serão:

TITULO:
TIPO:
RESPOSTA:
VOCÊ:

`VOCÊ:` é exclusivo do bloco `[FALA]`.

Não invente outras marcações ou campos.

Não crie `[TEXTO]`.

Não crie `[PROVA]`, `[PERGUNTA]`, `[GABARITO]`, `[RESPOSTAS]`, `[FINAL]` ou qualquer marcação equivalente.

A estrutura global deve ser EXATAMENTE:

[EXERCICIO]
TITULO: <título adequado à situação criada>

[QUESTAO]
TIPO: VF
<uma afirmação dummy simples e autossuficiente>

RESPOSTA: V ou F

[FALA]
<prática oral completa>

[FIM]

O exercício deve começar exatamente com `[EXERCICIO]` e terminar exatamente com `[FIM]`.

Nada relevante pode aparecer depois de `[FIM]`.

---

# 6. TÍTULO

Crie o título somente depois de planejar a situação da conversa.

O título deve representar a situação comunicativa efetivamente criada.

Prefira um título curto em sueco formado por vocabulário autorizado. Nomes próprios e elementos geográficos podem ser utilizados conforme a exceção desta especificação.

Não introduza vocabulário externo apenas para criar um título mais elegante.

---

# 7. QUESTÃO DUMMY OBRIGATÓRIA

Embora o objetivo seja exclusivamente prática oral, o aplicativo exige pelo menos um bloco `[QUESTAO]`.

Por isso, crie obrigatoriamente EXATAMENTE UMA questão dummy antes de `[FALA]`.

Essa questão:

- existe apenas por exigência técnica do aplicativo;
- não faz parte pedagogicamente da prática oral;
- deve ser `TIPO: VF`;
- deve ser extremamente simples;
- deve utilizar somente vocabulário sueco autorizado por esta especificação;
- deve possuir `RESPOSTA: V` ou `RESPOSTA: F`;
- não deve possuir `EXPLICACAO:`;
- não deve introduzir conteúdo novo;
- não deve depender de conhecimento histórico, geográfico, cultural ou factual externo;
- não deve depender de um bloco `[TEXTO]`;
- deve possuir valor de verdade inequívoco a partir do próprio material linguístico autorizado;
- deve aparecer imediatamente antes de `[FALA]`;
- deve ser a única `[QUESTAO]` do exercício.

Para construir essa questão, escolha silenciosamente entre o vocabulário autorizado uma proposição mínima, gramaticalmente correta e inequivocamente verdadeira ou falsa. Quando necessário, baseie a proposição em uma relação linguística que possa ser verificada a partir do próprio `words.json` e das flexões legítimas, e não em fatos do mundo.

Não utilize a questão dummy para ensinar, revisar ou introduzir conteúdo.

---

# 8. REGRAS DO BLOCO [FALA]

`[FALA]` não é uma questão, não vale pontos e não participa da nota.

Nunca utilize:

TIPO: FALA

Use somente um bloco `[FALA]`.

O bloco `[FALA]` deve aparecer imediatamente depois da única questão dummy e imediatamente antes de `[FIM]`.

Não coloque nenhuma `[QUESTAO]` depois de `[FALA]`.

Toda fala do interlocutor deve utilizar o formato:

Nome: fala em sueco

O nome deve começar com letra maiúscula.

Em seguida utilize:

VOCÊ: <instrução em português sobre o que o estudante deve dizer em sueco>
RESPOSTA: <uma resposta natural possível em sueco>

Cada `VOCÊ:` representa uma fala que o estudante deverá produzir oralmente em sueco.

Cada `VOCÊ:` deve ser seguido IMEDIATAMENTE por seu campo `RESPOSTA:`.

A instrução em `VOCÊ:` deve:

- estar em português;
- explicar o conteúdo comunicativo que o estudante deverá produzir;
- estar relacionada à fala imediatamente anterior;
- não fornecer antecipadamente a formulação sueca esperada;
- não funcionar como simples tradução palavra por palavra;
- permitir que o estudante recupere e produza a fala por conta própria.

Não inclua `EXPLICACAO:` dentro de `[FALA]`.

Não inclua alternativas A), B), C) etc.

Não inclua subitens a), b), c) etc.

Não crie campos para resposta escrita do estudante dentro de `[FALA]`.

---

# 9. RESPOSTAS POSSÍVEIS DENTRO DE [FALA]

O campo `RESPOSTA:` contém uma ou mais FORMAS POSSÍVEIS que o estudante poderia ter falado.

Essas formas servem para conferência e autocorreção. Elas não constituem um gabarito exaustivo da língua real.

Uma formulação diferente das cadastradas pode também ser correta.

Quando houver várias formulações naturais, previsíveis e semanticamente compatíveis, separe-as por:

|

Formato:

RESPOSTA: <forma possível 1> | <forma possível 2> | <forma possível 3>

Não existe obrigação de cadastrar várias respostas.

Se houver uma forma claramente mais natural e previsível, use apenas essa forma.

Não crie variantes artificiais somente para aumentar a quantidade de respostas.

Cadastre apenas formulações que sejam simultaneamente:

- gramaticalmente corretas;
- naturais;
- semanticamente compatíveis com a instrução `VOCÊ:`;
- adequadas ao contexto acumulado da conversa;
- formadas somente por vocabulário autorizado e flexões legítimas;
- plausíveis como produção do aluno no nível indicado pelo `words.json`.

Todas as formulações cadastradas em `RESPOSTA:` dentro de `[FALA]` devem estar em sueco.

---

# 10. COERÊNCIA COMUNICATIVA

A prática oral deve formar uma conversa verdadeiramente desenvolvida.

Cada turno deve considerar o que já foi dito anteriormente.

O interlocutor pode:

- responder ao estudante;
- reagir à informação dada;
- fazer uma pergunta relacionada;
- acrescentar uma informação;
- mudar gradualmente o foco;
- retomar uma informação anterior;
- formular um pedido;
- comentar uma preferência;
- comparar situações;
- continuar um plano ou sequência de acontecimentos;
- encerrar naturalmente um assunto antes de iniciar outro.

Os campos `VOCÊ:` podem pedir ao estudante, quando o vocabulário permitir:

- responder a uma pergunta;
- fazer uma pergunta;
- responder e fazer uma nova pergunta na mesma fala;
- reagir ao que o interlocutor disse;
- comentar;
- dar duas ou mais informações relacionadas;
- formular um pedido;
- expressar preferência;
- indicar estado ou condição;
- descrever algo;
- falar de uma ação presente ou passada;
- combinar informações já estabelecidas na conversa.

Não transforme a prática em repetição de palavras isoladas.

Não produza uma sucessão mecânica do tipo pergunta sem contexto → resposta → nova pergunta sem relação.

---

# 11. VARIEDADE LEXICAL

Procure utilizar uma parcela ampla do vocabulário autorizado ao longo da conversa, sem sacrificar naturalidade ou coerência.

Evite repetir desnecessariamente sempre os mesmos substantivos, verbos, adjetivos e expressões quando houver outras opções autorizadas que se encaixem naturalmente.

Entretanto, a repetição é permitida e desejável quando necessária para:

- manter coerência;
- retomar um referente;
- continuar um assunto;
- praticar deliberadamente uma estrutura;
- produzir linguagem natural;
- lidar com vocabulário limitado.

A variedade lexical é uma prioridade, não uma proibição de repetição.

---

# 12. AUDITORIA SILENCIOSA DO VOCABULÁRIO

Antes de entregar, revise silenciosamente TODAS as palavras suecas utilizadas em:

- `TITULO:`;
- afirmação da questão dummy;
- falas do interlocutor;
- respostas possíveis cadastradas em `RESPOSTA:`;
- qualquer trecho sueco que eventualmente apareça dentro de uma instrução `VOCÊ:`.

Evite colocar sueco dentro de `VOCÊ:`; as instruções devem permanecer em português. Se algum trecho sueco for indispensável, ele também deve obedecer às regras de vocabulário.

Cada palavra comum sueca deve satisfazer pelo menos uma destas condições:

1. pertence diretamente a uma entrada com `active: true` e `classification.chapter` válido;
2. aparece efetivamente dentro de uma expressão pertencente a uma entrada autorizada;
3. é uma flexão gramatical legítima de uma palavra autorizada.

Nomes próprios e elementos geográficos podem ser utilizados exclusivamente conforme a exceção definida nesta especificação.

Se encontrar vocabulário comum não autorizado, reescreva a frase antes de entregar.

Não informe ao usuário que realizou essa auditoria.

---

# 13. AUDITORIA SILENCIOSA DA GRAMÁTICA E DA CONVERSA

Antes da resposta final, confira silenciosamente:

1. se há exatamente uma `[QUESTAO]` dummy antes de `[FALA]`;
2. se essa questão utiliza exatamente `TIPO: VF`;
3. se a questão dummy possui apenas `RESPOSTA: V` ou `RESPOSTA: F`;
4. se a questão dummy é inequívoca e não depende de conhecimento externo;
5. se não existe nenhum bloco `[TEXTO]`;
6. se existe exatamente um bloco `[FALA]`;
7. se há no mínimo 21 falas do interlocutor;
8. se há no mínimo 21 campos `VOCÊ:`;
9. se, portanto, existem mais de 40 interações comunicativas no total;
10. se cada `VOCÊ:` é seguido imediatamente por `RESPOSTA:`;
11. se nenhuma `[QUESTAO]` aparece depois de `[FALA]`;
12. se `[FALA]` aparece imediatamente antes de `[FIM]`;
13. se cada fala do interlocutor responde, reage ou avança logicamente o contexto anterior;
14. se cada instrução `VOCÊ:` está semanticamente ligada à fala imediatamente anterior;
15. se cada `RESPOSTA:` cumpre corretamente a instrução `VOCÊ:`;
16. se a conversa possui progressão temática e não parece uma lista de frases independentes;
17. se transições de assunto são naturais;
18. se não há contradições entre informações estabelecidas em turnos diferentes;
19. se todas as frases suecas são gramaticalmente corretas;
20. se todas as frases fazem sentido semanticamente;
21. se todo vocabulário sueco comum está autorizado ou constitui flexão legítima;
22. se nenhuma palavra externa foi introduzida apenas para facilitar a conversa;
23. se as respostas cadastradas são naturais e plausíveis;
24. se `|` separa apenas formulações alternativas realmente aceitáveis da mesma fala;
25. se nenhuma variante artificial foi cadastrada apenas para aumentar tolerância;
26. se as instruções `VOCÊ:` estão em português e não revelam antecipadamente a frase sueca esperada;
27. se a dificuldade progride de forma razoável;
28. se o nível geral é compatível com o repertório demonstrado pelo `words.json`, especialmente pelas expressões do capítulo ativo mais alto;
29. se o título utiliza somente vocabulário permitido ou nomes próprios/geográficos autorizados pela exceção;
30. se `[FIM]` é a última marcação do exercício.

Corrija silenciosamente qualquer problema encontrado antes de produzir a resposta final.

---

# 14. FORMATO DA RESPOSTA DA IA

Quando esta especificação e o `words.json` forem fornecidos, entregue SOMENTE o exercício pronto para importação.

Não explique o que fez.

Não apresente comentários, avisos, introduções ou observações antes ou depois do exercício.

Coloque todo o exercício dentro de UM ÚNICO bloco de código para facilitar a cópia.

Dentro desse bloco de código, não utilize Markdown, HTML, JSON ou qualquer formatação adicional.

O conteúdo importável deve começar exatamente com:

[EXERCICIO]

E terminar exatamente com:

[FIM]

As crases utilizadas pela interface para delimitar o bloco de código não fazem parte do conteúdo importável.

A estrutura final obrigatória é:

[EXERCICIO]
TITULO: <título adequado à conversa>

[QUESTAO]
TIPO: VF
<afirmação dummy extremamente simples e autossuficiente>

RESPOSTA: <V ou F>

[FALA]
<Nome>: <fala em sueco>
VOCÊ: <instrução em português>
RESPOSTA: <resposta natural em sueco> | <outra resposta natural, somente se realmente couber>

<Nome>: <nova fala em sueco>
VOCÊ: <nova instrução em português>
RESPOSTA: <resposta natural em sueco>

<continuar até haver no mínimo 21 falas do interlocutor e 21 campos VOCÊ:>

[FIM]
