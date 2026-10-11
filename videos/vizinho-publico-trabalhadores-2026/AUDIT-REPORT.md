# Relatório de auditoria — Vizinho Público: trabalho

Data de corte editorial: 11/10/2026. Projeto composto e renderizado com HyperFrames 0.8.147, em 1080 × 1920, 30 fps, por captura fiel de screenshots no navegador em modo software. O MP4 entregue é `deliverables/vizinho-publico-trabalhadores-2026-final.mp4`.

## Exportação e integridade

- Vídeo: H.264, 1080 × 1920, 30 fps, 5.153 quadros; duração do fluxo de vídeo 171.766667 s.
- Áudio: AAC LC, estéreo, 48 kHz; duração do fluxo e do contêiner 171.766 s.
- Tamanho: 36.232.844 bytes. SHA-256: `44a3ad43c9d8f49f5367cdb7dbda174f26c16b02bc0f54c4da943078c84c34f1`.
- O MP4 foi renderizado com a master WAV já normalizada. O MP4 pré-normalização e a versão normalizada anterior à correção de legendas foram preservados em `deliverables/intermediate/`.
- FFmpeg decodificou integralmente o MP4 sem erros; os 5.153 quadros de vídeo foram lidos. O contêiner foi finalizado com `moov` no início (faststart).

## Áudio e narração

A composição usa `assets/audio/final-mix-normalized.wav`, uma master PCM estéreo/48 kHz normalizada em dois passes com FFmpeg loudnorm, alvo −16 LUFS/LRA 7/TP −1 dBTP. A medição EBU R128 do MP4 final registrou −16.0 LUFS integrados, LRA 2.6 LU e true peak −1.0 dBFS/dBTP. A mixagem de origem anterior à normalização foi medida em −20.87 LUFS, LRA 2.60 LU e −3.94 dBTP. O script reprodutível `scripts/normalize_master.py`, chamado por `scripts/build_mix.sh`, recalcula os valores do primeiro passe e gera a master normalizada; os arquivos de narração e a trilha original permanecem separados e preservados.

As onze faixas individuais foram validadas por decodificação e concatenadas em narração e mix final. A narração foi solicitada ao Fish Audio com alias `s2.1-pro-free`, voz de referência `ceaf7f569bef42c7bd322d88e3a356b7`, temperature 0.85, top_p 0.85 e speed 1.0. A API aceitou as requisições; a resposta não fornece atestação independente sobre o backend que executou o modelo.

Whisper.cpp em português foi usado para conferir transcrição e alinhamento. As cenas 03, 04 e 05 receberam uma segunda checagem com Whisper medium após a revisão de dicção; o medium corroborou PEC 221, quarenta horas, vigência e a nova formulação da cena 05. Essa é uma validação automática por ASR; não se afirma que uma pessoa tenha ouvido cada palavra. A transcrição automática da cauda silenciosa gerou um marcador espúrio, excluído das legendas.

O SRT final contém 100 cues; validação programática confirmou timestamps estritamente crescentes, duração mínima de 0.41 s, ausência de sobreposição e no máximo duas linhas por cue. O primeiro período de direitos da cena 6 foi alinhado por uma segunda passagem do Whisper medium porque o small retornou tempos duplicados; “cinco mil reais” foi mantido em um cue legível. As legendas foram revisadas contra o roteiro e os timestamps automáticos, sem alegar validação auditiva humana.

## Revisão visual do MP4 exportado

Foram extraídos quadros do MP4 final nas onze cenas, reunidos em `snapshots/final-export/contact-sheet.jpg`: 3.2, 10.0, 32.2, 52.2, 60.2, 77.5, 98.2, 117.5, 144.75, 157.0 e 170.4 s. A revisão adicional da composição exportada conferiu pontos de transição e correções críticas em 14.1, 37.0, 62.1, 79.512, 100.212 e 117.512 s. Os tempos corrigidos da legenda da cena 6 também foram revistos em `snapshots/scene06-captionfix/contact-sheet.jpg` antes do novo render. A cena de encerramento mantém a chamada “Siga @vizinhopublico”. A capa separada foi capturada a partir de `cover/index.html`, tem 1080 × 1920 e foi conferida com fontes e retratos carregados.

A cena de abertura traz duas ilustrações 2D identificadas na própria arte como geradas por IA; não simula fala ou ação dos candidatos. Foi preparada também uma composição de abertura documental com fotografias licenciadas, identificação e créditos, em `compositions/alternatives/opening-documentary.html`; ela é uma alternativa editável e não foi renderizada como vídeo nesta entrega. A atribuição das fotos de referência e os créditos que devem acompanhar uma publicação constam em `ASSET-ATTRIBUTIONS.md` e `CAPTION-INSTAGRAM.md`.

## Verificações HyperFrames

Resultado do último check integrado após a correção das legendas:

- Lint: 0 erros; 1 aviso organizacional (`timeline_track_too_dense`, quatro elementos temporizados na composição final).
- Runtime: 0 erros; 1 aviso de console `GSAP target null not found` associado à timeline raiz. A origem do aviso não foi conclusivamente localizada; o check não registrou erro de runtime, e os quadros do MP4 foram inspecionados.
- Layout: 0 erros e 0 avisos; 9 observações informativas. Incluem envelopes de glows que ultrapassam intencionalmente as bordas e caixas tipográficas que não representam exatamente os limites visuais dos glifos. Uma observação de sobreposição textual no cartão de carteira de trabalho foi conferida no quadro exportado de 159.71 s: o título aparece em duas linhas e permanece legível.
- Contraste: 121 verificações, 121 aprovadas, 0 avisos.
- Motion: a verificação automática estava desativada (`enabled=false`, 0 amostras); portanto ela não foi considerada aprovada. A revisão temporal foi feita visualmente em timestamps e transições selecionados no MP4 final, sem alegar análise automatizada de movimento quadro a quadro.

## Limites de publicação

As verificações acima são técnicas e editoriais; não constituem parecer jurídico. A nota `TSE-IA-NOTE.md` registra a regulamentação consultada e sua aplicação contextual deve ser revista antes de qualquer publicação. Conferir novamente decisões eleitorais posteriores e as regras vigentes do Instagram/Meta na data efetiva de publicação. Fontes, documentos e ressalvas factuais estão discriminados em `FACTS.md`.
