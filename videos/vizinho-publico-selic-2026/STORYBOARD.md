---
format: 1080x1920
message: "A meta Selic influencia a vida cotidiana por diferentes canais, sem ser a taxa de cada empréstimo ou investimento."
arc: Pergunta cotidiana → definição → decisão → mecanismos → comparação concreta → dado atual → síntese e CTA
audience: Público brasileiro geral
mode: autonomous
duration: 2m58s de narração e 2s de sustentação final; 12 cenas sincronizadas pela voz real
music: Piano macio, textura eletrônica e pulsação leve; trilha original, sem vocais, ducking sob a fala
---

## Frame 1 — O que a Selic tem a ver com sua vida?

- status: voice-approved, composition-ready
- src: compositions/frames/01-hook.html
- voice_start: 0.000s
- voice_duration: 13.113s
- frame_duration: 13.533s
- poster: 5s
- transition_in: cut
- scene: A família e três objetos cotidianos; exemplo de crédito PRICE genérico e explicitamente hipotético mostra parcela ~R$470,73→~R$528,71 (principal R$10 mil, 24 meses, 1%→2% a.m.), sem sugerir preço de casa/carro nem equiparar Selic à taxa do empréstimo; o traço culmina em SELIC.
- voiceover: Você já percebeu que, às vezes, comprar uma casa, financiar um carro ou parcelar uma compra parece cada vez mais difícil? Parte da explicação pode estar em cinco letras: Selic. Mas como uma taxa decidida pelo Banco Central chega ao seu bolso?
- blueprint: spatial-pan-stations
- rules: viewport-change, multi-phase-camera, discrete-text-sequence

Abertura imediata, sem vinheta. Cada elemento se move com intenção, termina na palavra Selic e preserva a distinção entre meta e taxa individual.

## Frame 2 — O que é a Selic?

- status: voice-approved, composition-ready
- src: compositions/frames/02-definition.html
- voice_start: 13.533s
- voice_duration: 11.990s
- frame_duration: 12.410s
- poster: 4s
- transition_in: crossfade
- scene: O eixo Selic abre conexões para crédito, financiamento e investimento, separando visualmente taxa básica de taxas de produto.
- voiceover: A Selic é a taxa básica de juros da economia brasileira. Ela funciona como referência para o custo do dinheiro. Não é exatamente o que você paga ao banco, mas influencia empréstimos, financiamentos e investimentos.
- blueprint: constellation-hub
- rules: spring-pop-entrance, svg-path-draw, sine-wave-loop

Conexões aparecem uma a uma; família em escala secundária; movimento recorrente discreto.

## Frame 3 — Quem decide?

- status: voice-approved, composition-ready
- src: compositions/frames/03-copom.html
- voice_start: 25.944s
- voice_duration: 11.389s
- frame_duration: 11.809s
- poster: 5s
- transition_in: crossfade
- scene: Inflação, atividade e expectativas percorrem indicadores móveis e encontram a meta definida pelo Copom.
- voiceover: Quem define a meta da Selic é o Copom, comitê do Banco Central. Seus integrantes observam inflação, atividade econômica e expectativas. A cada reunião, decidem se a taxa sobe, cai ou permanece igual.
- blueprint: dataviz-countup
- rules: discrete-text-sequence, svg-path-draw, stat-bars-and-fills

A mesa institucional é abstrata; não encenar reunião real nem falas de integrantes.

## Frame 4 — Quando os juros sobem

- status: voice-approved, composition-ready
- src: compositions/frames/04-high-rates.html
- voice_start: 37.753s
- voice_duration: 12.513s
- frame_duration: 12.933s
- poster: 5s
- transition_in: crossfade
- scene: A régua sobe; custo de crédito, compras adiadas e demanda aparecem em sequência, com defasagem visual explícita.
- voiceover: Com juros mais altos, tomar crédito tende a ficar mais caro. Famílias podem adiar compras e empresas rever investimentos. Com o tempo, uma demanda mais fraca pode aliviar a pressão sobre preços. O efeito não é imediato nem garantido.
- blueprint: spatial-pan-stations
- rules: viewport-change, multi-phase-camera, discrete-text-sequence

