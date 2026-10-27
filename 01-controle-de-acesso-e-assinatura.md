# Controle de acesso e validação de assinatura em uma aplicação web

**Davi Costa · Setembro de 2026**  
**Estudo de caso anonimizado · Análise de tráfego HTTP**

Durante a análise de uma aplicação web, observamos respostas de API que retornavam credenciais de integração e campos internos de usuários. Também acompanhamos o provisionamento de uma conta de teste e o comportamento de uma barreira de assinatura.

O resultado mais visível ocorreu ao alterar, no tráfego entregue ao navegador, o status de assinatura de `canceled` para `active`: a interface ficou acessível. Esse resultado tem um limite importante. A abertura da tela não comprova que o servidor permitiu operações restritas a assinantes.

Este texto reúne o que foi observado e o que ainda não foi demonstrado. Domínios, contas, identificadores e credenciais foram omitidos. Os trechos de JSON abaixo são reconstruções mínimas para explicar os comportamentos, não capturas originais.

## Método e evidências

O trabalho utilizou o Network do navegador e o Burp Suite para acompanhar o fluxo da aplicação, ler respostas e comparar resultados de requisições. A análise se baseia no tráfego registrado e no resultado de navegação relatado durante o teste. Não incluiu revisão do código-fonte, das políticas do banco ou dos logs do servidor.

A sequência relevante foi:

1. Acompanhar o fluxo público de convite e as consultas feitas pela página.
2. Inspecionar os campos retornados pelas APIs.
3. Consultar o perfil da conta de teste após o provisionamento.
4. Observar a resposta usada na verificação de assinatura.
5. Comparar uma tentativa de atualização com uma alteração local da resposta.

## 1. Informações retornadas pela API

Uma resposta no fluxo de convite continha os campos de identificação e token de uma integração externa, ambos preenchidos. O segredo não é reproduzido aqui. Sua validade e suas permissões no provedor não foram testadas.

Em outra consulta, uma seleção originalmente limitada a dados de apresentação de um usuário foi ampliada para todos os campos. O resultado incluiu dados de contato e atributos internos, como papel, vínculo à conta e informações administrativas.

Essas evidências demonstram o retorno dos campos nos registros consultados. Não demonstram acesso a todos os usuários ou a todas as contas da aplicação. Para determinar a causa, seria necessário conferir as permissões de tabela e coluna, as políticas por linha e o contexto de autenticação de cada requisição.

Uma chave pública de cliente, por si só, não explica o problema: a questão é quais dados e operações o backend permite no contexto em que ela é utilizada.

## 2. Provisionamento da conta de teste

Após o fluxo de convite, foi retornado um identificador de usuário. Uma consulta posterior mostrou o perfil de teste com papel `admin`, inicialmente sem vínculo à conta da aplicação. Em um momento seguinte, o perfil apareceu associado e houve login bem-sucedido.

O registro disponível não contém todas as requisições intermediárias. Por isso, não é possível atribuir a origem do papel administrativo exclusivamente ao endpoint de convite. Também não foi documentada a execução de uma operação administrativa pelo usuário criado.

O achado permanece como ponto de investigação: é necessário reconstruir a criação do perfil e as alterações de papel e vínculo antes de concluir que houve elevação de privilégio.

## 3. A consulta de assinatura

A aplicação consultava o estado do plano antes de liberar a navegação. O trecho relevante da resposta era equivalente a:

```json
[
  {
    "status": "canceled",
    "trial_end": null
  }
]
```

O HTTP `200` indicava que a consulta havia sido atendida. O status comercial estava no corpo da resposta. O valor `trial_end: null` não demonstrava, isoladamente, expiração; a assinatura estava identificada como cancelada. A data de fim do período apresentada no registro era posterior ao teste.

Uma tentativa de alteração do registro retornou `200` com `[]`. A consulta seguinte ainda mostrava `canceled`. Portanto, essa tentativa não comprovou alteração persistida. O resultado é compatível com diferentes causas, incluindo filtros e políticas de acesso; não foi possível determinar a causa exata sem verificar o backend.

## 4. Alteração da resposta entregue ao cliente

Na etapa seguinte, utilizamos uma regra de substituição no corpo da resposta HTTP no Burp. O navegador passou a receber o status `active` no lugar de `canceled`.

O trecho abaixo representa a substituição central. É um exemplo simplificado e não uma reprodução integral de todas as configurações da sessão:

```diff
- "status": "canceled"
+ "status": "active"
```

Após a alteração, foi relatado acesso à interface que antes exibia a barreira de assinatura.

A regra modificou a cópia da resposta entregue ao navegador. Ela não constituiu uma atualização do registro de cobrança nem um evento de confirmação do provedor de pagamento.

## Alcance do resultado

| Observação | Conclusão sustentada |
| --- | --- |
| Campos de integração preenchidos na resposta | As informações foram retornadas ao cliente naquela consulta. |
| Campos internos no perfil consultado | A resposta expôs mais informações que o perfil público inicialmente solicitado. |
| Papel `admin` no perfil de teste | O papel estava presente; sua origem e suas permissões efetivas ainda precisam de confirmação. |
| Tentativa de escrita com `[]` e leitura ainda em `canceled` | Não foi comprovada alteração persistida por essa tentativa. |
| Interface acessível após a substituição da resposta | O comportamento da barreira no cliente foi influenciado pelo conteúdo recebido. |

Não foi demonstrado acesso irrestrito ao serviço, confirmação de pagamento, uso das credenciais de integração ou execução de operações administrativas. Para comprovar um bypass de autorização de assinatura no backend, seria necessário registrar uma operação protegida sendo aceita em um contexto sem direito de acesso.

## Classificação

- **CWE-201:** classificação proposta para informação sensível retornada em respostas; a adequação final depende da política de acesso esperada.
- **CWE-269:** referência conceitual para investigar o papel administrativo. Não representa uma causa raiz confirmada.
- **CWE-602:** hipótese para a dependência da barreira de assinatura em uma decisão manipulável no cliente. O controle das operações no servidor ainda precisa ser verificado.

Nenhum identificador CVE foi atribuído a este estudo. Não apresentamos escore CVSS sem evidências suficientes para estabelecer o impacto e o alcance.

## O que o caso ensina

Há três resultados diferentes a observar: o que a interface mostra, o que o banco mantém e o que o servidor autoriza. A alteração de um deles não permite presumir os demais.

Neste caso, o teste mostrou uma mudança de navegação e exposição de campos nas respostas observadas. Registrar esses limites permite que outra pessoa revise o trabalho sem depender de conclusões que o tráfego disponível não sustenta.

## Referências

- [OWASP Web Security Testing Guide — Reporting](https://owasp.org/www-project-web-security-testing-guide/latest/5-Reporting/01-Reporting_Structure)
- [CWE-201 — Insertion of Sensitive Information Into Sent Data](https://cwe.mitre.org/data/definitions/201.html)
- [CWE-269 — Improper Privilege Management](https://cwe.mitre.org/data/definitions/269.html)
- [CWE-602 — Client-Side Enforcement of Server-Side Security](https://cwe.mitre.org/data/definitions/602.html)
