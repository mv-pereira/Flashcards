# ESPECIFICAÇÃO OFICIAL PARA GERAÇÃO DE EXERCÍCIOS DO APP DE SUECO

Vou fornecer um arquivo `words.json`.

Sua tarefa é criar um exercício de sueco compatível com meu aplicativo, obedecendo rigorosamente às regras abaixo.

O exercício será posteriormente copiado e colado diretamente no aplicativo, que interpretará sua estrutura, renderizará as questões e fará a correção.

---

# 1. VOCABULÁRIO PERMITIDO

Use como base exclusivamente o vocabulário proveniente das entradas do arquivo `words.json` que satisfaçam simultaneamente estas condições:

* `active: true`;
* `classification.chapter` esteja dentro do intervalo de capítulos informado por mim.

Exemplo:

Se eu disser:

`CAPÍTULOS: 0 até 6`

podem ser utilizadas somente entradas ativas pertencentes aos capítulos:

0, 1, 2, 3, 4, 5 e 6.

Não utilize vocabulário comum proveniente de capítulos posteriores.

Não introduza palavras suecas novas apenas para tornar o texto mais natural.

Se o vocabulário disponível for limitado, prefira:

* repetir palavras já estudadas;
* reutilizá-las em outros contextos;
* mudar tempos verbais;
* usar plural;
* usar formas definidas;
* mudar a estrutura das frases;

em vez de introduzir vocabulário externo.

---

# 1.1 O QUE CONTA COMO VOCABULÁRIO PERMITIDO

Uma palavra, expressão ou lema existente em uma entrada autorizada do JSON pode ser utilizado.

Também podem ser utilizadas flexões gramaticais corretas derivadas das palavras autorizadas.

Isso inclui, quando gramaticalmente aplicável:

* singular;
* plural;
* singular definido;
* plural definido;
* formas indefinidas;
* formas com `en`;
* formas com `ett`;
* infinitivo;
* presente;
* pretérito;
* supino;
* perfeito;
* imperativo;
* concordância de adjetivos;
* outras flexões normais da língua sueca.

Exemplo conceitual:

Se um verbo permitido estiver cadastrado em seu infinitivo, suas formas gramaticais corretas também podem ser utilizadas.

Se um substantivo permitido possuir formas de plural ou definido, essas formas também podem ser utilizadas.

Uma flexão legítima de uma palavra autorizada NÃO é considerada vocabulário novo.

Porém, criar uma palavra semanticamente relacionada ou derivar outro lema diferente NÃO é permitido apenas porque o significado seja semelhante.

---

# 1.2 PALAVRAS FUNCIONAIS

Preposições, artigos, pronomes, conjunções, advérbios, auxiliares e demais palavras funcionais NÃO estão automaticamente liberados apenas por serem frequentes na língua sueca.

Essas palavras precisam estar autorizadas por alguma das seguintes condições:

1. aparecem diretamente como entrada válida no JSON;
2. aparecem dentro de uma expressão autorizada do JSON;
3. constituem uma flexão legítima de uma palavra autorizada.

Portanto, não utilize uma palavra funcional externa ao material apenas porque ela facilitaria a construção de uma frase.

Se determinada estrutura exigir vocabulário ainda não autorizado, reformule a frase usando apenas o material disponível.

---

# 1.3 EXPRESSÕES DO JSON

Expressões presentes no JSON podem ser:

* utilizadas integralmente;
* reutilizadas parcialmente;
* desmembradas em suas palavras componentes.

Cada palavra efetivamente presente dentro de uma expressão autorizada passa a ser considerada vocabulário permitido.

Exemplo conceitual:

Se uma expressão autorizada contiver:

`Jag kommer gärna`

é permitido:

* usar `Jag kommer gärna` integralmente;
* utilizar `jag` em outra frase;
* utilizar `kommer` em outra frase;
* utilizar `gärna` em outra construção;
* combinar essas palavras com outras palavras autorizadas.

As palavras retiradas de uma expressão também podem ser flexionadas quando isso for gramaticalmente legítimo.

O desmembramento não precisa preservar o significado original da expressão, desde que a nova construção seja gramaticalmente correta.

Porém:

* somente palavras realmente presentes na expressão ficam autorizadas;
* palavras semanticamente relacionadas não ficam automaticamente autorizadas;
* sinônimos não ficam automaticamente autorizados;
* palavras normalmente associadas à expressão também não ficam autorizadas.

Exemplo:

Se uma expressão contém `hem`, então `hem` pode ser reutilizada.

Isso não autoriza automaticamente outras palavras relacionadas a casa ou residência.

---

# 1.4 NOMES PRÓPRIOS, CIDADES, PAÍSES E OUTROS ELEMENTOS GEOGRÁFICOS

É permitido introduzir nomes próprios mesmo que eles não apareçam no `words.json`.

Isso inclui:

* nomes de pessoas;
* sobrenomes;
* cidades;
* países;
* regiões;
* bairros;
* ruas;
* rios;
* lagos;
* montanhas;
* ilhas;
* outros nomes geográficos próprios.

Exemplos aceitáveis:

Anna
Erik
Sofia
Anders
Stockholm
Malmö
Göteborg
Uppsala
Sverige
Norge
Danmark
Finland
Brasilien

Podem ser utilizados nomes típicos da Suécia ou nomes próprios adequados ao contexto.

Essa permissão serve para deixar narrativas e situações mais naturais.

Entretanto, essa exceção vale APENAS para nomes próprios e elementos geográficos.

Ela NÃO autoriza introduzir livremente:

* substantivos comuns;
* verbos;
* adjetivos;
* advérbios;
* preposições;
* pronomes;
* conjunções;
* expressões comuns;
* profissões;
* objetos;
* meios de transporte;
* alimentos;
* lugares comuns;
* qualquer outro vocabulário temático externo.

Exemplo:

É permitido introduzir:

`Stockholm`

Isso não autoriza automaticamente palavras suecas correspondentes a:

* aeroporto;
* metrô;
* museu;
* hotel;
* praça;
* estação;

a menos que essas palavras já estejam autorizadas pelas demais regras.

---

# 1.5 PRIORIDADE DAS REGRAS DE VOCABULÁRIO

Quando houver conflito entre naturalidade e restrição de vocabulário, siga esta prioridade:

1. respeitar o vocabulário permitido;
2. escrever sueco gramaticalmente correto;
3. criar um texto coerente;
4. criar um texto natural;
5. variar estruturas e flexões.

Nunca introduza vocabulário comum externo apenas para tornar o texto mais bonito ou mais natural.

# 1.6 PRIORIDADE DOS CAPÍTULOS MAIS RECENTES

Embora todo o intervalo de capítulos informado esteja autorizado, os capítulos NÃO devem receber o mesmo peso.

Dê sempre prioridade ao vocabulário, às estruturas e à gramática dos capítulos mais altos do intervalo solicitado, pois representam o conteúdo estudado mais recentemente.

Exemplo:

Se o pedido for:

CAPÍTULOS: 0 até 6

a prioridade deve ser aproximadamente:

1. capítulo 6 — prioridade máxima;
2. capítulo 5 — prioridade alta;
3. capítulo 4 — prioridade secundária;
4. capítulos 0 a 3 — principalmente revisão e apoio.

O exercício deve funcionar como uma revisão cumulativa, mas com forte concentração no conteúdo mais recente.

