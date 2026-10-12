# Relatório de auditoria — Vizinho Público

## Escopo e método

Esta auditoria cobre a composição HyperFrames 0.8.147, a narração Fish e a exportação final deste episódio. Os arquivos dos episódios anteriores não foram editados. A checagem final incluiu ffprobe, decodificação integral, loudness, quadros representativos das doze cenas e SHA-256.

## Verificação factual e jurídica

- A decisão inicial de 10/10 foi consultada em PDF oficial do TSE e arquivada com texto extraído. O roteiro separa conteúdo da inicial, alegações e o comando do despacho.
- Os atos posteriores de 11/10 e o andamento de 12/10 são narrados com atribuição explícita à Agência Brasil e ao G1; os documentos integrais não foram recuperados nesta consulta. Não se reproduzem fac-símiles nem citações que dependam desses documentos ausentes.
- O filme registra o andamento até 12/10/2026 e não afirma decisão final de mérito. A regra do art. 38 da Resolução TSE 23.610 é apresentada como contexto geral, sem concluir que ela, sozinha, resolve a legalidade de suspensão de um canal.
- A diferença entre 1.925.360 na inicial (reportada pelo TSE) e 3,3 milhões em notícia da Agência Brasil é indicada como diferença de datas/fontes; a locução usa apenas “milhões”. Ver `FACTS.md` e `LEGAL-NOTE.md`.

## Áudio

Doze takes Fish Audio foram solicitados com `s2.1-pro-free`, voz de referência configurada, temperature/top-p 0,85 e speed 1,0; `normalize:false` foi informado na chamada. A resposta reporta o identificador solicitado; não há atestação independente do modelo de inferência subjacente. A mix mantém os MP3 individuais e a trilha original, aplica ducking e masterização a partir do WAV consolidado. A mixagem final foi medida em aproximadamente −16 LUFS integrados, LRA 2,6 LU e true peak −1,0 dBFS.

A transcrição automática final foi feita com Whisper small em português, sem prompt, mais uma checagem independente em pontos críticos. A frase inicial ambígua em duas transcrições foi regravada com formulação clara; a versão anterior foi preservada em `assets/audio/original-takes/`. A checagem medium confirmou a formulação legal da cena 9. Grafias como Janones, Villas Bôas e Kassio foram corrigidas nas legendas com base na grafia documentada; erro ortográfico de ASR não foi tratado como evidência de pronúncia incorreta. Não foi feita audição humana; portanto, o relatório não certifica revisão auditiva humana.

## Legendas e imagem

`npm run check` passou: lint 0 erros/avisos, runtime 0 erros/avisos, layout 0 issues em 9 amostras, motion 0 findings, contraste 53/53 em WCAG AA. O verificador reporta snapshots automáticos desativados; a revisão visual foi feita com snapshots HyperFrames dos 12 trechos representativos e do endcard. As legendas em `assets/audio/captions-final.srt` foram comparadas ao roteiro, corrigidas em grafia e termos, e validadas sem sobreposição; a menor duração é 1,0 s e o máximo é 2 linhas no layout renderizado. A revisão de quadros corrigiu a nota da cena 11 para dentro do cartão correspondente.

## Exportação final

- Caminho: `exports/vizinho-whatsapp-eleicoes-final.mp4`
- H.264, 1080×1920, 30 fps, 4.476 quadros; AAC, 48 kHz, estéreo.
- Duração do contêiner: 149,20 s; render reportou 149,176 s de programa (diferença de arredondamento no último quadro/contêiner).
- Tamanho: 32.865.843 bytes. SHA-256: `253f491096a90fa5fdbfa3c337ecb549e99af2f5f487a25c9e709764d68378f0`.
- Decodificação integral por FFmpeg concluída sem erros; loudness EBU R128: −16,0 LUFS, LRA 2,6 LU, true peak −1,0 dBFS.
- Capa estática 1080×1920 renderizada da composição editável `compositions/cover.html`: `exports/capa-instagram.jpg` (PNG fonte em `exports/cover-frames/frame_000001.png`).
- Captura: HyperFrames faithful screenshot (`--experimental-fast-capture=false`), dois workers, 30 fps, preset delivery.
- Motion check do CLI não substitui uma certificação de movimento por especialista; o relatório distingue verificações automáticas de revisão visual.

As 12 amostras extraídas do MP4 final estão em `snapshots/exported-mp4/`; a folha de contato registra uma amostra representativa por cena, revisada visualmente quanto a cortes, hierarquia e banda de legenda. O verificador HyperFrames informou zero findings de motion, mas sua amostragem automatizada de motion estava desativada; não se interpreta esse resultado como certificação automática do movimento.

Nenhuma publicação no Instagram foi feita.
