# ESPECIFICAÇÃO OFICIAL PARA GERAÇÃO DE EXERCÍCIOS DO APP DE SUECO

Vou fornecer um arquivo `words.json`.

Sua tarefa é criar um exercício de sueco compatível com meu aplicativo, obedecendo rigorosamente às regras abaixo.

O exercício será posteriormente copiado e colado diretamente no aplicativo, que interpretará sua estrutura, renderizará as questões e fará a correção.

---

# 0.1 EXEMPLOS DESTA ESPECIFICAÇÃO NÃO SÃO CONTEÚDO DO EXERCÍCIO

Todos os exemplos presentes nesta especificação servem exclusivamente para demonstrar regras, formatos, sintaxe, estruturas ou princípios pedagógicos.

NÃO reutilize em exercícios gerados o conteúdo concreto desses exemplos.

Isso inclui, entre outros:

- frases;
- enunciados;
- respostas;
- alternativas;
- nomes próprios;
- cidades;
- números;
- datas;
- horários;
- substantivos escolhidos;
- verbos escolhidos;
- combinações de palavras;
- situações narrativas;
- sequências de subitens.

Ao utilizar um exemplo desta especificação, extraia apenas a REGRA ou o PADRÃO que ele demonstra.

Crie novo conteúdo usando o vocabulário autorizado do pedido atual.

Não copie um exemplo literalmente.

Não reproduza um exemplo com alterações mínimas.

Não mantenha a mesma frase trocando apenas um nome, número, data, verbo, substantivo ou outra pequena parte.

Exemplo da interpretação correta desta regra:

Se esta especificação demonstrar que uma questão deve transformar uma forma gramatical X em Y, o exercício gerado pode avaliar a mesma transformação, mas deve criar outra frase e escolher outro material autorizado.

O conteúdo lexical dos exemplos desta especificação NÃO recebe preferência por aparecer neste documento.

Quando houver conflito, esta regra tem prioridade sobre qualquer exemplo positivo apresentado posteriormente.

EXCEÇÃO ESTRUTURAL:

Esta proibição não se aplica às marcações, campos, delimitadores e padrões sintáticos obrigatórios do aplicativo.

Elementos como:

[EXERCICIO]
[TEXTO]
[QUESTAO]
[FIM]
TITULO:
TIPO:
RESPOSTA:
EXPLICACAO:
A)
B)
a)
b)
;
|

devem ser reproduzidos exatamente conforme as regras desta especificação quando forem necessários.

O que NÃO deve ser reutilizado é o conteúdo linguístico, lexical, temático ou factual usado para preencher esses modelos.

Os exemplos desta especificação NÃO constituem uma fonte de seleção de vocabulário.

Ao decidir quais palavras, expressões, verbos, substantivos, nomes, números, datas, horários, situações ou temas utilizar no exercício, faça essa seleção a partir do words.json autorizado, do intervalo de capítulos e do pedido atual, e não a partir dos exemplos desta especificação.

Somente depois de definir o conteúdo do exercício utilize os exemplos desta especificação para conferir se a REGRA, a ESTRUTURA ou o FORMATO foi aplicado corretamente.

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

Se uma expressão autorizada contiver várias palavras, é permitido:

- utilizar a expressão integralmente;
- utilizar uma de suas palavras em outra frase;
- utilizar outra palavra componente em outra construção;
- combinar palavras realmente presentes nessa expressão com outras palavras autorizadas.

As palavras retiradas de uma expressão também podem ser flexionadas quando isso for gramaticalmente legítimo.

O desmembramento não precisa preservar o significado original da expressão, desde que a nova construção seja gramaticalmente correta.

Porém:

- somente palavras realmente presentes na expressão ficam autorizadas;
- palavras semanticamente relacionadas não ficam automaticamente autorizadas;
- sinônimos não ficam automaticamente autorizados;
- palavras normalmente associadas à expressão também não ficam autorizadas.

O conteúdo concreto de qualquer expressão usada para explicar esta regra não deve ser reutilizado por causa do exemplo; as expressões efetivamente empregadas no exercício devem ser selecionadas do words.json autorizado.

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

