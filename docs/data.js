export const projects = [
  {
    "id": "32enterprises",
    "title": "32Business Desk",
    "kind": "Gestão de negócios",
    "categories": [
      "web",
      "cloud"
    ],
    "summary": "Clientes, agenda, produtos, estoque, vendas e caixa.",
    "stack": [
      "JavaScript",
      "Python",
      "Workers",
      "D1",
      "SQLite"
    ],
    "status": "Reformulação em desenvolvimento",
    "image": "assets/32business.webp",
    "alt": "Reformulação da página de apresentação do 32Business",
    "url": "https://32enterprises.com/32business",
    "challenge": "Separar os dados de cada organização e ligar agenda, produtos, vendas e caixa.",
    "built": "Programei as telas em JavaScript e as rotas no Cloudflare Workers. O D1 guarda os dados de clientes, produtos e operações. A agenda valida os horários; as rotas conferem a sessão e a organização antes de ler ou alterar registros.",
    "decisions": [
      "Registros vinculados à organização e, quando necessário, à unidade.",
      "Validação de IDs, datas, valores e permissões nas rotas.",
      "Persistência SQL e migrações para alterações do banco."
    ],
    "scope": "As imagens são da reformulação em andamento. Os indicadores exibidos na captura são dados de demonstração, identificados na própria tela."
  },
  {
    "id": "ounce",
    "title": "Ounce AI",
    "kind": "Engenharia de IA / ferramentas",
    "categories": [
      "ai",
      "cloud"
    ],
    "summary": "Agente em Python com histórico, streaming e execução de ferramentas.",
    "stack": [
      "Python",
      "AWS EC2",
      "Streaming",
      "Tool calling"
    ],
    "status": "Agente funcional de desenvolvimento",
    "image": "assets/ounce.webp",
    "alt": "Interface de terminal do Ounce com identidade LabFauna",
    "challenge": "Receber a chamada de ferramenta, validar os argumentos e devolver o resultado na mesma conversa.",
    "built": "Escrevi o cliente de terminal e o runtime em Python. O agente usa list_files, read_file, write_file, run_command e security_check. As sessões ficam separadas por projeto; as respostas chegam por streaming. A inferência roda na AWS e as ferramentas executam no Mac.",
    "decisions": [
      "O histórico preserva cada chamada de ferramenta junto do resultado.",
      "Caminhos e links simbólicos são validados antes do acesso a arquivos.",
      "Escritas e comandos pedem aprovação; os processos têm timeout."
    ],
    "scope": "O Ounce está em desenvolvimento. Comandos aprovados usam as permissões do usuário no sistema. A imagem é um registro de uma versão anterior do terminal."
  },
  {
    "id": "chameleon",
    "title": "Chameleon",
    "kind": "Aplicação nativa / laboratório",
    "categories": [
      "ai"
    ],
    "summary": "Navegador macOS para inspecionar rede e testar uma entrada de vídeo.",
    "stack": [
      "Objective-C",
      "AppKit",
      "WebKit",
      "JavaScript"
    ],
    "status": "Aplicativo macOS Intel",
    "visual": "chameleon",
    "challenge": "Capturar Fetch, XHR e WebSocket e fornecer um vídeo de teste à página.",
    "built": "Fiz o aplicativo em Objective-C com AppKit e WebKit. O painel mostra requests, responses, console e eventos de WebSocket. Ele correlaciona chamadas, exporta JSON e permite usar um arquivo de vídeo como MediaStream de teste no host configurado.",
    "decisions": [
      "Máscaras para cookies, tokens e campos sensíveis nos registros.",
      "Prévias JSON limitadas em tamanho e tempo de leitura.",
      "Fixture baseada em canvas.captureStream no contexto da página."
    ],
    "scope": "Aplicativo para macOS Intel, com assinatura local. A fixture não instala uma câmera no sistema nem altera a resposta de um serviço de biometria."
  },
  {
    "id": "apuracao",
    "title": "Apuração.win",
    "kind": "Dados públicos / infraestrutura",
    "categories": [
      "web",
      "cloud"
    ],
    "summary": "Mapa eleitoral, API no Cloudflare e coletor Python na AWS.",
    "stack": [
      "JavaScript",
      "Python",
      "Workers",
      "EC2",
      "Durable Objects"
    ],
    "status": "Implementação web e infraestrutura",
    "visual": "apuracao",
    "url": "https://apuracao.win",
    "challenge": "Evitar que cada visitante gerasse uma consulta independente ao TSE.",
    "built": "Programei a interface em JavaScript, a API em Workers e o coletor em Python. A fila fica em um Durable Object. O processo na AWS recebe os trabalhos e consulta os arquivos oficiais do TSE. O resultado volta para o cache que atende o site.",
    "decisions": [
      "EA14 sinaliza avanço por UF; EA20 traz os votos da região.",
      "Consultas ao mesmo arquivo compartilham um trabalho na fila.",
      "429 respeita Retry-After; falhas preservam o último arquivo válido."
    ],
    "scope": "A frequência de atualização depende da publicação do TSE e do coletor ligado. O portfólio usa uma ilustração do mapa e não faz consultas eleitorais ao abrir."
  },
  {
    "id": "souza",
    "title": "Souza Joias",
    "kind": "E-commerce / administração",
    "categories": [
      "web",
      "cloud"
    ],
    "summary": "Catálogo de joias com painel, estoque, sacola e orçamento por WhatsApp.",
    "stack": [
      "JavaScript",
      "Node.js",
      "SQLite",
      "Cloudflare",
      "D1"
    ],
    "status": "Loja e painel implementados",
    "image": "assets/souza.webp",
    "alt": "Catálogo da Souza Joias com imagens ilustrativas das peças",
    "url": "https://souzzajoias.com.br",
    "challenge": "Permitir que o responsável editasse o catálogo sem alterar o código da loja.",
    "built": "Implementei cadastro e edição de produtos, imagens, estoque e visibilidade. A loja tem categorias, busca e sacola. O painel usa sessão autenticada. A versão local usa Node.js e SQLite; a hospedada usa Cloudflare e D1.",
    "decisions": [
      "Cookie de sessão HttpOnly e verificação de origem nas escritas.",
      "Produtos ocultos ficam fora do catálogo público.",
      "Consentimento separado para análise e cadastro promocional."
    ],
    "scope": "O site prepara um orçamento para o WhatsApp. Não processa o pagamento. A captura mostra imagens de produto marcadas como ilustrativas."
  },
  {
    "id": "aurea",
    "title": "Auréa Joias",
    "kind": "E-commerce / catálogo",
    "categories": [
      "web",
      "cloud"
    ],
    "summary": "Loja de joias com gestão de produtos, disponibilidade e preços.",
    "stack": [
      "JavaScript",
      "Node.js",
      "SQLite",
      "D1"
    ],
    "status": "Vitrine e administração implementadas",
    "visual": "aurea",
    "challenge": "Ligar a vitrine às alterações feitas no painel administrativo.",
    "built": "Programei a vitrine, a sacola e o painel de produtos. O responsável pode editar preço, composição, imagem, estoque e visibilidade. A aplicação tem backend Node.js/SQLite local e Worker compatível com D1.",
    "decisions": [
      "Validação de estoque e origem no servidor.",
      "Sessão administrativa em cookie protegido.",
      "Configuração do contato comercial salva no banco."
    ],
    "scope": "Pix e cartão não foram integrados. A sacola não confirma um pedido pago. A imagem do portfólio é uma ilustração da apresentação."
  },
  {
    "id": "dopzero",
    "title": "DopZero",
    "kind": "Produto digital / comunidade",
    "categories": [
      "web",
      "cloud"
    ],
    "summary": "Quests, personagens, contas e guildas em TypeScript e React.",
    "stack": [
      "TypeScript",
      "React",
      "Vinext",
      "Drizzle",
      "D1",
      "Three.js"
    ],
    "status": "Aplicação em desenvolvimento",
    "visual": "dopzero",
    "challenge": "Separar o progresso pessoal dos dados compartilhados na comunidade.",
    "built": "Usei TypeScript, React e Vinext na aplicação, com Drizzle e D1 no servidor. Implementei contas, perfil, guildas, mensagens e permissões por associação. O progresso e o diário têm armazenamento local separado por conta.",
    "decisions": [
      "Sessão validada no servidor antes de acessar dados da conta.",
      "Associação à guilda conferida nas operações da comunidade.",
      "Canvas carregado em separado, com adaptação para movimento reduzido."
    ],
    "scope": "Projeto em desenvolvimento. Perfil e comunidade usam o servidor; parte do progresso pessoal e do diário permanece local."
  },
  {
    "id": "audit",
    "title": "Auditoria HTTP",
    "kind": "Segurança / ferramenta CLI",
    "categories": [
      "ai"
    ],
    "summary": "Script Python de análise HTTP com saída Markdown e JSON.",
    "stack": [
      "Python",
      "HTTP",
      "TLS",
      "JSON"
    ],
    "status": "Ferramenta CLI de laboratório",
    "visual": "audit",
    "challenge": "Registrar o que foi encontrado na resposta sem inventar uma vulnerabilidade.",
    "built": "Fiz um scanner de uma URL com análise de cabeçalhos, cookies e formulário de senha. Ele limita leituras, controla redirecionamentos e gera relatórios Markdown e JSON. Os testes usam um servidor local.",
    "decisions": [
      "Certificado TLS validado.",
      "Conteúdo sensível e valores de cookies não entram no relatório.",
      "Referências CWE usadas para orientar a validação manual."
    ],
    "scope": "A ferramenta faz triagem HTTP. Não percorre o site inteiro nem confirma exploração."
  },
  {
    "id": "motion",
    "title": "Vídeos com código",
    "kind": "Código / apresentação",
    "categories": [
      "web"
    ],
    "summary": "Composições em JavaScript e TypeScript com HyperFrames e Remotion.",
    "stack": [
      "JavaScript",
      "TypeScript",
      "HyperFrames",
      "Remotion",
      "SVG"
    ],
    "status": "Composições e fluxos desenvolvidos",
    "visual": "motion",
    "challenge": "Conseguir alterar roteiro, tempo e elementos sem refazer o vídeo inteiro.",
    "built": "Montei composições HTML e React para demonstrações, legendas e vídeos explicativos. O código controla os elementos e o tempo. Narração, imagens e composição ficam em arquivos separados.",
    "decisions": [
      "Composição editável e renderização local.",
      "Narração sincronizada à timeline.",
      "Prévias para conferir os cortes antes do render final."
    ],
    "scope": "Os arquivos editáveis e as mídias ficam separados para permitir novas versões."
  }
];

