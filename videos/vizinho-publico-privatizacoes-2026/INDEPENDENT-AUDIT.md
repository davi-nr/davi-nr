# Verificação independente — Codex

Arquivo avaliado: versão final de distribuição, SHA-256 722a10a412650dba8ca6295f34b8855ad044e70e75de42ca6bd44e83194ba2f8.

- ffprobe: H.264 High nível 4.1, 1080 × 1920, 30 fps, 5.082 quadros; AAC estéreo 48 kHz; 169,400 segundos; 46.650.271 bytes.
- Decodificação integral de vídeo e áudio concluída sem erro. Inspeção visual de 46 quadros distribuídos por todas as cenas, abertura, transições e último quadro; CTA mantido até o encerramento.
- EBU R128 independente: −16,0 LUFS integrado, LRA 2,6 LU, true peak −1,0 dBFS (precisão exibida pelo filtro).
- Bitstream AAC da master e da distribuição idêntico: SHA-256 ee4bf9db5797738e51d8a67f612e808bf9034b445869b24b3a46a88bcdc6116d.
- Detector de imobilidade, limiar −50 dB e duração mínima 2 s: pausas de leitura entre 2 e 3,23 s em cartões e sustentação final do CTA. HyperFrames conferiu os holds e documentou a animação fotográfica ativa. O teste estatístico não equivale a inspeção humana de todos os quadros.
- Oito textos de locução e tamanhos dos MP3 conferidos contra voice-manifest.json; Whisper small no conjunto final e medium independente nas cenas 4, 6 e 7. Sem capacidade de escuta humana direta neste ambiente; não se certifica pronúncia por escuta humana.
- Legenda pronta: 1.663 caracteres e cinco hashtags.
- Preservação: 734 arquivos dos episódios anteriores mantidos com SHA-256 inalterado.
- Cinco arquivos WAV do pacote preservados em FLAC sem perda; restauração testada e PCM idêntico, validado em AUDIO-LOSSLESS-MANIFEST.json.

Fontes, direitos e limites editoriais: FACTS.md, ASSET-ATTRIBUTIONS.md, ASSET-PHOTO-RESEARCH.md e AUDIT-REPORT.md. Os registros de mídia independentes e quadros de contato estão no pacote editável, em verification/.