Sempre que possível:

- use mais vocabulário do capítulo mais alto;
- reutilize estruturas introduzidas no capítulo mais alto;
- faça mais perguntas sobre o capítulo mais alto;
- utilize o capítulo imediatamente anterior como segunda prioridade;
- utilize capítulos antigos principalmente para construir contexto e revisar conhecimentos anteriores.

Não distribua o exercício uniformemente entre todos os capítulos.

Como referência, em um exercício de 15 questões:

- aproximadamente 6 a 8 questões devem enfatizar diretamente o capítulo mais alto;
- aproximadamente 3 a 5 questões devem enfatizar o capítulo imediatamente anterior;
- as questões restantes podem revisar capítulos anteriores ou combinar conteúdos de vários capítulos.

Essa distribuição não precisa ser matemática quando o conteúdo disponível não permitir, mas a predominância dos capítulos mais recentes deve ser clara.

Se o capítulo mais alto tiver pouco conteúdo suficiente para produzir questões de qualidade, utilize progressivamente o capítulo anterior, sem introduzir conteúdo externo.

---

# 2. TEXTO PRINCIPAL

Produza um texto principal em sueco com aproximadamente a quantidade de palavras solicitada.

Quando eu pedir:

`TAMANHO DO TEXTO: aproximadamente 300 palavras`

o alvo deve ser próximo de 300 palavras.

Uma pequena variação é aceitável para preservar:

* coerência;
* naturalidade;
* gramática;
* restrições de vocabulário.

O texto deve ser:

* coerente;
* compreensível;
* linguisticamente correto;
* adequado ao nível do vocabulário disponível;
* suficientemente rico para gerar questões;
* contextualizado.

Pode assumir a forma de:

* narrativa;
* situação cotidiana;
* diálogo;
* pequena história;
* relato;
* sequência de acontecimentos;
* descrição;
* combinação dessas formas.

Evite produzir apenas uma coleção de frases desconectadas para encaixar palavras do JSON.

O texto principal também deve privilegiar os capítulos mais recentes.

Não tente representar cada capítulo de maneira uniforme.

Se os capítulos autorizados forem 0 até X, utilize especialmente vocabulário e estruturas do capítulo X e, em segundo lugar, do capítulo X-1.

Vocabulário de capítulos anteriores deve servir principalmente para:

- conectar as frases;
- construir contexto;
- revisar conteúdo antigo;
- permitir o uso natural do conteúdo mais recente.

O texto deve criar oportunidades naturais para reutilizar o conteúdo introduzido mais recentemente.

---

# 2.1 VARIEDADE GRAMATICAL NO TEXTO

Utilize de forma natural, quando o vocabulário permitir:

* presente;
* pretérito;
* infinitivo;
* supino;
* perfeito;
* imperativo;
* perguntas;
* frases afirmativas;
* frases negativas;
* singular;
* plural;
* formas definidas;
* formas indefinidas;
* diferentes pronomes;
* diferentes posições na frase;
* diferentes estruturas sintáticas;
* diferentes pessoas e referentes.

Não é obrigatório utilizar todas essas estruturas em cada exercício.

Utilize apenas as que façam sentido e possam ser construídas legitimamente com o material autorizado.

Não force uma estrutura gramatical se para isso for necessário introduzir vocabulário proibido.

---

# 3. QUANTIDADE DE QUESTÕES E SUBITENS

Quando eu solicitar determinada quantidade de questões, essa quantidade se refere ao número de blocos [QUESTAO].

Questões de compreensão, MULTIPLA e VF normalmente correspondem a uma única tarefa.

Questões gramaticais do tipo ESCRITA podem conter vários subitens a), b), c), d) etc.

Os subitens internos não aumentam a contagem de blocos [QUESTAO].

Entretanto, controle o tamanho total do exercício.

Em um exercício padrão de 15 [QUESTAO], não transforme todas as questões gramaticais em blocos de 8 subitens.

Como referência, utilize normalmente entre 2 e 4 questões gramaticais agrupadas.

Cada questão agrupada pode conter aproximadamente 4 a 8 subitens conforme a complexidade da tarefa.

As demais questões escritas podem continuar sendo questões individuais quando isso for pedagogicamente mais adequado.

---

# 4. OBJETIVOS DAS QUESTÕES

As questões NÃO devem ser predominantemente de interpretação de texto.

O exercício deve combinar obrigatoriamente dois grandes grupos:

1. compreensão e uso do texto;
2. prática gramatical e estrutural do conteúdo já estudado.

Em um exercício padrão de 15 questões, procure utilizar aproximadamente:

- 7 a 9 questões de compreensão, vocabulário e uso contextual;
- 6 a 8 questões de gramática, transformação, completamento ou produção controlada.

Essa distribuição pode variar conforme o conteúdo dos capítulos, mas deve sempre existir uma quantidade significativa de questões gramaticais.

As questões gramaticais podem avaliar, quando o conteúdo autorizado permitir:

- conjugação verbal;
- infinitivo;
- presente;
- pretérito;
- supino;
- perfeito;
- imperativo;
- plural;
- singular;
- formas definidas;
- formas indefinidas;
- gênero en/ett;
- artigos;
- pronomes pessoais;
- pronomes possessivos;
- pronomes demonstrativos;
- advérbios;
- advérbios de lugar;
- advérbios de direção;
- preposições;
- ordem das palavras;
- negação;
- posição de advérbios;
- concordância;
- numerais;
- números ordinais;
- datas;
- meses;
- dias da semana;
- horas e formas de dizer as horas;
- expressões de tempo;
- transformação de frases;
- escolha entre formas gramaticais semelhantes;
- preenchimento de lacunas.

Não faça todas as questões simplesmente pedindo informações contidas no texto.

O texto principal é uma das fontes do exercício, mas NÃO é necessário que todas as questões dependam dele.

Questões puramente gramaticais podem ser independentes do texto principal, desde que utilizem somente vocabulário e estruturas autorizadas.

Dê PRIORIDADE MÁXIMA ao capítulo mais alto incluído no pedido.

Considere esse capítulo como o foco principal do exercício, pois representa o conteúdo estudado mais recentemente.

Depois, considere o capítulo imediatamente anterior como segunda prioridade.

Os capítulos mais antigos devem funcionar principalmente como revisão acumulada e suporte para o conteúdo novo.

Antes de criar as questões:

1. examine o capítulo mais alto;
2. identifique o novo vocabulário e os novos grupos gramaticais ou funcionais presentes nele;
3. crie várias questões diretamente relacionadas a esses conteúdos;
4. examine o capítulo imediatamente anterior;
5. utilize os capítulos restantes para revisão e integração.

Se o capítulo mais recente introduzir mais de um conteúdo relevante, tente representar vários deles.

Exemplo conceitual:

Se o capítulo mais alto introduzir:

- pretérito;
- novos advérbios;
- novas expressões temporais;

não produza apenas uma questão sobre pretérito.

Crie várias oportunidades para praticar esses elementos por meio de:

- conjugação;
- preenchimento;
- escolha de formas;
- transformação de frases;
- compreensão contextual.

# 4.1 EVITAR CÓPIA LITERAL DO TEXTO

Questões de resposta escrita não devem, como regra geral, limitar-se a reproduzir uma frase do texto com uma única palavra ou expressão retirada para que o estudante simplesmente a copie.

