# Vizinho Público Producer MCP

Servidor MCP local para preparar projetos de documentário e gerar narrações pelo Fish Audio. Ele oferece ferramentas ao Codex; **não converte o agente HyperFrames em MCP nem substitui o plugin HyperFrames**. Para produzir um vídeo, instale também o plugin HyperFrames no Codex e deixe o próprio agente liderar a produção.

## Requisitos

- Node.js 20 ou superior.
- Codex com suporte a servidores MCP locais por stdio.
- Plugin HyperFrames instalado no Codex para dirigir pesquisa, composição e renderização.
- Chave Fish Audio configurada como variável de ambiente `FISH_API_KEY`. Não passe a chave em conversa ou como argumento de ferramenta.

## Instalação

Clone este repositório e instale as dependências:

```bash
git clone https://github.com/davi-nr/davi-nr.git
cd davi-nr/mcp/vizinho-publico-producer
npm ci
```

Se a conta disponibilizar o plugin HyperFrames para Codex, instale-o pelo gerenciador de plugins e recarregue a sessão. Para uma instalação standalone das skills, use o comando oficial abaixo:

```bash
npx hyperframes skills update
```

Cadastre o MCP no Codex (troque os caminhos pelo diretório absoluto do checkout):

```bash
codex mcp add vizinho_publico \
  --env VIZINHO_PROJECTS_DIR=/CAMINHO/ABSOLUTO/onde/guardar/projetos \
  -- node /CAMINHO/ABSOLUTO/davi-nr/mcp/vizinho-publico-producer/src/server.mjs
```

O processo do Codex precisa receber `FISH_API_KEY` por um gerenciador de segredos ou pelo ambiente seguro da máquina antes de iniciar. O MCP nunca solicita, exibe ou grava a chave. Evite colocar o valor em `--env`, no `config.toml`, em arquivos do repositório ou na conversa. Depois de configurar o ambiente seguro, reinicie o Codex para o processo MCP herdar a variável.

As skills HyperFrames oficiais funcionam em Codex e outros agentes de programação, conforme a documentação upstream em [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes). O MCP não instala essas skills automaticamente e não transforma o agente em uma ferramenta remota; ele prepara o projeto e oferece TTS. O próprio Codex deve usar `/hyperframes` para dirigir a produção.

## Uso

Depois da instalação, basta pedir ao Codex: “Faça um documentário sobre [tema]”. Ele chama `prepare_documentary` com o tema e o limite desejado; a chave já estará disponível ao servidor pelo ambiente seguro. O servidor expõe:

- `prepare_documentary`: cria uma pasta nova, briefing, defaults do Vizinho Público e instruções para o Codex acionar HyperFrames.
- `production_status`: informa se a chave está disponível e os parâmetros de voz, sem revelar segredos.
- `fish_audio_tts`: gera narração em `s2.1-pro-free` usando a referência aprovada do projeto, quando a chave estiver configurada.

Após preparar a pasta, o Codex deve ler `BRIEF.md`, invocar a skill `/hyperframes`, delegar a produção ao agente e seguir eventuais pontos de aprovação solicitados pelo usuário. O servidor não finge que fez a delegação.

Defaults de voz: referência `ceaf7f569bef42c7bd322d88e3a356b7`, temperature `0.85`, top_p `0.85`, speed `1.0`. Podem ser ajustados com `FISH_MODEL_ID`, `FISH_REFERENCE_ID`, `FISH_TEMPERATURE`, `FISH_TOP_P` e `FISH_SPEED` no ambiente do servidor.

## Validação

```bash
npm test
```
