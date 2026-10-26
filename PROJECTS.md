# Projetos de Davi Costa

[Portfólio interativo](https://davi-nr.github.io/davi-nr/) · [Perfil](README.md)

Seleção de trabalhos de desenvolvimento. As descrições apresentam o escopo de cada implementação; não são garantias de disponibilidade ou de operação comercial. Da 32Enterprises, este portfólio apresenta somente o 32Business Desk, com imagem da reformulação em andamento.

## 32Business Desk

**Gestão de negócios** · Reformulação em desenvolvimento

Sistema de gestão com interface, API e banco de dados próprios.

**Tecnologias:** JavaScript, Python, Workers, D1, SQLite.

### Desafio

Reunir rotinas de segmentos diferentes em produtos claros, com dados persistentes e acesso controlado.

### Implementação

Desenvolvimento de interfaces responsivas, APIs, gestão de clientes, agenda, catálogo, estoque, vendas e financeiro. O Business Desk organiza os módulos conforme o segmento e a rotina da empresa.

### Decisões de engenharia

- APIs autenticadas e dados vinculados à organização.
- Cloudflare Workers e D1 na camada hospedada; Python e SQLite em aplicações locais.
- Módulos por segmento, separados da apresentação pública.

**Escopo:** A galeria mostra a reformulação local em andamento. Módulos e integrações têm estágios próprios; a presença de uma tela não significa que toda integração está habilitada em produção.

[Site do projeto](https://32enterprises.com/32business)

## Ounce AI

**IA aplicada / ferramentas** · Agente funcional de desenvolvimento

Um agente no terminal que conversa, usa ferramentas e trabalha com o contexto do projeto.

**Tecnologias:** Python, Ollama, AWS EC2, Tool calling.

### Desafio

Conectar um modelo de linguagem a ferramentas úteis no computador, mantendo ações visíveis e aprovadas pelo usuário.

### Implementação

CLI em Python com streaming, histórico por sessão, orçamento de contexto, leitura e escrita de arquivos, execução de comandos e adaptadores de diagnóstico HTTP, DNS, TLS e Nmap. A inferência foi executada na AWS por meio do Ollama.

### Decisões de engenharia

- Arquivos limitados ao workspace, com bloqueio de caminhos sensíveis.
- Escritas e comandos apresentados para aprovação.
- Resultados de ferramentas retornam ao modelo com limites de tamanho e execução.

**Escopo:** Ounce é o agente e a orquestração desenvolvidos por mim sobre modelos de terceiros, incluindo Qwen e Llama. Não é um modelo fundacional treinado do zero. A captura registra uma versão de desenvolvimento.

## Chameleon

**Aplicação nativa / laboratório** · Aplicativo macOS Intel

Navegador de diagnóstico com inspeção de requisições e uma fixture de vídeo para testes.

**Tecnologias:** Objective-C, AppKit, WebKit, JavaScript.

### Desafio

Observar requisições e testar fluxos de captura de vídeo em um aplicativo de laboratório próprio.

### Implementação

Aplicação nativa para macOS com WebKit, painel de requests/responses, correlação de Fetch e XHR, logs de console e WebSocket, exportação JSON e substituição da entrada de vídeo da página por um MediaStream de teste.

### Decisões de engenharia

- Instrumentação limitada ao host configurado.
- Máscaras para tokens, cookies e campos sensíveis nos registros.
- Fixture explícita baseada em canvas.captureStream, sem driver de câmera no sistema.

**Escopo:** Ferramenta de laboratório. A fixture substitui a entrada no contexto da página; não emula uma câmera física nem confirma decisões de biometria do servidor. Aplicativo assinado localmente, sem notarização.

## Apuração.win

**Dados públicos / infraestrutura** · Implementação web e infraestrutura

Mapa eleitoral com consultas por estado e município, apoiado por uma API e um coletor na AWS.

**Tecnologias:** JavaScript, Python, Workers, EC2, Durable Objects.

### Desafio

Distribuir dados oficiais para muitos visitantes sem multiplicar as consultas à fonte a cada acesso.

### Implementação

Interface com mapa do Brasil, filtros e resultados oficiais. Uma API no Cloudflare coordena a fila global; um coletor Python na AWS São Paulo consulta o TSE e devolve os arquivos para distribuição por cache.

### Decisões de engenharia

- Deduplicação de consultas e cache compartilhado.
- EA14 sinaliza quais UFs precisam de uma nova leitura EA20.
- Timeout, retentativas graduais, respeito a Retry-After e preservação do último dado válido.

**Escopo:** A atualização acompanha a publicação dos arquivos oficiais. A cadência da fonte e o estado do coletor influenciam a disponibilidade; o portfólio não consulta resultados eleitorais ao abrir.

[Site do projeto](https://apuracao.win)

## Souza Joias

**E-commerce / administração** · Loja e painel implementados

Vitrine, catálogo persistente e painel para produtos, estoque e solicitações de orçamento.

**Tecnologias:** JavaScript, Node.js, SQLite, Cloudflare, D1.

### Desafio

Conectar uma vitrine de joias a uma operação de catálogo que o responsável consiga administrar.

### Implementação

Loja responsiva com categorias, busca, sacola e encaminhamento de orçamento ao WhatsApp. Painel protegido para produtos, estoque, visibilidade, imagens e configurações. Implementações local em SQLite e hospedada em Cloudflare D1.

### Decisões de engenharia

- Sessões com cookie HttpOnly e validação de origem.
- Consentimento separado para cadastro promocional e análise.
- Catálogo persistente e produtos identificados por referência.

**Escopo:** O fluxo prepara um orçamento; pagamento e confirmação comercial ocorrem fora do site. A captura contém peças identificadas como imagens ilustrativas.

[Site do projeto](https://souzzajoias.com.br)

## Auréa Joias

**E-commerce / catálogo** · Vitrine e administração implementadas

Uma loja com identidade própria e gestão de catálogo, disponibilidade e contato comercial.

**Tecnologias:** JavaScript, Node.js, SQLite, D1.

### Desafio

Criar uma experiência de catálogo consistente com uma identidade de joalheria e um painel simples de operar.

### Implementação

Vitrine, filtros, sacola e administração de produtos, preços, composição, estoque, imagens e visibilidade. Backend local com SQLite e Worker compatível com Cloudflare D1.

### Decisões de engenharia

- Autenticação de administração com sessão protegida.
- Validação de estoque e origem no servidor.
- Configurações comerciais persistidas e separadas da interface.

**Escopo:** Projeto em apresentação. Pix e cartão não estão integrados e a sacola não representa um pagamento confirmado.

## DopZero

**Produto digital / comunidade** · Aplicação em desenvolvimento

Desenvolvimento pessoal com quests, progresso, personagens e uma comunidade com controle de acesso.

**Tecnologias:** TypeScript, React, Vinext, Drizzle, D1, Three.js.

### Desafio

Organizar progresso pessoal e recursos sociais com uma experiência móvel clara e identidade visual própria.

### Implementação

Interfaces para quests, diário, estudos, personagens e guildas. APIs para contas, perfil e comunidade, com persistência D1. Experimentos visuais com Three.js e adaptação para movimento reduzido.

### Decisões de engenharia

- Autorização por conta e associação a guildas.
- Sessões HttpOnly e tokens armazenados como hash.
- Separação explícita entre progresso local e dados sincronizados.

**Escopo:** A aplicação permanece em desenvolvimento. Recursos pessoais locais e sincronizados têm escopos diferentes; a presença de uma tela não indica disponibilidade comercial.

## NORASTREABILITY Audit

**Segurança / ferramenta CLI** · Ferramenta CLI de laboratório

Triagem HTTP em Python com relatórios em Markdown e JSON e referências CWE.

**Tecnologias:** Python, HTTP, TLS, JSON.

### Desafio

Produzir observações de segurança reproduzíveis sem transformar a ausência de um controle em um achado confirmado.

### Implementação

Scanner de uma URL com análise de cookies e cabeçalhos, controle de redirecionamento, limites de leitura e relatórios sanitizados. Laboratório local com casos vulneráveis e corrigidos para validação.

### Decisões de engenharia

- TLS validado e redirecionamento limitado à origem.
- Cookies e conteúdo sensível excluídos dos relatórios.
- Indicadores de triagem separados de vulnerabilidades confirmadas.

**Escopo:** O escopo é triagem HTTP, não uma auditoria completa. Não atribui CVE, CVSS ou aprovação de segurança automaticamente.

## Produção visual programável

**Código / apresentação** · Composições e fluxos desenvolvidos

Vídeos, demonstrações de produtos e materiais visuais com composição editável em código.

**Tecnologias:** JavaScript, TypeScript, HyperFrames, Remotion, SVG.

### Desafio

Apresentar sistemas e explicar ideias com materiais visuais que possam ser revisados e renderizados novamente.

### Implementação

Composições HTML e React para vídeos, apresentações de produto, legendas e animações. Integrações de narração e preparação de materiais para revisão.

### Decisões de engenharia

- Fontes editáveis e mídia separada da composição.
- Roteiro, tempo e animação controlados por código.
- Prévias e renderização local como parte do fluxo.

**Escopo:** Os trabalhos incluem demonstrações e materiais editoriais. As ferramentas utilizadas pertencem aos respectivos projetos e fornecedores.