A palavra “tende” e o marcador de atraso acompanham a cadeia; sem causalidade automática.

## Frame 5 — Quando os juros caem

- status: voice-approved, composition-ready
- src: compositions/frames/05-low-rates.html
- voice_start: 50.686s
- voice_duration: 12.382s
- frame_duration: 12.802s
- poster: 5s
- transition_in: crossfade
- scene: Crédito potencialmente mais acessível abre consumo, investimento e contratação; capacidade produtiva delimita possível pressão sobre preços.
- voiceover: Quando os juros caem, o crédito pode ficar mais acessível e estimular consumo, investimento e contratações. Mas, se a demanda cresce mais rápido que a capacidade de produção, os preços também podem subir. A resposta depende do contexto.
- blueprint: spatial-pan-stations
- rules: viewport-change, multi-phase-camera, stat-bars-and-fills

Movimento inverso ao frame anterior sem codificar solução boa ou ruim; ressalva permanece legível.

## Frame 6 — Financiamento: duas taxas hipotéticas

- status: voice-approved, composition-ready
- src: compositions/frames/06-financing.html
- voice_start: 63.488s
- voice_duration: 35.579s
- frame_duration: 35.999s
- poster: 7s
- transition_in: wipe
- scene: Dois cálculos PRICE: principal R$10 mil, 24 parcelas, taxa mensal fixa de 1% ou 2%; parcela, total e juros contam em paralelo. Nota: valores aproximados; total usa a parcela não arredondada.
- voiceover: Vamos imaginar dois financiamentos de dez mil reais, em vinte e quatro meses, pelo sistema Price, sem tarifas ou impostos. A um por cento ao mês, a parcela fica perto de quatrocentos e setenta reais e setenta e três centavos; o total, onze mil duzentos e noventa e sete reais e sessenta e três centavos. A dois por cento ao mês, cerca de quinhentos e vinte e oito reais e setenta e um centavos por parcela; total de doze mil seiscentos e oitenta e nove reais e seis centavos. A taxa mensal maior eleva o custo. Os valores são aproximados: os totais usam o cálculo da parcela antes do arredondamento.
- blueprint: comparison-split
- rules: discrete-text-sequence, stat-bars-and-fills, counting-dynamic-scale

Cada coluna explicita as mesmas premissas, salvo a taxa hipotética. A Selic não é a taxa do financiamento.

## Frame 7 — Selic não é juro do cartão

- status: voice-approved, composition-ready
- src: compositions/frames/07-card.html
- voice_start: 99.487s
- voice_duration: 11.311s
- frame_duration: 11.731s
- poster: 5s
- transition_in: crossfade
- scene: O canal do cartão se separa da meta Selic; componentes qualitativos de custo se movem e a taxa do cartão fica claramente distinta.
- voiceover: E atenção: Selic não é igual aos juros do cartão. O banco considera também risco, custos, impostos e margem própria. Por isso, mesmo uma Selic menor não faz os juros do cartão caírem na mesma proporção.
- blueprint: comparison-split
- rules: discrete-text-sequence, svg-path-draw

Sem percentuais inventados ou repasse mecânico.

## Frame 8 — Empresas, investimento e trabalho

- status: voice-approved, composition-ready
- src: compositions/frames/08-business.html
- voice_start: 111.218s
- voice_duration: 13.296s
- frame_duration: 13.716s
- poster: 5s
- transition_in: crossfade
- scene: Estoque, máquinas e expansão entram numa cadeia de decisões empresariais; projeto e contratação desaceleram como possibilidades, sem layoff automático.
- voiceover: As empresas usam crédito para estoque, máquinas e expansão. Quando financiar custa mais, alguns projetos podem deixar de compensar e contratações podem desacelerar. Isso é uma influência possível, não uma demissão automática provocada por uma decisão isolada.
- blueprint: grid-card-assemble
- rules: spring-pop-entrance, discrete-text-sequence, svg-path-draw