export const modules = {
  "business": {
    "title": "Clientes, agenda, produtos e caixa.",
    "description": "O Business Desk reúne cadastro de clientes, agenda, catálogo, estoque, vendas e financeiro. As rotas validam a sessão e a organização antes de acessar os dados.",
    "tech": "JavaScript · Workers · D1 / SQL"
  },
  "agenda": {
    "title": "Clientes e agenda.",
    "description": "Cadastro de clientes, responsáveis, horários e status de atendimento. A agenda implementada valida conflitos de horário.",
    "tech": "Clientes · Agendamentos · Organização / unidade"
  },
  "stock": {
    "title": "Produtos e movimentos de estoque.",
    "description": "Cadastro de produtos, preço, visibilidade e entradas ou saídas do estoque. As alterações são validadas nas rotas do servidor.",
    "tech": "Produtos · Estoque · Catálogo"
  },
  "finance": {
    "title": "Vendas, descontos e caixa.",
    "description": "Registro de vendas, itens, descontos e valores. As operações ficam vinculadas aos produtos e à organização.",
    "tech": "Vendas · Descontos · Caixa"
  }
};

export const architectures = {
  "apuracao": {
    "nodes": [
      [
        "Navegador",
        "Mapa e resultados",
        "A interface consulta a API da própria aplicação e permite escolher Brasil, estado e município."
      ],
      [
        "Cloudflare",
        "API e fila global",
        "O Worker valida a consulta. Um Durable Object coordena trabalhos e compartilha solicitações duplicadas."
      ],
      [
        "AWS EC2",
        "Coletor Python",
        "Um processo na região São Paulo recebe os trabalhos, aplica limites e busca os arquivos oficiais. A comunicação do coletor é de saída."
      ],
      [
        "TSE",
        "Fonte oficial",
        "Os arquivos oficiais são validados por eleição, turno e abrangência. O último resultado válido é preservado quando a atualização falha."
      ]
    ]
  },
  "ounce": {
    "nodes": [
      [
        "Terminal",
        "Contexto do projeto",
        "O CLI reúne a conversa e o contexto do workspace, com orçamento para histórico e ferramentas."
      ],
      [
        "AWS EC2",
        "Inferência",
        "A inferência fica na AWS. O runtime Python envia a conversa, lê o stream de respostas e recebe chamadas de ferramentas pelo contrato de chat."
      ],
      [
        "Runtime Python",
        "Permissões e ferramentas",
        "O runtime valida a ferramenta solicitada, limita arquivos ao workspace e pede aprovação para gravações e comandos."
      ],
      [
        "Ferramentas locais",
        "Ação e evidência",
        "Leituras, comandos e diagnósticos devolvem resultados estruturados ao modelo e ao histórico."
      ]
    ]
  },
  "32enterprises": {
    "nodes": [
      [
        "Interface web",
        "Rotina do negócio",
        "Páginas e painéis responsivos apresentam cada módulo e o estado das operações."
      ],
      [
        "Workers / API",
        "Validação e autorização",
        "Rotas autenticadas validam dados, sessão e acesso à organização antes de executar operações."
      ],
      [
        "D1 / SQLite",
        "Persistência",
        "Registros de clientes, produtos e operações são mantidos no banco adequado ao ambiente hospedado ou local."
      ],
      [
        "Integrações",
        "Dados e serviços",
        "APIs externas e conectores têm escopos próprios. Integração implementada e serviço habilitado são estados tratados separadamente."
      ]
    ]
  }
};