Evite especialmente questões como:

TIPO: ESCRITA
Complete com a expressão usada no texto:
Anna var hemma ____.

quando a frase correspondente aparecer praticamente igual no bloco [TEXTO].

Esse tipo de questão exige principalmente localização visual e transcrição, oferecendo pouca prática linguística.

Quando uma questão escrita utilizar conteúdo do texto, prefira exigir alguma transformação, adaptação ou aplicação do conteúdo estudado.

Por exemplo, pode ser necessário:

- alterar número;
- alterar singular para plural;
- alterar definido ou indefinido;
- alterar pessoa ou pronome;
- alterar possessivo;
- transformar presente em pretérito ou perfeito;
- utilizar outra expressão temporal;
- reorganizar a ordem da frase;
- modificar uma quantidade;
- modificar uma data ou horário;
- substituir uma informação por outra fornecida no enunciado;
- aplicar a mesma estrutura em uma nova situação.

Exemplo:

Se no texto aparecer:

Restiden är en timme.

prefira uma questão como:

Se o percurso durasse três horas, complete corretamente:

Restiden är ____.

RESPOSTA: tre timmar

em vez de:

Complete segundo o texto:

Restiden är en ____.

RESPOSTA: timme

Questões de compreensão podem continuar perguntando informações presentes no texto, especialmente nos tipos MULTIPLA e VF.

Questões ESCRITA também podem depender do texto, mas devem preferencialmente exigir produção, transformação ou aplicação, e não mera cópia literal de um trecho imediatamente localizável.

Uma questão de cópia literal só deve ser utilizada excepcionalmente quando a memorização ou reconhecimento exato de determinada expressão for deliberadamente o objetivo pedagógico.

# 4.2 EXERCÍCIOS GRAMATICAIS AGRUPADOS

Questões gramaticais e estruturais devem, sempre que adequado, seguir o formato tradicional de exercícios de livro didático.

Em vez de criar uma [QUESTAO] independente para cada pequena transformação ou lacuna, é permitido e desejável reunir vários subitens relacionados sob uma única [QUESTAO].

Esse formato deve ser utilizado principalmente quando vários itens praticarem a mesma regra ou estrutura gramatical.

O formato de subitens agrupados é suportado exclusivamente em questões:

TIPO: ESCRITA

Não utilize subitens agrupados em questões TIPO: MULTIPLA ou TIPO: VF.

Toda questão escrita agrupada deve possuir uma instrução geral antes do primeiro subitem a).

Correto:

[QUESTAO]
TIPO: ESCRITA
Complete com o pronome possessivo correto.

a) ...
b) ...

RESPOSTA: a=...; b=...

Incorreto:

[QUESTAO]
TIPO: ESCRITA
a) ...
b) ...

RESPOSTA: a=...; b=...

O aplicativo exige que exista um enunciado ou instrução geral antes de a).

Exemplos adequados:

- completar várias frases com possessivos;
- conjugar vários verbos;
- transformar várias frases para o pretérito;
- transformar frases para o perfeito;
- escolher formas en/ett/plural;
- produzir formas definidas;
- produzir plurais;
- completar preposições;
- completar advérbios;
- reorganizar a ordem das palavras;
- transformar frases começando por determinada expressão;
- praticar concordância de adjetivos;
- completar estruturas com verbos modais;
- praticar datas, horas ou expressões temporais;
- outras séries de exercícios que trabalhem a mesma estrutura.

Os subitens devem ser identificados por letras minúsculas:

a)
b)
c)
d)
e)
f)

etc.

Não utilize letras maiúsculas para identificar subitens gramaticais, pois A), B), C), D) etc. ficam reservadas às alternativas de questões do tipo MULTIPLA.

Exemplo:

[QUESTAO]
TIPO: ESCRITA
Complete com o pronome possessivo correto.

a) Jag har en biljett. Det är ____ biljett.
b) Jag har ett flyg. Det är ____ flyg.
c) Jag har två väskor. Det är ____ väskor.

RESPOSTA: a=min; b=mitt; c=mina
EXPLICACAO: O possessivo deve concordar com substantivos en, ett ou plural.

# 4.2.1 QUANTIDADE DE SUBITENS

Tecnicamente, uma questão agrupada deve possuir no mínimo 2 subitens.

Os subitens devem começar obrigatoriamente por:

a)
b)

e continuar em sequência alfabética, sem pular letras.

Utilize somente letras minúsculas simples de a até z.

O mínimo técnico de 2 subitens não altera a recomendação pedagógica abaixo: normalmente prefira 4 a 8 subitens.

Uma questão gramatical agrupada deve normalmente conter entre 4 e 8 subitens.

Utilize menos subitens quando:

- as transformações forem longas;
- cada resposta exigir uma frase inteira;
- o exercício for linguisticamente mais complexo.

Utilize mais subitens quando:

- as respostas forem palavras curtas;
- o objetivo for repetição controlada;
- o padrão gramatical exigir contraste entre várias formas.

Evite criar blocos excessivamente longos.

Como referência:

- respostas de uma palavra: aproximadamente 5 a 8 subitens;
- respostas curtas: aproximadamente 4 a 6 subitens;
- transformação de frases inteiras: aproximadamente 3 a 5 subitens.

# 4.2.2 RESPOSTAS DOS SUBITENS

Quando uma [QUESTAO] contiver vários subitens, todas as respostas devem aparecer na mesma linha de RESPOSTA:.

Utilize a seguinte sintaxe:

RESPOSTA: a=resposta; b=resposta; c=resposta; d=resposta

O sinal de ponto e vírgula separa as respostas dos diferentes subitens.

Exemplo:

RESPOSTA: a=min; b=mitt; c=mina; d=din; e=ditt; f=dina

A letra do subitem deve sempre ser seguida por "=".

A ordem das respostas em RESPOSTA: deve ser a mesma ordem dos subitens apresentados na questão.

Não omita a identificação da letra.

Correto:

RESPOSTA: a=min; b=mitt; c=mina

Incorreto:

RESPOSTA: min; mitt; mina

# 4.2.3 MAIS DE UMA RESPOSTA CORRETA EM UM SUBITEM

O caractere | continua significando alternativas igualmente corretas PARA O MESMO SUBITEM.

O ponto e vírgula ; separa SUBITENS DIFERENTES.

Exemplo:

RESPOSTA: a=Hon arbetar på ett sjukhus. | På ett sjukhus.; b=Han bor i Stockholm. | I Stockholm.

Portanto:

| = respostas alternativas para o mesmo subitem

; = separação entre subitens diferentes

Nunca utilize | para separar a resposta de a) da resposta de b).

# 4.2.4 CORREÇÃO DOS SUBITENS

Cada subitem de uma questão gramatical agrupada deve ser considerado uma unidade de resposta independente.

O aplicativo deverá poder considerar, por exemplo:

a) correta;
b) incorreta;
c) parcialmente correta;
d) correta.

Um erro em um subitem não deve tornar automaticamente todos os demais subitens incorretos.

Para questões com vários subitens, cada subitem possui o mesmo peso dentro da [QUESTAO].

A pontuação global da questão agrupada é calculada pela média aritmética das pontuações dos seus subitens.

Exemplo:

Se uma questão possuir 4 subitens com as seguintes pontuações:

a) 100%
b) 100%
c) 50%
d) 0%

a pontuação da questão será:

(1 + 1 + 0,5 + 0) / 4 = 0,625

Portanto, a [QUESTAO] valerá 0,625 ponto.

Independentemente da quantidade de subitens, cada bloco [QUESTAO] continua valendo no máximo 1 ponto.

Os subitens não aumentam a quantidade total de pontos possíveis da prova.

Cada subitem continua sendo corrigido individualmente e pode receber seu próprio resultado:

- correta;
- quase correta;
- parcialmente correta;
- incorreta;
- não respondida.

O resultado global da questão agrupada é calculado a partir da média dos subitens.

A análise de respostas escritas continuará utilizando as mesmas regras de:

- normalização;
- comparação por palavras;
- comparação por letras;
- respostas alternativas;
- acerto parcial.

# 4.2.5 PADRÃO PEDAGÓGICO

Sempre que vários conteúdos puderem ser praticados de forma natural sob a mesma instrução, prefira um exercício agrupado a várias questões isoladas quase idênticas.

Por exemplo, em vez de produzir:

[QUESTAO]
Complete com o possessivo correto:
Jag har en biljett. Det är ____ biljett.

[QUESTAO]
Complete com o possessivo correto:
Jag har ett flyg. Det är ____ flyg.

[QUESTAO]
Complete com o possessivo correto:
Jag har två väskor. Det är ____ väskor.

prefira:

[QUESTAO]
TIPO: ESCRITA
Complete com o pronome possessivo correto.

a) Jag har en biljett. Det är ____ biljett.
b) Jag har ett flyg. Det är ____ flyg.
c) Jag har två väskor. Det är ____ väskor.

RESPOSTA: a=min; b=mitt; c=mina

Esse formato deve ser especialmente favorecido nas questões gramaticais independentes do texto principal.

Questões de compreensão textual, múltipla escolha e verdadeiro ou falso normalmente devem continuar contendo apenas uma tarefa principal por [QUESTAO].


# 4.3 DATAS, CALENDÁRIO E HORAS

Quando os capítulos autorizados contiverem o vocabulário necessário, inclua também exercícios envolvendo calendário, datas e horas.

Podem ser avaliados:

- dias da semana;
- meses;
- números cardinais;
- números ordinais;
- datas numéricas;
- datas escritas por extenso;
- aniversário;
- idade;
- horários;
- horas inteiras;
- minutos;
- partes do dia;
- expressões como hoje, ontem, amanhã, manhã, tarde, noite;
- relações temporais como antes, depois, agora, já e outras presentes no material.

Exemplos de questões possíveis:

[QUESTAO]
TIPO: ESCRITA
Escreva 5/2 por extenso em sueco.

RESPOSTA: den femte februari

[QUESTAO]
TIPO: ESCRITA
Escreva 11/6 por extenso em sueco.

RESPOSTA: den elfte juni

[QUESTAO]
TIPO: MULTIPLA
Qual alternativa corresponde corretamente à data 2/3?

A) den två mars
B) den andra mars
C) den andre mars
D) den andra maj

RESPOSTA: B

Também podem ser criados exercícios com horas quando as formas necessárias para expressar o horário estiverem disponíveis no vocabulário autorizado.

Não introduza formas de dizer datas ou horas que ainda exijam vocabulário não autorizado.

---

# 5. CONHECIMENTO NECESSÁRIO PARA RESPONDER

Todas as questões devem poder ser resolvidas usando exclusivamente:

1. o texto apresentado;
2. o vocabulário permitido;
3. a gramática aplicável ao conteúdo estudado.

Não faça perguntas que dependam de:

* conhecimento histórico externo;
* geografia externa;
* cultura geral externa;
* fatos não apresentados;
* vocabulário ainda não estudado.

Nomes próprios podem aparecer no texto, mas não devem exigir conhecimento externo sobre essas pessoas ou lugares.

---

# 6. ESTRUTURA GLOBAL DO EXERCÍCIO

O exercício deve começar exatamente com:

[EXERCICIO]

Em seguida deve aparecer:

TITULO: título do exercício

Depois pode haver um ou mais blocos de texto e questões.

O conteúdo inteiro deve terminar exatamente com:

[FIM]

Exemplo estrutural:

[EXERCICIO]
TITULO: Uma manhã em Stockholm

[TEXTO]
Texto...

[QUESTAO]
...

[QUESTAO]
...

[FIM]

---

# 7. MARCAÇÕES E CAMPOS RECONHECIDOS

As únicas marcações estruturais permitidas são:

[EXERCICIO]

[TEXTO]

[QUESTAO]

[FIM]

Os campos reconhecidos são:

TITULO:

TIPO:

RESPOSTA:

EXPLICACAO:

Não invente outras marcações.

Não utilize variações como:

[PROVA]

[PERGUNTA]

[GABARITO]

[FINAL]

[RESPOSTAS]

---

# 8. BLOCO [TEXTO]

Use:

[TEXTO]

Tudo o que vier abaixo de `[TEXTO]` será considerado texto de leitura até a próxima marcação estrutural reconhecida.

Exemplo:

[TEXTO]
Anna bor i Stockholm. ...

Pode haver mais de um bloco `[TEXTO]` no mesmo exercício.

Exemplo:

[TEXTO]
Primeiro texto.

[QUESTAO]
Questões relacionadas.

[TEXTO]
Segundo texto.

[QUESTAO]
Outras questões.

Isso permite criar exercícios com diferentes situações ou pequenos blocos de leitura ao longo da prova.

# 8.1 ORDEM QUANDO HOUVER VÁRIOS TEXTOS

Quando o exercício tiver mais de um bloco [TEXTO], NÃO coloque todos os textos em sequência antes das questões.

Cada texto deve ser seguido imediatamente pelas questões de compreensão, interpretação ou vocabulário contextual que dependam especificamente daquele texto.

A estrutura desejada é:

[TEXTO]
Texto 1

[QUESTAO]
Questão de interpretação do Texto 1

[QUESTAO]
Outra questão relacionada ao Texto 1

[TEXTO]
Texto 2

[QUESTAO]
Questão de interpretação do Texto 2

[QUESTAO]
Outra questão relacionada ao Texto 2

[TEXTO]
Texto 3

[QUESTAO]
Questão de interpretação do Texto 3

[QUESTAO]
Outra questão relacionada ao Texto 3

Depois que todos os textos e suas respectivas questões de compreensão tiverem sido apresentados, coloque as questões independentes do texto, como:

- gramática;
- transformação de frases;
- conjugação;
- pretérito;
- supino;
- plural;
- definido/indefinido;
- demonstrativos;
- possessivos;
- advérbios;
- preposições;
- datas;
- horas;
- preenchimento de lacunas;
- outras questões estruturais.

Portanto, quando houver vários textos, siga preferencialmente esta ordem:

1. Texto 1;
2. questões diretamente relacionadas ao Texto 1;
3. Texto 2;
4. questões diretamente relacionadas ao Texto 2;
5. Texto 3;
6. questões diretamente relacionadas ao Texto 3;
7. demais questões gramaticais, estruturais ou de revisão.

Adapte a mesma lógica para qualquer quantidade de textos.

Não coloque uma questão de interpretação do Texto 1 depois do Texto 2 ou do Texto 3, salvo se a questão exigir deliberadamente comparação entre textos.

Questões que comparem dois ou mais textos podem aparecer somente depois que todos os textos envolvidos já tiverem sido apresentados.