Podem ser utilizados nomes próprios adequados ao contexto, incluindo nomes de pessoas e elementos geográficos.

Escolha esses nomes de acordo com a situação criada para o exercício.

Não dê preferência a nomes próprios ou lugares apenas porque tenham aparecido em exemplos desta especificação.

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

Exemplo conceitual:

A permissão para introduzir um nome geográfico próprio não autoriza automaticamente substantivos comuns relacionados a esse lugar.

Qualquer palavra comum associada ao local continua precisando estar autorizada pelas demais regras de vocabulário.

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

# 2.2 PARÁGRAFOS, NARRATIVAS E DIÁLOGOS

A organização interna do bloco [TEXTO] também deve ser considerada parte da formatação do exercício.

Quando o texto for predominantemente narrativo, descritivo, dissertativo, um relato ou uma pequena história, NÃO escreva todo o conteúdo como um único parágrafo longo.

Divida o texto em parágrafos semanticamente naturais.

Como referência:

- textos de aproximadamente 100 a 180 palavras: normalmente 2 a 4 parágrafos;
- textos de aproximadamente 180 a 300 palavras: normalmente 3 a 5 parágrafos;
- textos maiores podem possuir mais parágrafos conforme necessário.

Cada parágrafo deve desenvolver uma pequena unidade de sentido, por exemplo:

- apresentação da situação;
- desenvolvimento de uma ação;
- mudança de tempo, lugar ou assunto;
- consequência;
- conclusão.

Separe obrigatoriamente dois parágrafos por UMA LINHA EM BRANCO.

Não quebre uma linha depois de cada frase apenas para produzir aparência de parágrafo.

Os parágrafos devem ser reais e semanticamente coerentes.

Quando o texto for predominantemente um DIÁLOGO entre duas ou mais pessoas, utilize obrigatoriamente uma fala por linha no formato:

Nome: fala

Exemplo estrutural:

<Nome 1>: ...
<Nome 2>: ...
<Nome 1>: ...
<Nome 2>: ...

Não utilize travessões, marcadores, listas ou Markdown para indicar os participantes.

O nome antes dos dois-pontos identifica exclusivamente o falante daquela linha.

Em diálogos, normalmente NÃO coloque uma linha em branco entre cada fala. Use linha em branco apenas quando houver mudança de cena, passagem para um trecho narrativo ou separação natural entre partes do texto.

Quando o texto for predominantemente narrativo e houver apenas uma fala ocasional, ela pode permanecer dentro do próprio parágrafo.

Exemplo conceitual:

<Nome> <trecho narrativo contendo uma fala ocasional>.

Nesse caso, não transforme automaticamente o trecho em uma linha de diálogo separada.

Todo vocabulário comum utilizado nesse trecho continua sujeito às regras de vocabulário autorizado.

Quando houver combinação de narrativa e diálogo:

- parágrafos narrativos devem continuar separados por linhas em branco;
- falas independentes devem seguir o formato Nome: fala;
- após o diálogo, um novo trecho narrativo deve começar como um novo parágrafo.

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

# 4.1 EVITAR CÓPIA LITERAL DO TEXTO E DOS EXEMPLOS DESTA ESPECIFICAÇÃO

Questões de resposta escrita não devem, como regra geral, limitar-se a reproduzir uma frase do bloco [TEXTO] com uma única palavra ou expressão retirada para que o estudante simplesmente a copie.

Evite especialmente questões em que:

TIPO: ESCRITA

o enunciado reproduza praticamente uma frase inteira do bloco [TEXTO], retirando apenas uma palavra ou expressão e deixando uma lacuna para que o estudante simplesmente localize e copie a resposta.

Esse problema ocorre quando a frase da questão permanece praticamente idêntica à frase correspondente do bloco [TEXTO].

Esse tipo de questão exige principalmente localização visual e transcrição, oferecendo pouca prática linguística.

Quando uma questão escrita utilizar conteúdo do texto, prefira exigir alguma transformação, adaptação ou aplicação do conteúdo estudado.

Pode ser necessário, por exemplo:

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

