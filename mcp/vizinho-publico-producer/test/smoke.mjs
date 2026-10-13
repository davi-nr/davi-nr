import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const packageDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const tempRoot = await mkdtemp(path.join(os.tmpdir(), 'vizinho-mcp-test-'));
const transport = new StdioClientTransport({
  command: process.execPath,
  args: [path.join(packageDir, 'src/server.mjs')],
  env: { ...process.env, VIZINHO_PROJECTS_DIR: tempRoot, FISH_API_KEY: '' },
});
const client = new Client({ name: 'vizinho-smoke-test', version: '1.0.0' });
try {
  await client.connect(transport);
  const { tools } = await client.listTools();
  const expected = ['prepare_documentary', 'production_status', 'fish_audio_tts'];
  if (expected.some((name) => !tools.some((tool) => tool.name === name))) throw new Error('MCP tool listing is incomplete');
  const prepared = await client.callTool({ name: 'prepare_documentary', arguments: { topic: 'Direitos e transporte público' } });
  if (prepared.isError) throw new Error('Project preparation failed');
  const result = JSON.parse(prepared.content[0].text);
  const brief = await readFile(result.brief_path, 'utf8');
  if (!brief.includes('HyperFrames') || !brief.includes('Direitos e transporte público')) throw new Error('Generated brief is missing production instructions');
  const status = await client.callTool({ name: 'production_status', arguments: {} });
  if (!status.content[0].text.includes('"fish_api_key_configured": false')) throw new Error('Key status check failed');
  const tts = await client.callTool({ name: 'fish_audio_tts', arguments: { text: 'Teste de fala' } });
  if (!tts.isError || !tts.content[0].text.includes('FISH_API_KEY')) throw new Error('Missing-key guard failed');
  console.log('MCP smoke test passed: handshake, 3 tools, project scaffold, secret status, missing-key guard.');
} finally {
  await client.close();
  await rm(tempRoot, { recursive: true, force: true });
}
