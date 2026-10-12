# FACTS — fontes, cálculos e limites

Data de verificação das fontes dinâmicas: **12 de outubro de 2026 (UTC)**. Este documento separa dados observados, definições institucionais e explicações de mecanismos econômicos.

## Meta Selic e Copom

| Afirmação usada | Evidência e fonte | Tratamento editorial |
|---|---|---|
| A Selic é a taxa básica de juros e o Copom define sua meta. | Banco Central, SGS série 432, cujo título/descrição é “Taxa de juros — Meta Selic definida pelo Copom”; metadados do catálogo do BCB. Captura de valores em `assets/documents/research/selic-target-series-2026-09-01_to_2026-10-12.json`. | Falar em “meta Selic” quando se trata da taxa decidida pelo Copom; não confundir com todas as taxas financeiras. |
| O Copom anunciou, em 16/09/2026, a redução da meta de 14,00% para 13,75% ao ano. | Comunicados do Copom (API oficial BCB) lista a 281ª reunião, data 2026-09-16 e título “Copom reduz a taxa Selic para 13,75% a.a.”. A série SGS 432 registra 14,00% até 16/09 e 13,75% desde 17/09, permanecendo em 13,75% no corte de 12/10. Capturas: `assets/documents/research/copom-recent.json` e `assets/documents/research/sgs-432-target-history-2024-01-01_to_2026-10-12.json`. | No gráfico, separar data da decisão (16/09) e início do registro diário da nova meta (17/09). Rotular “meta Selic, % ao ano; último dado consultado 12/10/2026”. Atualizar antes de publicação posterior. |
| A trajetória simplificada começou 2024 a 11,75%, chegou a 15,00% em junho de 2025 e recuou a 13,75% em setembro de 2026. | Série diária SGS 432, captura integral no intervalo 01/01/2024–12/10/2026 (`assets/documents/research/sgs-432-target-history-2024-01-01_to_2026-10-12.json`). Houve outros pontos intermediários; o gráfico usa uma seleção identificada como simplificada. | Usar gráfico em degraus e marcar somente alguns pontos para leitura. Não sugerir que a taxa variou continuamente entre reuniões. |

Fontes BCB: [Taxa Selic](https://www.bcb.gov.br/controleinflacao/taxaselic), [política monetária](https://www.bcb.gov.br/controleinflacao/), [histórico das taxas](https://www.bcb.gov.br/controleinflacao/historicotaxasjuros), [comunicados do Copom](https://www.bcb.gov.br/controleinflacao/comunicadoscopom), [API oficial de comunicados](https://www.bcb.gov.br/api/servico/sitebcb/copom/comunicados?quantidade=10), [SGS 432 — meta Selic](https://api.bcb.gov.br/dados/serie/bcdata.sgs.432/dados?dataInicial=01%2F01%2F2024&dataFinal=12%2F10%2F2026&formato=json). As páginas institucionais de taxa/histórico retornam o shell da aplicação e renderizam conteúdo no cliente; a comprovação dos dados numéricos nesta produção usa as respostas JSON do BCB preservadas localmente.

## Como os juros chegam ao cotidiano

- A peça apresenta um esquema qualitativo de transmissão: condições financeiras podem influenciar crédito, consumo, investimento, atividade e, com defasagem, a inflação. As páginas públicas gerais do BCB foram consultadas, mas retornam um shell renderizado no cliente; nesta produção não são tratadas como prova textual de cada mecanismo. O esquema é explicativo, não estima magnitudes nem prazos, e usa linguagem condicional (“tende”, “pode”, “com o tempo”).
- O custo de um empréstimo, financiamento ou cartão não é a própria meta Selic. Taxas de produto incorporam condições e componentes que variam com instituição, risco, garantias, prazo, custos, tributos e margem. Nenhuma taxa comercial específica é inventada no vídeo. Consulte as séries de taxas de crédito e o [Sistema Gerenciador de Séries Temporais do BCB](https://www.bcb.gov.br/estatisticas/txjuros) para comparações atuais.
- Aplicações pós-fixadas vinculadas a Selic/CDI podem acompanhar esses referenciais, mas não há um retorno líquido universal: produto, percentual contratado, prazo, liquidez, impostos e taxas importam. A inflação determina o ganho de poder de compra (retorno real), não transforma por si só a rentabilidade nominal anunciada. O vídeo não atribui rentabilidade numérica a um produto específico nem oferece recomendação de investimento. As páginas educativas gerais consultadas são tratadas como contexto, não como fonte de cálculo individual de rendimento.
- Inflação persistente reduz o poder de compra de uma quantia nominal fixa. A cesta mostrada é conceitual, sem preços reais. A afirmação sobre orçamento é uma explicação qualitativa, não uma estimativa de impacto distributivo nesta peça.
- Não se afirma que uma decisão isolada da Selic cause automaticamente demissões, alta/queda de preços, aprovação de crédito ou alteração igual para todos os financiamentos.

## Simulação PRICE — cena 6

Hipóteses fixas: principal financiado de R$ 10.000,00; 24 prestações mensais; sistema Price; taxa fixa nominal de 1% a.m. ou 2% a.m.; pagamentos ao fim de cada mês; nenhum IOF, seguro, tarifa, tributo ou outro encargo. A Selic não é usada como taxa do financiamento.

Prestação matemática: `A = P × i / [1 − (1 + i)^(-n)]`, com `P = 10.000`, `n = 24` e `i = 0,01` ou `0,02`. O cálculo foi feito em `Decimal` com 60 dígitos de precisão; total e juros são calculados com valores internos não arredondados e só então apresentados a centavos (ROUND_HALF_UP).

| Taxa mensal hipotética | Prestação matemática, aprox. | Total pela fórmula, aprox. | Juros pela fórmula, aprox. |
|---|---:|---:|---:|
| 1% a.m. | R$ 470,73 | R$ 11.297,63 | R$ 1.297,63 |
| 2% a.m. | R$ 528,71 | R$ 12.689,06 | R$ 2.689,06 |

Como a prestação exibida já está arredondada, multiplicá-la por 24 difere do total mostrado por R$ 0,11 e R$ 0,02. O gráfico e a legenda esclarecem que o total vem da prestação não arredondada; um contrato real pode adotar cronograma e ajuste final diferentes. O cálculo de precisão integral está em `assets/documents/research/finance-calc.md`.

## Identidade e mídia

A ilustração da família foi gerada para esta produção com ferramenta de geração de imagem, sem representar pessoas reais. Fontes locais e licenças: `assets/fonts/licenses/`. A trilha é original e tem gerador/notas em `assets/audio/`; sua verificação técnica final consta em `AUDIT-REPORT.md`.

## Limites de atualização

A meta Selic é um dado dinâmico. Esta captura comprova o estado consultado em 12/10/2026, não uma decisão futura. Antes de publicar, consultar novamente o comunicado mais recente e a série SGS 432. Se a meta mudar, revisar o destaque numérico, a narração, a legenda e o gráfico. A conferência não é aconselhamento financeiro nem parecer jurídico.