IMPORTANTE: todos os exemplos apresentados nesta especificação são exclusivamente demonstrativos. Eles servem para explicar uma regra ou um tipo de transformação e NÃO constituem conteúdo a ser reutilizado nos exercícios gerados.

Não copie literalmente nem reproduza com alterações mínimas frases, enunciados, respostas, nomes, números, datas, horários, situações ou combinações de vocabulário usadas nos exemplos desta especificação.

Ao aplicar uma regra ilustrada por um exemplo desta especificação, crie uma situação nova com vocabulário autorizado, escolhendo outros elementos sempre que houver material disponível.

Por exemplo, se esta especificação demonstrar uma transformação de duração, o exercício gerado pode praticar a mesma habilidade, mas deve utilizar outra situação, outra frase-base e, quando possível, outros valores. O objetivo é reutilizar o PRINCÍPIO PEDAGÓGICO do exemplo, e não seu conteúdo.

Exemplo abstrato da regra:

Se o texto apresentar uma informação na forma X, uma questão escrita pode solicitar que o estudante produza a mesma estrutura com uma informação Y fornecida no enunciado.

A questão gerada deve criar X e Y a partir do vocabulário autorizado e do contexto do exercício, sem copiar os exemplos concretos desta especificação.

Questões de compreensão podem continuar perguntando informações presentes no texto, especialmente nos tipos MULTIPLA e VF.

Questões ESCRITA também podem depender do texto, mas devem preferencialmente exigir produção, transformação ou aplicação, e não mera cópia literal de um trecho imediatamente localizável.

Uma questão de cópia literal do [TEXTO] só deve ser utilizada excepcionalmente quando a memorização ou o reconhecimento exato de determinada expressão for deliberadamente o objetivo pedagógico.

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
<instrução geral da tarefa>

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
Instrução geral da transformação.

a) <primeiro item criado com o vocabulário autorizado>
b) <segundo item criado com o vocabulário autorizado>
c) <terceiro item criado com o vocabulário autorizado>

RESPOSTA: a=<resposta>; b=<resposta>; c=<resposta>
EXPLICACAO: Explicação relevante de acordo com o tema e resposta correta.

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

Exemplo estrutural:

RESPOSTA: a=<resposta>; b=<resposta>; c=<resposta>; d=<resposta>; e=<resposta>; f=<resposta>

A letra do subitem deve sempre ser seguida por "=".

A ordem das respostas em RESPOSTA: deve ser a mesma ordem dos subitens apresentados na questão.

Não omita a identificação da letra.

Correto:

RESPOSTA: a=<resposta>; b=<resposta>; c=<resposta>

Incorreto:

RESPOSTA: <resposta>; <resposta>; <resposta>

# 4.2.3 MAIS DE UMA RESPOSTA CORRETA EM UM SUBITEM

O caractere | continua significando alternativas igualmente corretas PARA O MESMO SUBITEM.

O ponto e vírgula ; separa SUBITENS DIFERENTES.

Exemplo estrutural:

RESPOSTA: a=<forma correta 1> | <forma correta 2>; b=<forma correta 1> | <forma correta 2>

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

Sempre que vários itens puderem praticar naturalmente a mesma regra ou estrutura, prefira reuni-los em uma questão gramatical agrupada em vez de produzir várias questões isoladas quase idênticas.

Evite uma sequência como:

[QUESTAO]
<mesma instrução gramatical>
<primeiro item>

[QUESTAO]
<mesma instrução gramatical>
<segundo item>

[QUESTAO]
<mesma instrução gramatical>
<terceiro item>

quando os três itens avaliarem essencialmente a mesma regra.

Prefira:

[QUESTAO]
TIPO: ESCRITA
<instrução geral da regra ou transformação>

a) <primeiro item criado com o vocabulário autorizado>
b) <segundo item criado com o vocabulário autorizado>
c) <terceiro item criado com o vocabulário autorizado>

RESPOSTA: a=<resposta>; b=<resposta>; c=<resposta>

Os itens concretos devem ser criados especificamente para o exercício atual a partir do vocabulário autorizado.

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

