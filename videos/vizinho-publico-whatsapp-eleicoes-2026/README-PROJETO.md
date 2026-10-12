# Vizinho Público — WhatsApp, eleições e liberdade de expressão

Documentário editorial para Reels. Fonte editável HyperFrames 0.8.147, HTML/GSAP, 1080×1920 a 30 fps. Corte factual: 12/10/2026. O episódio anterior permanece intacto; a identidade visual aqui segue a paleta, tipografia e composição editorial recuperáveis do projeto Vizinho Público disponível no ambiente. O vídeo anterior sobre pesquisas não estava disponível para comparação direta.

## Arquivos

- `exports/vizinho-whatsapp-eleicoes-final.mp4` — exportação final.
- `exports/capa-instagram.jpg` — capa vertical final (1080×1920), renderizada de `compositions/cover.html`.
- `assets/audio/scenes/` — takes Fish Audio individuais; `assets/audio/original-takes/` preserva o take original substituído da abertura.
- `assets/audio/narration-consolidated.wav`, `assets/audio/music-original.wav` e `assets/audio/final-mix.wav` — voz, trilha original e master mixada.
- `assets/audio/captions-final.srt` — legendas finais; `assets/audio/asr-transcript.srt` é a transcrição automática sem correções editoriais.
- `compositions/frames/` e `index.html` — fonte editável.
- `FACTS.md`, `LEGAL-NOTE.md`, `SCRIPT.md`, `STORYBOARD.md`, `CAPTION.md`, `ASSET-ATTRIBUTIONS.md` — apuração, roteiro, direção, publicação e créditos.
- `AUDIT-REPORT.md` — validação factual, jurídica, sonora, visual e técnica da exportação.

## Reproduzir e editar

Requisitos: Node.js 20+, npm, Python 3, FFmpeg e HyperFrames 0.8.147. Para uma nova geração de voz, use Fish Audio configurado fora do projeto; nunca grave credenciais neste repositório.

```bash
python3 scripts/build_audio.py
python3 scripts/build_captions.py
python3 scripts/build_project.py
npm_config_cache=/workspace/.npm-cache npm run check
npm_config_cache=/workspace/.npm-cache npx --yes hyperframes@0.8.147 render . \
  --output exports/vizinho-whatsapp-eleicoes-final.mp4 --format mp4 \
  --fps 30 --resolution portrait --workers 2 --quality delivery \
  --experimental-fast-capture=false
```

Para regenerar apenas a fala de uma cena, `python3 scripts/generate_voice.py N` (N de 1 a 12) lê a configuração Fish Audio já instalada no ambiente e atualiza a locução correspondente. `scripts/build_audio.py` preserva os takes originais, monta a voz com respiros, aplica ducking e normalização; o arquivo original da trilha permanece intocado.

## Limite documental

Os textos integrais das decisões reportadas em 11/10 e do andamento reportado em 12/10 não foram recuperados nesta consulta. O roteiro atribui esses detalhes à Agência Brasil e ao G1 e não antecipa o mérito. Revalidar o processo e a legislação antes da publicação. Nenhuma publicação no Instagram foi feita.