As consequências dependem do contexto e de cada empresa.

## Frame 9 — Quem guarda dinheiro

- status: voice-approved, composition-ready
- src: compositions/frames/09-savings.html
- voice_start: 124.934s
- voice_duration: 12.878s
- frame_duration: 13.298s
- poster: 5s
- transition_in: crossfade
- scene: Referências Selic/CDI, produto, tributos, taxas, prazo e liquidez atravessam uma aplicação ilustrativa; a inflação marca poder de compra, distinta do rendimento nominal.
- voiceover: Juros mais altos podem elevar a remuneração de aplicações de renda fixa ligadas à Selic ou ao cê dê i. Mas impostos, taxas, produto, prazo e liquidez influenciam o resultado; a inflação determina o ganho de poder de compra.
- blueprint: comparison-split
- rules: discrete-text-sequence, svg-path-draw, stat-bars-and-fills

Sem rentabilidade universal ou recomendação de investimento. CDI é visualmente escrito por extenso na tela como “CDI”.

## Frame 10 — Inflação e poder de compra

- status: voice-approved, composition-ready
- src: compositions/frames/10-inflation.html
- voice_start: 138.232s
- voice_duration: 12.225s
- frame_duration: 12.645s
- poster: 6s
- transition_in: wipe
- scene: Cesta familiar conceitual e moedas se deslocam; itens básicos ganham foco e o poder de compra diminui sem preços reais.
- voiceover: Então por que não manter os juros sempre baixos? Porque a política monetária também busca conter a inflação. Quando os preços sobem de forma persistente, o dinheiro compra menos. Isso pesa mais no orçamento de quem destina grande parte da renda ao básico.
- blueprint: dataviz-countup
- rules: counting-dynamic-scale, multi-phase-camera, discrete-text-sequence

A cesta é identificada como ilustração sem preços reais.

## Frame 11 — A meta Selic no Brasil

- status: voice-approved, composition-ready
- src: compositions/frames/11-current-selic.html
- voice_start: 150.878s
- voice_duration: 12.147s
- frame_duration: 12.567s
- poster: 6s
- transition_in: crossfade
- scene: Meta Selic por degraus com decisão de 16/09 e valor de 13,75% a.a. desde 17/09/2026; não chamar a meta de taxa de crédito/investimento.
- voiceover: Em dezesseis de setembro de dois mil e vinte e seis, o Copom reduziu a meta Selic para treze vírgula setenta e cinco por cento ao ano. É a taxa básica de referência, não a taxa de todo financiamento ou investimento.
- blueprint: dataviz-countup
- rules: counting-dynamic-scale, stat-bars-and-fills, discrete-text-sequence

Fonte quantitativa: SGS 432/meta definida pelo Copom, consultada até 12/10/2026. Atualizar antes da publicação.

## Frame 12 — A decisão chega ao seu bolso

- status: voice-approved, composition-ready
- src: compositions/frames/12-outro.html
- voice_start: 163.445s
- voice_duration: 12.696s
- frame_duration: 14.696s
- poster: 4s
- transition_in: crossfade
- scene: A família volta como escala humana; linhas dos canais econômicos convergem no Vizinho Público. Sustentar o CTA visual após a última fala.
- voiceover: A Selic não fica só nos bancos. Ela influencia condições de crédito, consumo, investimento e o esforço de controlar a inflação. A decisão pode chegar ao seu bolso mesmo que você nunca tenha investido um centavo. Siga o Vizinho Público.
- blueprint: logo-assemble-lockup
- rules: svg-path-draw, spring-pop-entrance, sine-wave-loop

O CTA visual “Siga @vizinhopublico” permanece por pelo menos dois segundos após o fim da voz; fade-out musical suave.