Quando esse conteúdo estiver autorizado, podem ser criadas questões como:

- apresentar uma data numérica criada especificamente para o exercício e pedir sua escrita por extenso;
- apresentar uma data por extenso criada especificamente para o exercício e pedir sua interpretação;
- pedir a escolha da forma ordinal correta para uma data;
- combinar dia e mês autorizados;
- transformar uma informação temporal fornecida no enunciado;
- interpretar ou produzir horários usando apenas formas autorizadas.

Os valores, datas, meses e combinações concretas devem ser escolhidos para o exercício atual.

Não reutilize datas ou respostas presentes em exemplos desta especificação.

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

TITULO: título do exercício preferencialmente em sueco usando as palavras permitidas

Depois pode haver um ou mais blocos de texto e questões.

O conteúdo inteiro deve terminar exatamente com:

[FIM]

Exemplo estrutural:

[EXERCICIO]
TITULO: <título criado para o exercício>

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
<texto em sueco criado para o exercício>

As quebras de linha existentes dentro de [TEXTO] possuem significado de apresentação e devem ser preservadas.

Dentro de [TEXTO]:

- uma linha em branco separa dois parágrafos;
- linhas consecutivas no formato Nome: fala representam turnos de um diálogo;
- uma quebra simples de linha não deve ser usada arbitrariamente para quebrar uma frase ou um parágrafo;
- os marcadores [TEXTO], [QUESTAO], [FIM] e [EXERCICIO] continuam sendo os únicos marcadores estruturais.

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

O objetivo da diversificação entre os blocos [TEXTO] é MAXIMIZAR A COBERTURA DO VOCABULÁRIO AUTORIZADO ao longo do conjunto de textos.

Sempre que houver vocabulário autorizado ainda não utilizado que possa ser empregado de forma natural e gramaticalmente correta, prefira esse vocabulário em vez de repetir desnecessariamente palavras de conteúdo já utilizadas nos textos anteriores.

Assim, cada novo [TEXTO] deve funcionar, tanto quanto possível, como uma oportunidade para explorar uma parte diferente do vocabulário disponível.

Por exemplo, se uma parcela significativa do vocabulário relevante de determinado capítulo já tiver sido utilizada em um texto anterior, o texto seguinte deve procurar utilizar principalmente outras palavras e expressões autorizadas desse mesmo capítulo que ainda não tenham aparecido.

Não é necessário dividir o vocabulário em proporções matemáticas iguais entre os textos. A distribuição deve depender da possibilidade de construir textos naturais, coerentes e gramaticalmente corretos.

A prioridade é:

1. utilizar vocabulário relevante ainda não empregado nos textos anteriores;
2. ampliar progressivamente a cobertura lexical do conjunto;
3. repetir vocabulário de conteúdo já utilizado somente quando isso contribuir para a naturalidade, coerência, gramática ou objetivo pedagógico.

Ao finalizar todos os blocos [TEXTO], procure ter utilizado a maior variedade possível de palavras e expressões autorizadas, especialmente dos capítulos mais recentes, sem sacrificar a qualidade linguística dos textos.

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

# 8.3 DIVERSIFICAÇÃO DE TEMA E ESTILO ENTRE VÁRIOS TEXTOS

Quando houver mais de um bloco [TEXTO], os textos devem ser suficientemente diferentes entre si quanto ao tema, à situação, à organização e ao estilo de escrita.

Não associe nenhum estilo específico à posição do texto. O Texto 1, o Texto 2, o Texto 3 e os demais não possuem formato previamente determinado.

Para cada novo texto, considere os textos já produzidos e escolha uma forma de apresentação que aumente a variedade do conjunto.

Podem ser utilizadas, conforme forem adequadas ao vocabulário autorizado e ao conteúdo disponível:

* narrativa;
* diálogo;
* descrição;
* relato;
* situação cotidiana;
* pequena história;
* texto expositivo ou dissertativo;
* discurso ou fala dirigida a outras pessoas;
* sequência de acontecimentos;
* combinação de duas ou mais dessas formas;
* outras organizações textuais compatíveis com as regras desta especificação.