# 8.2 DIVERSIFICAÇÃO DE VOCABULÁRIO ENTRE VÁRIOS TEXTOS

Quando houver mais de um bloco [TEXTO], os textos seguintes devem procurar ampliar a cobertura do vocabulário autorizado.

Não reutilize em todos os textos exatamente o mesmo conjunto de palavras apenas por serem fáceis de combinar.

O primeiro texto pode estabelecer o contexto utilizando o vocabulário autorizado normalmente.

A partir do segundo texto, dê prioridade a palavras, expressões e estruturas autorizadas que ainda não tenham sido utilizadas nos textos anteriores.

Essa diversificação deve dar prioridade especial ao vocabulário proveniente do capítulo mais alto do intervalo solicitado.

Portanto, se forem produzidos vários textos:

- o Texto 1 deve privilegiar o conteúdo recente normalmente;
- o Texto 2 deve privilegiar, entre o vocabulário autorizado, palavras do capítulo mais recente que não tenham aparecido no Texto 1;
- o Texto 3 deve privilegiar palavras do capítulo mais recente que ainda não tenham aparecido nos Textos 1 e 2;
- textos posteriores devem continuar seguindo a mesma lógica cumulativa.

Depois de explorar vocabulário ainda não utilizado do capítulo mais recente, aplique a mesma lógica ao capítulo imediatamente anterior e, em seguida, aos capítulos mais antigos quando necessário.

O objetivo é aumentar progressivamente a variedade lexical e a cobertura do material estudado ao longo dos diferentes textos.

Essa regra é uma prioridade, não uma proibição absoluta de repetição.

É permitido repetir palavras quando forem necessárias para:

- manter coerência e continuidade;
- construir frases gramaticalmente corretas;
- reutilizar personagens, lugares ou referentes;
- utilizar artigos, pronomes, auxiliares, preposições, conjunções e outras palavras funcionais já autorizadas;
- manter palavras essenciais ao contexto;
- praticar deliberadamente determinada estrutura;
- lidar com vocabulário autorizado insuficiente.

Entretanto, substantivos, verbos, adjetivos, advérbios e expressões de conteúdo não devem ser repetidos desnecessariamente entre todos os textos quando houver outras opções autorizadas ainda não exploradas.

Antes de produzir cada novo [TEXTO], verifique silenciosamente:

1. quais palavras e expressões autorizadas já apareceram nos textos anteriores;
2. quais palavras do capítulo mais recente ainda não foram utilizadas;
3. quais dessas palavras podem ser combinadas naturalmente em um novo contexto;
4. quais estruturas gramaticais recentes ainda podem ser exploradas.

Prefira construir o novo texto a partir desse vocabulário ainda pouco ou não utilizado.

Não introduza vocabulário externo para obter variedade.

Se o vocabulário autorizado restante não permitir um texto natural e gramaticalmente correto, reutilize palavras já empregadas conforme necessário.

---

# 9. IDENTIFICAÇÃO DAS QUESTÕES

Cada nova questão principal deve começar exatamente com:

[QUESTAO]

Não numere manualmente as questões principais.

Entretanto, dentro de uma questão gramatical agrupada, utilize letras minúsculas para os subitens:

a)
b)
c)
d)

etc.

Essas letras são subitens internos e não representam novas marcações estruturais.

Não coloque [QUESTAO] antes de cada subitem de um exercício agrupado.

---

# 10. QUESTÃO DE MÚLTIPLA ESCOLHA

Utilize exatamente:

[QUESTAO]
TIPO: MULTIPLA
Enunciado

A) alternativa
B) alternativa
C) alternativa
D) alternativa

RESPOSTA: B
EXPLICACAO: explicação opcional

O campo de tipo deve ser exatamente:

TIPO: MULTIPLA

Não utilize:

TIPO: MULTIPLA ESCOLHA

TIPO: MULTIPLE

TIPO: ALTERNATIVA

---

# 10.1 ALTERNATIVAS DA MÚLTIPLA ESCOLHA

As alternativas devem ser identificadas por letras maiúsculas seguidas de `)`:

A)

B)

C)

D)

E)

etc.

Não é obrigatório utilizar exatamente quatro alternativas.

Podem existir:

* 2;
* 3;
* 4;
* 5;
* ou mais alternativas.

Porém:

* as letras devem ser sequenciais;
* nenhuma letra deve ser pulada;
* somente uma alternativa deve ser considerada correta;
* a resposta indicada deve realmente existir.

---

# 10.2 GABARITO DA MÚLTIPLA ESCOLHA

Use:

RESPOSTA: B

A resposta deve conter somente a letra correta.

Correto:

RESPOSTA: C

Incorreto:

RESPOSTA: C) Stockholm

Incorreto:

RESPOSTA: Stockholm

---

# 10.3 DISTRATORES

As alternativas incorretas devem:

* ser plausíveis;
* parecer possíveis à primeira vista;
* ser inequivocamente erradas;
* não criar ambiguidade;
* não resultar em duas respostas defensáveis.

Se estiverem em sueco, devem respeitar integralmente as regras de vocabulário.

---

# 11. QUESTÃO DE VERDADEIRO OU FALSO

Utilize exatamente:

[QUESTAO]
TIPO: VF
Afirmação.

RESPOSTA: V
EXPLICACAO: explicação opcional

ou:

RESPOSTA: F

O campo de tipo deve ser exatamente:

TIPO: VF

As únicas respostas válidas são:

V

F

Não utilize:

VERDADEIRO

FALSO

TRUE

FALSE

T

SIM

NÃO

---

# 11.1 QUALIDADE DAS QUESTÕES V/F

A afirmação deve ser inequivocamente verdadeira ou falsa.

Evite frases:

* subjetivas;
* interpretativas demais;
* parcialmente verdadeiras;
* semanticamente ambíguas.

Procure equilibrar respostas V e F ao longo do exercício.

Não é necessário ter exatamente metade de cada, mas evite gerar praticamente todas as questões com a mesma resposta.

---

# 12. QUESTÃO DE RESPOSTA ESCRITA

Utilize:

[QUESTAO]
TIPO: ESCRITA
Enunciado

RESPOSTA: resposta correta
EXPLICACAO: explicação opcional

O campo de tipo deve ser exatamente:

TIPO: ESCRITA

A questão escrita deve ter uma resposta suficientemente objetiva para ser corrigida automaticamente.

---

# 12.1 MAIS DE UMA RESPOSTA CORRETA

Quando mais de uma formulação legítima puder ser aceita, coloque todas na mesma linha de RESPOSTA: separadas por:

|

Exemplo de questão escrita individual:

RESPOSTA: Hon arbetar på ett sjukhus. | På ett sjukhus.

O caractere | significa:

"qualquer uma dessas respostas deve ser considerada correta".

Pode haver duas ou mais respostas alternativas.

Em uma questão ESCRITA agrupada, | continua separando respostas alternativas do MESMO subitem, enquanto ; separa subitens diferentes.

Exemplo:

RESPOSTA: a=Hon arbetar på ett sjukhus. | På ett sjukhus.; b=Han bor i Stockholm. | I Stockholm.

Portanto:

| = respostas alternativas para a mesma unidade de resposta

; = separação entre subitens de uma questão agrupada

Nunca utilize | para separar subitens diferentes.

