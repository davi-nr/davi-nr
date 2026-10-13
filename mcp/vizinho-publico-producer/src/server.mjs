#!/usr/bin/env node
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

const here = path.dirname(fileURLToPath(import.meta.url));
const defaultRoot = path.resolve(here, '..', 'workspace');
const projectRoot = path.resolve(process.env.VIZINHO_PROJECTS_DIR || defaultRoot);
const model = process.env.FISH_MODEL_ID || 's2.1-pro-free';
const voiceReference = process.env.FISH_REFERENCE_ID || 'ceaf7f569bef42c7bd322d88e3a356b7';
const temperature = Number(process.env.FISH_TEMPERATURE ?? 0.85);
const topP = Number(process.env.FISH_TOP_P ?? 0.85);
const speed = Number(process.env.FISH_SPEED ?? 1.0);

const server = new McpServer({ name: 'vizinho-publico-producer', version: '1.0.0' });
const text = (value) => ({ content: [{ type: 'text', text: value }] });

function slugify(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 64) || 'documentario';
}

function withinRoot(root, relativePath) {
  if (path.isAbsolute(relativePath)) throw new Error('Use um caminho relativo dentro da pasta configurada do projeto.');
  const resolved = path.resolve(root, relativePath);
  if (resolved !== root && !resolved.startsWith(root + path.sep)) throw new Error('O caminho precisa permanecer dentro da pasta configurada.');
  return resolved;
}

function makeBrief({ topic, duration, cutDate, notes }) {
  return `# Produção Vizinho Público — ${topic}\n\n` +
`## Briefing\n\n` +
`- Marca: Vizinho Público (@vizinhopublico)\n- Tema: ${topic}\n- Data de corte solicitada: ${cutDate || 'confirmar a data atual e registrar no FACTS.md'}\n` +
`- Duração máxima: ${duration} segundos, incluindo abertura e encerramento\n- Formato: Instagram Reels, vertical 1080 × 1920, 9:16\n- Idioma: português brasileiro\n` +
`- Estilo: documentário jornalístico, motion design editorial 2D, tipografia cinética, dados e documentos verificáveis\n` +
`- Narração: Fish Audio S2.1 Pro Free; voz de referência Mulher do Criativo top (${voiceReference}); temperature ${temperature}, top_p ${topP}, speed ${speed}\n\n` +
`## Direção de produção\n\n` +
`1. Acione o agente/subagente HyperFrames instalado neste Codex e deixe-o liderar pesquisa, roteiro, storyboard, arte, áudio, animação, composição, renderização e auditoria. Leia primeiro a skill /hyperframes e siga as instruções do plugin instalado. MCP não substitui o agente.\n` +
`2. Preserve projetos anteriores e crie todos os arquivos desta produção nesta pasta. Reutilize a identidade visual Vizinho Público disponível no repositório do usuário, se encontrada.\n` +
`3. Pesquise fontes primárias e confiáveis. Separe fatos, interpretações e incertezas; registre cada afirmação e a fonte em FACTS.md. Não invente números, citações, fotografias, manchetes ou documentos.\n` +
`4. Prepare narration_text separado de display_text. Escreva números, siglas e unidades de forma pronunciável antes de chamar o Fish Audio. Nunca inclua chaves de API em arquivos, logs ou texto do projeto.\n` +
`5. Se o usuário ou o briefing exigir aprovação de uma prévia, pare após a prévia e aguarde aprovação antes do vídeo completo. Caso contrário, conclua o produto e audite o MP4 exportado.\n` +
`6. Inclua música original/licenciada desde a renderização final, ducking, legendas legíveis, capa, créditos de assets, relatório de auditoria e fontes. Confirme duração, dimensões, decodificação e níveis de áudio.\n` +
`7. Não publique em redes sociais sem autorização explícita.\n\n` +
`## Orientações adicionais\n\n${notes?.trim() || 'Sem orientações adicionais.'}\n`;
}