Essas possibilidades são apenas categorias disponíveis e NÃO representam uma sequência, ordem de preferência ou modelo a ser seguido.

Não utilize automaticamente o mesmo tipo textual para uma determinada posição. Em exercícios diferentes, qualquer uma dessas formas pode aparecer como primeiro, segundo, terceiro ou outro texto.

A diversificação deve ser determinada pelo contraste com os demais textos do exercício atual, e não por uma sequência fixa de estilos.

Além do estilo, procure variar também, quando o vocabulário autorizado permitir:

* situação e contexto;
* participantes;
* lugar;
* momento ou sequência temporal;
* foco narrativo ou comunicativo;
* estrutura das frases;
* proporção entre descrição, ação, exposição e fala.

Os textos não precisam ser completamente diferentes em todos esses aspectos ao mesmo tempo. O objetivo é evitar que vários blocos [TEXTO] sejam apenas variações superficiais da mesma situação ou da mesma estrutura.

Os nomes próprios utilizados em diferentes textos não devem se repetir, salvo quando a repetição for deliberadamente necessária para relacionar dois ou mais textos.


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

RESPOSTA: C) <texto da alternativa>

Incorreto:

RESPOSTA: <texto da alternativa>

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

RESPOSTA: <formulação correta 1> | <formulação correta 2>

O caractere | significa:

"qualquer uma dessas respostas deve ser considerada correta".

Pode haver duas ou mais respostas alternativas.

Em uma questão ESCRITA agrupada, | continua separando respostas alternativas do MESMO subitem, enquanto ; separa subitens diferentes.

Exemplo:

RESPOSTA: a=<formulação correta 1> | <formulação correta 2>; b=<formulação correta 1> | <formulação correta 2>

Portanto:

| = respostas alternativas para a mesma unidade de resposta

; = separação entre subitens de uma questão agrupada

Nunca utilize | para separar subitens diferentes.

---

# 12.2 QUANDO CADASTRAR RESPOSTAS ALTERNATIVAS

Cadastre diferentes respostas quando representarem formulações realmente distintas, mas igualmente corretas.

Exemplo adequado:

RESPOSTA: <formulação completa correta> | <formulação curta igualmente correta>

Não repita versões diferentes apenas por:

* maiúsculas/minúsculas;
* ponto final;
* vírgula;
* espaços;
* pequenas diferenças de pontuação.

Exemplo desnecessário:

RESPOSTA: <mesma resposta> | <mesma resposta apenas com diferença de maiúsculas/minúsculas> | <mesma resposta apenas com diferença de pontuação>

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

RESPOSTA: a=<resposta>; b=<forma correta 1> | <forma correta 2>; c=<resposta>

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

Exemplo conceitual:

Esperado:

<palavra 1> <palavra 2> <palavra 3> <palavra 4>

Digitado:

<palavra 1> <palavra 2> <palavra 4>

O sistema poderá identificar que:

- as palavras 1 e 2 estão corretas;
- a palavra 3 está faltando;
- a palavra 4 está correta.

---

## Nível de letras

Dentro das palavras, o sistema poderá detectar:

* letra faltando;
* letra extra;
* letra trocada;
* letras invertidas;
* erro de grafia.

Exemplo conceitual:

Esperado:

<forma correta>

Digitado:

<mesma forma com uma letra incorreta>

O sistema poderá identificar a diferença ortográfica entre as duas formas.

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

Qual é o pretérito de <verbo autorizado>?

Qual é o plural de <substantivo autorizado>?

Transforme <frase criada para o exercício> para o pretérito.

Responda objetivamente a uma informação verificável do texto.

Transforme <substantivo autorizado> para a forma definida.

Produza <forma gramatical solicitada> a partir de <vocabulário autorizado>.

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

Exemplos estruturais:

EXPLICACAO: A resposta é correta porque <informação relevante do texto>.

EXPLICACAO: A forma correta de <item avaliado> é <forma correta>.

EXPLICACAO: <regra gramatical relevante para compreender a resposta>.

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

Exemplos estruturais de enunciados:

