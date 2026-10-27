# Projetos de Davi Costa

[Site](https://davi-nr.github.io/davi-nr/) · [Perfil](README.md)

## 32Business Desk

Clientes, agenda, produtos, estoque, vendas e caixa.

**Usei:** JavaScript, Python, Workers, D1, SQLite.

Programei as telas em JavaScript e as rotas no Cloudflare Workers. O D1 guarda os dados de clientes, produtos e operações. A agenda valida os horários; as rotas conferem a sessão e a organização antes de ler ou alterar registros.

- Registros vinculados à organização e, quando necessário, à unidade.
- Validação de IDs, datas, valores e permissões nas rotas.
- Persistência SQL e migrações para alterações do banco.

As imagens são da reformulação em andamento. Os indicadores exibidos na captura são dados de demonstração, identificados na própria tela.

[Site](https://32enterprises.com/32business)

## Ounce AI

Agente em Python com histórico, streaming e execução de ferramentas.

**Usei:** Python, AWS EC2, Streaming, Tool calling.

Escrevi o cliente de terminal e o runtime em Python. O agente usa list_files, read_file, write_file, run_command e security_check. As sessões ficam separadas por projeto; as respostas chegam por streaming. A inferência roda na AWS e as ferramentas executam no Mac.

- O histórico preserva cada chamada de ferramenta junto do resultado.
- Caminhos e links simbólicos são validados antes do acesso a arquivos.
- Escritas e comandos pedem aprovação; os processos têm timeout.

O Ounce está em desenvolvimento. Comandos aprovados usam as permissões do usuário no sistema. A imagem é um registro de uma versão anterior do terminal.

## Chameleon

Navegador macOS para inspecionar rede e testar uma entrada de vídeo.

**Usei:** Objective-C, AppKit, WebKit, JavaScript.

Fiz o aplicativo em Objective-C com AppKit e WebKit. O painel mostra requests, responses, console e eventos de WebSocket. Ele correlaciona chamadas, exporta JSON e permite usar um arquivo de vídeo como MediaStream de teste no host configurado.

- Máscaras para cookies, tokens e campos sensíveis nos registros.
- Prévias JSON limitadas em tamanho e tempo de leitura.
- Fixture baseada em canvas.captureStream no contexto da página.

Aplicativo para macOS Intel, com assinatura local. A fixture não instala uma câmera no sistema nem altera a resposta de um serviço de biometria.

## Apuração.win

Mapa eleitoral, API no Cloudflare e coletor Python na AWS.

**Usei:** JavaScript, Python, Workers, EC2, Durable Objects.

Programei a interface em JavaScript, a API em Workers e o coletor em Python. A fila fica em um Durable Object. O processo na AWS recebe os trabalhos e consulta os arquivos oficiais do TSE. O resultado volta para o cache que atende o site.

- EA14 sinaliza avanço por UF; EA20 traz os votos da região.
- Consultas ao mesmo arquivo compartilham um trabalho na fila.
- 429 respeita Retry-After; falhas preservam o último arquivo válido.

A frequência de atualização depende da publicação do TSE e do coletor ligado. O portfólio usa uma ilustração do mapa e não faz consultas eleitorais ao abrir.

[Site](https://apuracao.win)

## Souza Joias

Catálogo de joias com painel, estoque, sacola e orçamento por WhatsApp.

**Usei:** JavaScript, Node.js, SQLite, Cloudflare, D1.

Implementei cadastro e edição de produtos, imagens, estoque e visibilidade. A loja tem categorias, busca e sacola. O painel usa sessão autenticada. A versão local usa Node.js e SQLite; a hospedada usa Cloudflare e D1.

- Cookie de sessão HttpOnly e verificação de origem nas escritas.
- Produtos ocultos ficam fora do catálogo público.
- Consentimento separado para análise e cadastro promocional.

O site prepara um orçamento para o WhatsApp. Não processa o pagamento. A captura mostra imagens de produto marcadas como ilustrativas.

[Site](https://souzzajoias.com.br)

## Auréa Joias

Loja de joias com gestão de produtos, disponibilidade e preços.

**Usei:** JavaScript, Node.js, SQLite, D1.

Programei a vitrine, a sacola e o painel de produtos. O responsável pode editar preço, composição, imagem, estoque e visibilidade. A aplicação tem backend Node.js/SQLite local e Worker compatível com D1.

- Validação de estoque e origem no servidor.
- Sessão administrativa em cookie protegido.
- Configuração do contato comercial salva no banco.

Pix e cartão não foram integrados. A sacola não confirma um pedido pago. A imagem do portfólio é uma ilustração da apresentação.

## DopZero

Quests, personagens, contas e guildas em TypeScript e React.

**Usei:** TypeScript, React, Vinext, Drizzle, D1, Three.js.

Usei TypeScript, React e Vinext na aplicação, com Drizzle e D1 no servidor. Implementei contas, perfil, guildas, mensagens e permissões por associação. O progresso e o diário têm armazenamento local separado por conta.

- Sessão validada no servidor antes de acessar dados da conta.
- Associação à guilda conferida nas operações da comunidade.
- Canvas carregado em separado, com adaptação para movimento reduzido.

Projeto em desenvolvimento. Perfil e comunidade usam o servidor; parte do progresso pessoal e do diário permanece local.

## Auditoria HTTP

Script Python de análise HTTP com saída Markdown e JSON.

**Usei:** Python, HTTP, TLS, JSON.

Fiz um scanner de uma URL com análise de cabeçalhos, cookies e formulário de senha. Ele limita leituras, controla redirecionamentos e gera relatórios Markdown e JSON. Os testes usam um servidor local.

- Certificado TLS validado.
- Conteúdo sensível e valores de cookies não entram no relatório.
- Referências CWE usadas para orientar a validação manual.

A ferramenta faz triagem HTTP. Não percorre o site inteiro nem confirma exploração.

## Vídeos com código

Composições em JavaScript e TypeScript com HyperFrames e Remotion.

**Usei:** JavaScript, TypeScript, HyperFrames, Remotion, SVG.

Montei composições HTML e React para demonstrações, legendas e vídeos explicativos. O código controla os elementos e o tempo. Narração, imagens e composição ficam em arquivos separados.

- Composição editável e renderização local.
- Narração sincronizada à timeline.
- Prévias para conferir os cortes antes do render final.

Os arquivos editáveis e as mídias ficam separados para permitir novas versões.