server.registerTool('prepare_documentary', {
  title: 'Preparar projeto Vizinho Público',
  description: 'Cria uma pasta nova e um briefing editorial para um documentário. Em seguida, o Codex deve delegar a produção ao plugin/agente HyperFrames instalado.',
  inputSchema: {
    topic: z.string().min(3).max(300).describe('Tema do documentário.'),
    duration_seconds: z.number().int().min(30).max(600).default(180).describe('Duração máxima em segundos.'),
    cut_date: z.string().max(80).optional().describe('Data de corte factual, se definida.'),
    notes: z.string().max(5000).optional().describe('Preferências editoriais opcionais.'),
  },
}, async ({ topic, duration_seconds = 180, cut_date, notes }) => {
  await mkdir(projectRoot, { recursive: true });
  const date = new Date().toISOString().slice(0, 10);
  const stem = `${date}-${slugify(topic)}`;
  let directory = path.join(projectRoot, stem);
  let suffix = 2;
  while (true) {
    try { await mkdir(directory); break; }
    catch (error) {
      if (error.code !== 'EEXIST') throw error;
      directory = path.join(projectRoot, `${stem}-${suffix++}`);
    }
  }
  const brief = makeBrief({ topic: topic.trim(), duration: duration_seconds, cutDate: cut_date, notes });
  await writeFile(path.join(directory, 'BRIEF.md'), brief, { mode: 0o600 });
  await writeFile(path.join(directory, 'README.md'), `# ${topic.trim()}\n\nProjeto iniciado pelo MCP Vizinho Público. Briefing completo em [BRIEF.md](./BRIEF.md).\n\nPasta: \`${directory}\`.\n`, { mode: 0o600 });
  return text(JSON.stringify({
    success: true,
    project_directory: directory,
    brief_path: path.join(directory, 'BRIEF.md'),
    next_action: 'Leia BRIEF.md, invoque a skill /hyperframes e delegue a produção audiovisual completa ao agente HyperFrames. O MCP preparou o projeto, mas não afirma que o agente foi acionado.',
  }, null, 2));
});

server.registerTool('production_status', {
  title: 'Verificar configuração de produção',
  description: 'Mostra se Fish Audio está configurado e quais padrões de voz estão ativos. Nunca revela a chave.',
  inputSchema: {},
}, async () => text(JSON.stringify({
  fish_api_key_configured: Boolean(process.env.FISH_API_KEY),
  model,
  voice_reference_id: voiceReference,
  temperature,
  top_p: topP,
  speed,
  projects_directory: projectRoot,
  hyperframes: 'O Codex cliente deve instalar e acionar seu plugin/agente HyperFrames separadamente.',
}, null, 2)));

server.registerTool('fish_audio_tts', {
  title: 'Gerar narração Fish Audio',
  description: 'Gera fala no Fish Audio. A chave é lida somente de FISH_API_KEY no ambiente do processo; nunca a passe como argumento da ferramenta.',
  inputSchema: {
    text: z.string().min(1).max(10000).describe('Texto preparado para narração, com números e siglas normalizados.'),
    output_path: z.string().max(300).optional().describe('Caminho relativo ao diretório de projetos, por exemplo projeto/audio/cena-01.mp3.'),
    format: z.enum(['mp3', 'wav', 'pcm', 'opus']).default('mp3'),
    temperature: z.number().min(0).max(1).optional(),
    top_p: z.number().min(0).max(1).optional(),
    speed: z.number().min(0.5).max(2).optional(),
  },
}, async ({ text: speech, output_path, format = 'mp3', temperature: temp = temperature, top_p: nucleus = topP, speed: rate = speed }) => {
  const apiKey = process.env.FISH_API_KEY;
  if (!apiKey) return { ...text('FISH_API_KEY não está configurada no ambiente do MCP. Configure-a no gerenciador de segredos/ambiente do Codex e reinicie o servidor.'), isError: true };
  const out = withinRoot(projectRoot, output_path || `audio/fish-${Date.now()}.${format}`);
  const response = await fetch('https://api.fish.audio/v1/tts', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json', model },
    body: JSON.stringify({ text: speech, reference_id: voiceReference, temperature: temp, top_p: nucleus, prosody: { speed: rate, volume: 0, normalize_loudness: true }, format }),
  });
  if (!response.ok) {
    const detail = (await response.text()).slice(0, 300).split(apiKey).join('[redacted]');
    return { ...text(`Fish Audio retornou HTTP ${response.status}: ${detail}`), isError: true };
  }
  const bytes = Buffer.from(await response.arrayBuffer());
  await mkdir(path.dirname(out), { recursive: true });
  await writeFile(out, bytes, { mode: 0o600 });
  return text(JSON.stringify({ success: true, output_path: out, bytes: bytes.length, model, voice_reference_id: voiceReference, temperature: temp, top_p: nucleus, speed: rate }, null, 2));
});

const transport = new StdioServerTransport();
await server.connect(transport);