Qual é <forma gramatical solicitada> de <vocabulário autorizado>?

Transforme <frase criada para o exercício> para <forma gramatical solicitada>.

Qual alternativa utiliza corretamente <palavra ou estrutura autorizada>?

Complete <construção criada para o exercício> com <tipo de forma solicitada>.

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

Linhas em branco são parte da estrutura visual do bloco [TEXTO].

Em textos predominantemente narrativos, descritivos ou dissertativos, utilize obrigatoriamente linhas em branco para separar parágrafos semanticamente distintos.

Em textos predominantemente dialogados, utilize uma fala por linha no formato Nome: fala.

Não utilize linhas em branco entre cada fala de um mesmo diálogo, salvo quando houver uma mudança natural de cena ou de trecho.

Não utilize Markdown ou HTML para criar parágrafos ou diálogos.

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

Para os blocos [TEXTO], confira também silenciosamente que:

- textos narrativos, descritivos, dissertativos ou relatos suficientemente longos foram divididos em parágrafos naturais;
- os parágrafos estão separados por uma linha em branco;
- não foi criada uma quebra de linha arbitrária após cada frase;
- textos predominantemente dialogados utilizam uma fala por linha;
- cada fala independente utiliza o formato Nome: fala;
- textos predominantemente narrativos não foram artificialmente convertidos em diálogo apenas porque uma pessoa fala em algum momento.

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

DIFICULDADE: média - alta

Considere a dificuldade indicada como referência para a elaboração do conjunto das questões, respeitando sempre os limites do vocabulário e da gramática autorizados.

A dificuldade deve ser ajustada principalmente pela quantidade de recuperação, combinação, distinção, transformação e aplicação exigida do estudante, e não pela introdução de conteúdo ainda não estudado.

Não é necessário que todas as questões possuam exatamente o mesmo nível de dificuldade. Pode haver alguma variação natural, mas a predominância do exercício deve corresponder à dificuldade solicitada.


# 24.1 CONTROLE DE PISTAS E EXIGÊNCIA COGNITIVA

Ao formular uma questão, forneça apenas as informações necessárias para que ela seja objetiva, solucionável e compatível com o conteúdo estudado.

Evite incluir no próprio enunciado informações que revelem direta ou indiretamente uma etapa do raciocínio que o estudante já possui conhecimento suficiente para realizar sozinho.

Antes de finalizar cada questão, identifique silenciosamente quais conhecimentos ou decisões o estudante precisa mobilizar para chegar à resposta.

Se alguma informação fornecida no enunciado eliminar desnecessariamente uma dessas decisões, reformule a questão retirando ou reduzindo essa pista, desde que isso não crie ambiguidade nem exija conhecimento não estudado.

Sempre que o conteúdo autorizado permitir, prefira questões que exijam combinar, recuperar, distinguir, transformar ou aplicar mais de um conhecimento já estudado, em vez de questões cuja resposta possa ser obtida por associação imediata com uma informação explicitamente fornecida.

Entretanto, não remova informações necessárias para tornar a questão objetiva ou para delimitar claramente o conhecimento que está sendo avaliado.

Uma questão pode deliberadamente fornecer parte da informação quando o objetivo pedagógico for isolar uma habilidade específica. Essa simplificação deve ser intencional e não resultado automático da maneira como o enunciado foi construído.

A dificuldade deve resultar principalmente da necessidade de recuperar e aplicar o conteúdo estudado, e não de:

* vocabulário não autorizado;
* instruções confusas;
* ambiguidades;
* pegadinhas;
* informações externas;
* formulações artificialmente complexas.

Durante a revisão final, considere excessivamente fácil uma questão em que grande parte do raciocínio necessário para obter a resposta já esteja explícita no próprio enunciado.

Quando isso ocorrer e o conteúdo estudado permitir uma formulação mais exigente, reformule a questão antes de entregar o exercício.


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
TITULO: <título criado para o exercício>

[TEXTO]
<primeiro parágrafo criado para o exercício>

<segundo parágrafo criado para o exercício>

[QUESTAO]
TIPO: MULTIPLA
<enunciado da questão>

