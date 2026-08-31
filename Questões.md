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

# 3. QUANTIDADE DE QUESTÕES

Quando eu solicitar 15 questões, produza exatamente 15.

Na ausência de outra distribuição, utilize:

* 5 questões de múltipla escolha;
* 5 questões de verdadeiro ou falso;
* 5 questões de resposta escrita.

Se eu solicitar outra distribuição explicitamente, siga a nova distribuição.

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

# 4.2 EXERCÍCIOS ESTRUTURAIS E DE PREENCHIMENTO

É desejável criar questões semelhantes a exercícios tradicionais de livro didático.

Isso inclui:

- completar uma frase com a palavra correta;
- escolher entre duas ou mais formas gramaticais;
- transformar uma frase;
- conjugar um verbo;
- escrever um plural;
- escrever uma forma definida;
- escolher o pronome correto;
- escolher o advérbio correto;
- completar uma preposição;
- escrever uma data por extenso;
- escrever ou interpretar um horário;
- completar uma frase usando contexto gramatical.

Essas questões devem utilizar os três tipos já suportados pelo aplicativo:

TIPO: ESCRITA
TIPO: MULTIPLA
TIPO: VF

Para exercícios de lacuna, prefira TIPO: ESCRITA quando o estudante deve produzir a palavra.

Exemplo:

[QUESTAO]
TIPO: ESCRITA
Complete com här, där, hit ou dit:

Jag är på stationen nu. Jag väntar ____.

RESPOSTA: här
EXPLICACAO: "Här" indica localização no lugar onde a pessoa está.

Também é possível utilizar múltipla escolha:

[QUESTAO]
TIPO: MULTIPLA
Complete corretamente:

Jag är hemma. Kan du komma ____?

A) här
B) där
C) hit
D) dit

RESPOSTA: C
EXPLICACAO: "Hit" indica movimento em direção ao lugar onde está quem fala.

Para transformações verbais:

[QUESTAO]
TIPO: ESCRITA
Transforme para o pretérito:

Jag arbetar idag.

RESPOSTA: Jag arbetade idag.
EXPLICACAO: O pretérito de "arbeta" é "arbetade".

Para possessivos:

[QUESTAO]
TIPO: MULTIPLA
Complete corretamente:

Vi har ett projekt. ____ projekt är viktigt.

A) Vår
B) Vårt
C) Våra

RESPOSTA: B
EXPLICACAO: "projekt" é ett, portanto o possessivo correspondente é "vårt".

Cada lacuna deve normalmente constituir uma questão separada.

Não crie uma única [QUESTAO] contendo dez lacunas independentes, pois o aplicativo corrige cada [QUESTAO] individualmente.


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

---

# 9. IDENTIFICAÇÃO DAS QUESTÕES

Cada nova questão deve começar exatamente com:

[QUESTAO]

Não numere as questões manualmente.

Não escreva:

Questão 1

1.

1)

Pergunta 1

O próprio aplicativo será responsável pela numeração.

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

Quando mais de uma formulação legítima puder ser aceita, coloque todas na mesma linha de `RESPOSTA:` separadas por:

|

Exemplo:

RESPOSTA: Hon arbetar på ett sjukhus. | På ett sjukhus.

O caractere `|` significa:

"qualquer uma dessas respostas deve ser considerada correta".

Pode haver duas ou mais respostas alternativas.

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

[FIM]

---

# 29. EXEMPLO DE QUESTÃO GRAMATICAL

[QUESTAO]
TIPO: ESCRITA
Qual é o pretérito do verbo "ha"?

RESPOSTA: hade
EXPLICACAO: O pretérito de "ha" é "hade".

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

CAPÍTULOS: 0 até X

TAMANHO DO TEXTO: aproximadamente 300 palavras

QUANTIDADE DE QUESTÕES: 15

DISTRIBUIÇÃO:

* 5 múltipla escolha;
* 5 verdadeiro ou falso;
* 5 resposta escrita.

Use exclusivamente o vocabulário autorizado segundo esta especificação.

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

Isso pode incluir, conforme o material disponível:

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

Inclua exercícios tradicionais de completar, escolher e transformar frases quando forem adequados.

Faça uma auditoria silenciosa final do vocabulário, da gramática, do gabarito e da formatação.

Entregue somente o exercício pronto para importação.