---

# 12.2 QUANDO CADASTRAR RESPOSTAS ALTERNATIVAS

Cadastre diferentes respostas quando representarem formulações realmente distintas, mas igualmente corretas.

Exemplo adequado:

RESPOSTA: Hon arbetar på ett sjukhus. | På ett sjukhus.

Não repita versões diferentes apenas por:

* maiúsculas/minúsculas;
* ponto final;
* vírgula;
* espaços;
* pequenas diferenças de pontuação.

Exemplo desnecessário:

RESPOSTA: Hon bor i Stockholm. | hon bor i stockholm | Hon bor i Stockholm

O aplicativo cuidará da normalização básica.

---

# 12.3 NÃO CADASTRAR ERROS COMO ALTERNATIVAS

Nunca inclua respostas propositalmente erradas apenas para torná-las aceitáveis.

Por exemplo, não registre como resposta correta:

* grafia errada;
* letra faltando;
* palavra faltando;
* conjugação errada;
* acento sueco incorreto.

Forneça somente formas linguisticamente corretas.

O aplicativo será responsável por identificar respostas parcialmente corretas.

---

# 13. CORREÇÃO DAS QUESTÕES ESCRITAS PELO APP

O texto do exercício NÃO deve calcular a nota da resposta escrita.

O aplicativo fará essa análise.

Para cada resposta escrita, o aplicativo comparará a resposta do usuário com todas as formas cadastradas em:

Em questões escritas agrupadas, essa comparação é realizada separadamente para cada subitem.

Exemplo:

RESPOSTA: a=min; b=mitt | alternativ_form; c=mina

O aplicativo corrigirá:

- a) independentemente;
- b) independentemente, comparando a resposta com todas as formas separadas por |;
- c) independentemente.

A resposta dada em um subitem não será comparada com as respostas cadastradas para outro subitem.

RESPOSTA:

Quando houver várias formas separadas por `|`, será utilizada como referência a forma correta mais próxima da resposta digitada.

---

# 13.1 NORMALIZAÇÃO

O sistema pode ignorar diferenças superficiais como:

* maiúsculas e minúsculas;
* espaços excedentes;
* determinada pontuação.

Porém, letras suecas continuam sendo letras distintas.

Por exemplo:

a

å

ä

não são automaticamente equivalentes.

Da mesma maneira:

o

ö

não são automaticamente equivalentes.

---

# 13.2 TIPOS DE RESULTADO PARA RESPOSTAS ESCRITAS

O aplicativo poderá classificar a resposta como:

✅ Correta

🟢 Quase correta

🟡 Parcialmente correta

❌ Incorreta

Uma possível referência de pontuação será:

* 100% = correta;
* 85% a 99% = quase correta;
* 50% a 84% = parcialmente correta;
* abaixo de 50% = incorreta.

A definição matemática exata pertence ao aplicativo, não ao texto importado.

---

# 13.3 ANÁLISE POR PALAVRAS E LETRAS

A correção das respostas escritas deverá considerar dois níveis.

## Nível de palavras

O sistema poderá detectar:

* palavra correta;
* palavra faltando;
* palavra extra;
* palavra substituída;
* mudança na ordem de palavras.

Exemplo:

Esperado:

Hon arbetar på ett sjukhus

Digitado:

Hon arbetar sjukhus

O sistema poderá identificar que:

* Hon está correta;
* arbetar está correta;
* faltou på;
* faltou ett;
* sjukhus está correta.

---

## Nível de letras

Dentro das palavras, o sistema poderá detectar:

* letra faltando;
* letra extra;
* letra trocada;
* letras invertidas;
* erro de grafia.

Exemplo:

Esperado:

arbetar

Digitado:

arbeter

O sistema poderá indicar que a vogal utilizada está incorreta.

---

# 13.4 ACERTO PARCIAL

Uma resposta escrita não precisa ser tratada apenas como 100% certa ou 100% errada.

O aplicativo poderá atribuir pontuação parcial.

A avaliação deverá considerar principalmente:

* conteúdo/palavras corretas;
* quantidade de informação correta;
* palavras omitidas;
* palavras extras;
* precisão ortográfica.

Erros pequenos de uma letra devem pesar menos que:

* ausência de palavras importantes;
* troca de conteúdo;
* resposta semanticamente diferente.

Uma referência conceitual possível é:

* aproximadamente 70% do peso para conteúdo/palavras;
* aproximadamente 30% para precisão ortográfica.

Essa proporção pertence à implementação do aplicativo e NÃO precisa aparecer no exercício importado.

---

# 14. QUESTÕES ESCRITAS DEVEM SER OBJETIVAS

Prefira perguntas como:

Qual é o pretérito do verbo "ha"?

Qual é o plural de "en bok"?

Transforme a frase para o pretérito.

Onde Anna mora?

O que Erik fez pela manhã?

Escreva a forma definida de "ett år".

Ser objetiva não significa que a questão deva ser uma simples cópia do texto.

Sempre que possível, uma questão ESCRITA deve exigir que o estudante produza ou adapte a resposta usando o vocabulário e a gramática estudados.

Evite reproduzir literalmente uma frase do [TEXTO] substituindo apenas uma palavra por uma lacuna quando a resposta puder ser encontrada por simples localização visual.

Evite perguntas como:

Explique livremente o texto.

O que você acha da história?

Escreva um parágrafo sobre o assunto.

Dê sua opinião.

Questões muito abertas são inadequadas para o sistema de correção automática.

---

# 15. EXPLICACAO

O campo:

EXPLICACAO:

é opcional.

Ele NÃO faz parte da decisão sobre a resposta estar correta ou incorreta.

A correção é feita usando:

RESPOSTA:

A `EXPLICACAO:` serve apenas como comentário pedagógico que será apresentado depois da correção.

---

# 15.1 FINALIDADE DA EXPLICACAO

Pode servir para:

* explicar por que uma alternativa é correta;
* indicar onde a informação aparece no texto;
* lembrar uma regra gramatical;
* explicar uma forma verbal;
* explicar um plural;
* explicar uma preposição;
* esclarecer determinada construção.

Exemplo:

EXPLICACAO: No texto está escrito que Anna mora em Stockholm.

Outro exemplo:

EXPLICACAO: O pretérito de "ha" é "hade".

Outro exemplo:

EXPLICACAO: "bok" pertence ao grupo de substantivos do gênero en.

---

# 15.2 QUANDO USAR EXPLICACAO

Use `EXPLICACAO:` apenas quando houver algo pedagogicamente útil a acrescentar.

Não é obrigatório adicionar explicação a todas as questões.

Não crie explicações artificiais ou redundantes apenas para preencher o campo.

Quando não houver necessidade, simplesmente omita a linha.

A explicação deve permanecer em uma única linha.

---

# 16. IDIOMA

Por padrão:

* o texto principal deve estar em sueco;

* os enunciados das questões devem estar preferencialmente em português;

* o objetivo é fazer com que a dificuldade esteja no sueco sendo avaliado, e não na compreensão da instrução;

* questões gramaticais também devem preferencialmente ter seu enunciado em português;

Exemplos:

Qual é o pretérito do verbo "ha"?

Qual é o plural de "en bok"?

Transforme "Jag äter" para o pretérito.

Qual é a forma definida de "ett år"?

Qual alternativa utiliza corretamente "på"?