A) <alternativa>
B) <alternativa>
C) <alternativa>
D) <alternativa>

RESPOSTA: B
EXPLICACAO: Explicação pedagógica opcional.

[QUESTAO]
TIPO: VF
<afirmação criada para a questão>

RESPOSTA: F
EXPLICACAO: Explicação pedagógica opcional.

[QUESTAO]
TIPO: ESCRITA
<pergunta objetiva criada para a questão>

RESPOSTA: <Primeira resposta correta> | <Segunda resposta correta>
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
<instrução geral da transformação gramatical>

a) ...
b) ...
c) ...
d) ...

RESPOSTA: a=...; b=...; c=...; d=...
EXPLICACAO: Explicação pedagógica opcional.

---

# 30. EXEMPLO ESTRUTURAL DE QUESTÃO COM MAIS DE UMA RESPOSTA

[QUESTAO]
TIPO: ESCRITA
<pergunta objetiva criada para o exercício>

RESPOSTA: <formulação correta 1> | <formulação correta 2>
EXPLICACAO: <explicação pedagógica opcional>

---

# 31. EXEMPLO ESTRUTURAL DE MÚLTIPLA ESCOLHA

[QUESTAO]
TIPO: MULTIPLA
<pergunta criada para o exercício>

A) <alternativa>
B) <alternativa>
C) <alternativa>
D) <alternativa>

RESPOSTA: <letra da alternativa correta>
EXPLICACAO: <explicação pedagógica opcional>

---

# 32. EXEMPLO ESTRUTURAL DE VERDADEIRO OU FALSO

[QUESTAO]
TIPO: VF
<afirmação criada para o exercício>

RESPOSTA: <V ou F>
EXPLICACAO: <explicação pedagógica opcional>

---

# 33. PEDIDO PADRÃO PARA USAR EM NOVAS CONVERSAS

Após esta especificação, utilizarei normalmente um pedido semelhante a:

Use o arquivo `words.json` anexado.

CAPÍTULOS: 0 até X (Se tiver escrito a letra "X", assuma todos os capítulos, caso contrário, os capítulos indicados)

TAMANHO DO TEXTO: Dois (02) textos com temas diferentes, aproximadamente 150 palavras cada;

QUANTIDADE DE QUESTÕES: 25

DISTRIBUIÇÃO:
Divida a quantidade total solicitada da forma mais equilibrada possível entre Múltipla Escolha, Verdadeiro ou Falso e Escrita.

Quando a quantidade total não for divisível igualmente entre os três tipos, distribua a diferença de forma equilibrada, sem favorecer sistematicamente um único tipo.

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

Crie questões específicas sobre esses conteúdos.

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

# AUDITORIA DE NÃO REUTILIZAÇÃO DOS EXEMPLOS

Antes da resposta final, compare silenciosamente o exercício produzido com os exemplos concretos desta especificação.

Confirme que nenhum texto, questão, subitem, alternativa, resposta ou explicação:

- copia literalmente conteúdo de um exemplo desta especificação;
- reproduz um exemplo com alterações mínimas;
- reutiliza a mesma combinação de vocabulário apenas porque ela foi mostrada em um exemplo;
- repete nomes, números, datas, situações ou frases demonstrativas sem uma razão independente vinda do pedido ou do words.json.

- não seleciona vocabulário apenas porque ele apareceu repetidamente nesta especificação;
- não transforma exemplos negativos em questões apenas trocando pequenas partes;
- não transforma exemplos positivos em modelos lexicais; somente sua estrutura ou princípio pedagógico pode ser reaproveitado.
  
É permitido reutilizar apenas a regra, o formato ou o princípio pedagógico demonstrado.

As marcações e sintaxes obrigatórias do aplicativo não contam como reutilização indevida e devem continuar sendo reproduzidas exatamente quando necessárias.

Se houver semelhança excessiva com um exemplo desta especificação, substitua o conteúdo por uma nova construção antes de entregar.

Faça uma auditoria silenciosa final do vocabulário, da gramática, do gabarito e da formatação.

Entregue somente o exercício pronto para importação.