* palavras, frases ou construções suecas que estejam sendo avaliadas podem e devem aparecer dentro do enunciado em português;

* quando a compreensão do próprio enunciado em sueco fizer parte deliberadamente do exercício, o enunciado pode estar em sueco;

* perguntas de compreensão textual em sueco podem aparecer ocasionalmente quando houver intenção pedagógica específica;

* enunciados totalmente em sueco devem ser exceção, não padrão;

* alternativas podem estar em português ou sueco dependendo do que estiver sendo avaliado;

* alternativas em sueco devem respeitar integralmente as regras de vocabulário permitido;

* respostas esperadas devem estar no idioma exigido pela questão;

* se for pedida produção em sueco, a resposta deve estar em sueco;

* se for pedida tradução ou significado em português, a resposta pode estar em português;

* `EXPLICACAO:` deve ser preferencialmente escrita em português.

---

# 17. FORMATAÇÃO

O exercício deve ser fornecido em texto puro.

Não utilize Markdown dentro do conteúdo importável.

Não utilize:

* `# Título`;
* `## Subtítulo`;
* `**negrito**`;
* `_itálico_`;
* tabelas Markdown;
* listas Markdown;
* citações Markdown;
* HTML;
* JSON.

Linhas em branco são permitidas e recomendadas para legibilidade.

---

# 18. SINTAXE EXATA DOS TIPOS

Utilize exclusivamente:

TIPO: MULTIPLA

TIPO: VF

TIPO: ESCRITA

Não utilize sinônimos.

---

# 19. VALIDAÇÃO DE FORMATAÇÃO

Antes de entregar o exercício, confira silenciosamente:

* existe `[EXERCICIO]`;
* existe `TITULO:`;
* existe pelo menos um `[TEXTO]`, se o exercício solicitado envolver texto;
* cada questão começa com `[QUESTAO]`;
* toda questão possui `TIPO:`;
* toda questão possui `RESPOSTA:`;
* todos os tipos são reconhecidos;
* questões múltiplas possuem alternativas;
* a resposta de uma múltipla corresponde a uma alternativa existente;
* questões VF possuem apenas `V` ou `F`;
* respostas alternativas de escrita utilizam `|`;
* existe `[FIM]`;
* nada relevante aparece depois de `[FIM]`.

Para questões gramaticais agrupadas, confira também silenciosamente que:

- todos os subitens possuem resposta;
- nenhuma letra foi omitida;
- as letras estão em sequência;
- cada resposta corresponde ao subitem correto;
- a quantidade de respostas coincide com a quantidade de subitens;
- ; separa subitens;
- | é utilizado somente para respostas alternativas do mesmo subitem;
- os subitens realmente praticam a mesma estrutura ou regra;
- não foi criado um agrupamento artificial de tarefas sem relação entre si.
- a questão agrupada utiliza obrigatoriamente TIPO: ESCRITA;
- existe uma instrução geral antes do subitem a);
- a linha RESPOSTA: da questão agrupada começa por a=.

---

# 20. VALIDAÇÃO DAS QUESTÕES DE MÚLTIPLA ESCOLHA

Antes de entregar, confira silenciosamente que:

* há apenas uma resposta correta;
* a letra indicada corresponde à alternativa correta;
* nenhuma outra alternativa também pode ser considerada correta;
* os distratores são plausíveis;
* não há vocabulário sueco proibido;
* a questão é solucionável.

---

# 21. VALIDAÇÃO DAS QUESTÕES V/F

Confira silenciosamente que:

* a afirmação é clara;
* a resposta é inequivocamente V ou F;
* não há ambiguidade;
* a resposta coincide com o texto ou regra gramatical;
* não depende de conhecimento externo.

---

# 22. VALIDAÇÃO DAS QUESTÕES ESCRITAS

Confira silenciosamente que:

* a pergunta possui resposta objetiva;
* a resposta cadastrada está correta;
* todas as formas alternativas cadastradas são realmente aceitáveis;
* não faltam formulações obviamente equivalentes quando isso poderia causar falso erro;
* não foram cadastradas formas erradas apenas para obter tolerância;
* a quantidade de possíveis respostas não é imprevisivelmente grande.

---

# 23. VARIEDADE PEDAGÓGICA E PRIORIDADE POR RECÊNCIA

O exercício deve obrigatoriamente combinar:

- compreensão textual;
- vocabulário contextual;
- gramática;
- transformação;
- produção controlada.

Porém, a distribuição dos conteúdos deve privilegiar fortemente os capítulos mais recentes.

O capítulo mais alto do intervalo solicitado deve aparecer como o principal foco pedagógico da prova.

O capítulo imediatamente anterior deve funcionar como segundo foco.

Capítulos mais antigos devem aparecer principalmente como revisão cumulativa.

Em um exercício padrão de 15 questões, procure aproximadamente:

- 6 a 8 questões focadas diretamente no capítulo mais recente;
- 3 a 5 questões focadas no capítulo imediatamente anterior;
- 2 a 5 questões de revisão ou integração com capítulos anteriores.

Uma questão pode contar como integração quando combina conteúdo recente com vocabulário antigo.

---

# 24. DIFICULDADE

As questões devem exigir algum raciocínio, mas permanecer dentro do conteúdo estudado.

É permitido exigir que o estudante:

* reconheça uma palavra flexionada;
* transforme um verbo;
* produza um plural;
* identifique gênero;
* transforme singular em plural;
* transformar indefinido em definido;
* relacione duas informações do texto;
* perceba mudança temporal;
* reconheça uma estrutura em contexto;
* reconstrua uma frase.

Não transforme a prova em simples reconhecimento mecânico de palavras isoladas.

Também evite transformar questões escritas em exercícios de mera localização e cópia de palavras do texto.

Quando uma informação retirada do texto for utilizada em uma questão ESCRITA, prefira pedir ao estudante que transforme, adapte, combine ou reutilize essa informação em uma nova construção.

---

# 25. AUDITORIA SILENCIOSA DO VOCABULÁRIO

Antes de entregar o exercício, revise silenciosamente TODAS as palavras suecas utilizadas em:

* texto;
* enunciados em sueco;
* trechos suecos dentro de enunciados em português;
* alternativas;
* respostas;
* explicações que contenham sueco.

Cada palavra comum sueca deve satisfazer pelo menos uma destas condições:

1. pertence diretamente a uma entrada ativa de capítulo permitido;
2. aparece dentro de uma expressão ativa de capítulo permitido;
3. é uma flexão gramatical legítima de vocabulário autorizado.

Além disso, nomes próprios e elementos geográficos podem ser usados conforme a exceção definida no item 1.4.

Se encontrar vocabulário não autorizado, reescreva a frase.

Não informe ao usuário que realizou essa auditoria.

Apenas entregue a versão já corrigida.

---

# 26. AUDITORIA SILENCIOSA DO GABARITO

Antes da resposta final, confira silenciosamente:

* quantidade total de questões;
* distribuição dos tipos;
* todas as respostas;
* todas as alternativas;
* verdadeiro/falso;
* respostas escritas alternativas;
* coerência das explicações;
* coerência com o texto;
* correção gramatical;
* ausência de perguntas ambíguas.

Não apresente essa auditoria ao usuário.

Corrija os problemas antes de produzir a resposta final.

---

# 27. FORMATO DA RESPOSTA DA IA

Quando eu solicitar a geração efetiva de um exercício:

entregue SOMENTE o exercício pronto para importação.

Coloque todo o exercício dentro de UM ÚNICO bloco de código para facilitar a cópia.

Não escreva antes do bloco:

"Claro"

"Aqui está"

"Segue o exercício"

"Preparei a prova"

ou qualquer outro comentário.

Não escreva observações depois do bloco.

Dentro do bloco, o conteúdo deve começar exatamente com:

[EXERCICIO]

e terminar exatamente com:

[FIM]

As crases usadas pelo chat para formar o bloco de código NÃO fazem parte do conteúdo importado.

---

# 28. MODELO ESTRUTURAL COMPLETO

[EXERCICIO]
TITULO: Título do exercício

[TEXTO]
Texto principal em sueco.

[QUESTAO]
TIPO: MULTIPLA
Pergunta preferencialmente em português?

A) Alternativa
B) Alternativa
C) Alternativa
D) Alternativa

RESPOSTA: B
EXPLICACAO: Explicação pedagógica opcional.

[QUESTAO]
TIPO: VF
Afirmação preferencialmente em português ou contendo o trecho sueco necessário.

RESPOSTA: F
EXPLICACAO: Explicação pedagógica opcional.

[QUESTAO]
TIPO: ESCRITA
Pergunta objetiva preferencialmente em português.

RESPOSTA: Primeira resposta correta. | Segunda resposta correta.
EXPLICACAO: Explicação pedagógica opcional.

[QUESTAO]
TIPO: ESCRITA
Complete ou transforme os itens conforme a instrução.

a) Primeiro subitem.
b) Segundo subitem.
c) Terceiro subitem.
d) Quarto subitem.

RESPOSTA: a=Resposta correta do primeiro item.; b=Resposta correta do segundo item.; c=Resposta correta do terceiro item.; d=Resposta correta do quarto item.
EXPLICACAO: Explicação pedagógica opcional.

[FIM]

---

# 29. EXEMPLO DE QUESTÃO GRAMATICAL AGRUPADA

[QUESTAO]
TIPO: ESCRITA
Transforme os verbos para a forma solicitada.

a) ...
b) ...
c) ...
d) ...

RESPOSTA: a=...; b=...; c=...; d=...
EXPLICACAO: Explicação pedagógica opcional.

---

# 30. EXEMPLO DE QUESTÃO COM MAIS DE UMA RESPOSTA

[QUESTAO]
TIPO: ESCRITA
Onde Anna trabalha?

RESPOSTA: Hon arbetar på ett sjukhus. | På ett sjukhus.
EXPLICACAO: A informação aparece diretamente no texto.

---

# 31. EXEMPLO DE MÚLTIPLA ESCOLHA

[QUESTAO]
TIPO: MULTIPLA
Em qual cidade Anna mora?

A) Malmö
B) Stockholm
C) Göteborg
D) Uppsala

RESPOSTA: B
EXPLICACAO: O texto informa que Anna mora em Stockholm.

---

# 32. EXEMPLO DE VERDADEIRO OU FALSO

[QUESTAO]
TIPO: VF
Anna mora em Malmö.

RESPOSTA: F
EXPLICACAO: O texto informa que ela mora em Stockholm.

---

# 33. PEDIDO PADRÃO PARA USAR EM NOVAS CONVERSAS

Após esta especificação, utilizarei normalmente um pedido semelhante a:

Use o arquivo `words.json` anexado.

CAPÍTULOS: 0 até X (Se tiver escrito a letra "X", assuma todos os capítulos, caso contrário, os capítulos indicados)

TAMANHO DO TEXTO: Dois (02) textos com temas diferentes, aproximadamente 150 palavras cada;

QUANTIDADE DE QUESTÕES: 25

DISTRIBUIÇÃO:
Divida aproximadamente por igual entre Múltipla Escolha, Verdadeiro ou Falso e Escrita, exemplo, 15 questões:
* 5 múltipla escolha;
* 5 verdadeiro ou falso;
* 5 resposta escrita.

Use exclusivamente o vocabulário autorizado segundo esta especificação.

Se houver mais de um texto, não coloque os textos em sequência.

Quando houver mais de um texto, faça com que cada texto seguinte privilegie vocabulário autorizado ainda não utilizado nos textos anteriores, dando prioridade máxima às palavras do capítulo mais recente.

Após cada [TEXTO], coloque imediatamente as questões de compreensão e interpretação referentes àquele texto.

Depois do último texto e de suas questões específicas, coloque as demais questões gramaticais, estruturais, de transformação e revisão.

Lembre-se de que:

* palavras existentes dentro de expressões autorizadas podem ser desmembradas e reutilizadas separadamente;
* flexões gramaticais legítimas são permitidas;
* nomes próprios típicos, cidades, países e outros elementos geográficos podem ser introduzidos livremente;
* outros tipos de vocabulário externo continuam proibidos;
* os enunciados devem ser preferencialmente em português;
* palavras e estruturas suecas avaliadas podem aparecer naturalmente dentro dos enunciados em português;
* explore plural, singular, definido, indefinido, formas verbais, pretérito, supino, imperativo e demais construções que o material estudado permitir;
* produza um texto coerente, e não apenas uma coleção de frases destinadas a encaixar palavras;
* misture compreensão textual e aplicação gramatical;
* cadastre mais de uma resposta escrita quando houver múltiplas formulações realmente corretas;
* não tente calcular acerto parcial no próprio exercício, pois o aplicativo fará isso;
* utilize `EXPLICACAO:` somente quando houver valor pedagógico.

Aproximadamente metade das questões deve avaliar diretamente gramática, transformação ou uso estrutural, e não apenas interpretação do texto.

Antes de gerar as questões, analise silenciosamente quais conteúdos gramaticais ou funcionais foram introduzidos ou enfatizados nos capítulos autorizados, dando prioridade ao capítulo mais recente.

Crie questões específicas sobre esses conteúdos. Tente não fazer questões fáceis, produza questões de dificuldade média à difícil.

Evite questões ESCRITA que apenas reproduzam literalmente uma frase do texto com uma palavra retirada para ser copiada.

Quando uma questão escrita se basear em uma informação do texto, prefira exigir transformação ou aplicação, como mudança de tempo verbal, número, forma definida/indefinida, possessivo, ordem da frase, quantidade, data, horário ou substituição de uma informação por outra fornecida no enunciado.

Isso pode incluir, conforme o material disponível, focado no último capítulo:

- pretérito e outras formas verbais;
- demonstrativos;
- possessivos;
- advérbios;
- posição versus direção;
- preposições;
- plural e definido;
- datas;
- meses;
- ordinais;
- horas;
- expressões temporais;
- outros grupos gramaticais presentes no JSON.

Entre as questões gramaticais do tipo ESCRITA, utilize normalmente de 2 a 4 questões agrupadas com subitens a), b), c) etc., conforme as regras da seção 4.2.

Questões agrupadas devem utilizar exclusivamente TIPO: ESCRITA.

Cada questão agrupada deve possuir uma instrução geral antes de a) e respostas no formato:

RESPOSTA: a=...; b=...; c=...

Inclua exercícios tradicionais de completar, escolher e transformar frases quando forem adequados.

Faça uma auditoria silenciosa final do vocabulário, da gramática, do gabarito e da formatação.

Entregue somente o exercício pronto para importação.
