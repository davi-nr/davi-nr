# Relatório de auditoria — Por que pagamos impostos?

## Arquivo de distribuição

- `deliverables/vizinho-impostos-final.mp4`
- SHA-256: `5ce2403d1cc89ee734de0fc489f361a3b0dbb69adf6413fcf2b086438315e9c3`
- 1080 × 1920, H.264 High@4.1, yuv420p, 30 fps, 5.381 quadros, 179,366667 s.
- AAC-LC, 48 kHz, estéreo. `moov` precede `mdat` (faststart).
- Tamanho: 24.611.902 bytes. Decodificação integral de áudio e vídeo com FFmpeg concluída sem erro.

## Render e preservação

A composição integral foi renderizada pelo HyperFrames 0.8.147 com captura screenshot fiel, `--low-memory-mode`, um worker e `--experimental-fast-capture=false`; o CLI informou software GPU. O vídeo master preservado é `deliverables/vizinho-impostos-master-hyperframes.mp4` (SHA-256 `ca6bcbc2821531e7fffedd31cabccec2b3ea71883dae30789914c94ae10fd1d0`). A distribuição foi derivada desse master: vídeo recodificado para H.264 High@4.1 e áudio normalizado em dois passes, sem alterar a duração ou o conteúdo temporal. Comando reproduzível: `scripts/export_distribution.sh`.

A abertura conversacional ocupa 22,0 s de imagem. A narração nos nove segmentos termina em 19,704 s; o restante da abertura é pausa visual com música. O corpo começa em 22,0 s. A duração visual da abertura não deve ser confundida com o tempo de fala.

## Áudio e fala

Medição EBU R128 no MP4 de distribuição: −16,0 LUFS integrados, LRA 3,2 LU, true peak −1,4 dBTP. A música permanece até a conclusão com ducking sob a narração e fade final. Os takes e a narração consolidada sem música estão separados em `assets/audio/` e `deliverables/narration-full-aligned.wav`.

Whisper.cpp medium q5_0, idioma português e sem prompt, foi usado como verificação automatizada de trechos, incluindo abertura e cenas 3, 6 e 8; transcrições disponíveis em `verification/asr/`. A cena 6 reconheceu “32,20% do produto interno bruto”. A verificação por ASR não certifica entonação ou pronúncia por escuta humana. Não havia ferramenta de escuta humana direta disponível durante esta auditoria.

## Verificação visual

O MP4 exportado foi amostrado em 18 tempos: 0,5; 7,5; 9,5; 19,5; 21,8; 24; 34; 48; 64; 78; 95; 111; 126; 144; 162; 170; 177 e 179 s. As amostras e a prancha estão em `deliverables/audit-frames/`. A abertura mostra os quatro momentos cotidianos ilustrados, os pictogramas conectores, “IMPOSTOS!” e a pergunta completa; o CTA está visível nos quadros finais.

O check HyperFrames persistido em `verification/hyperframes-check.json` reporta lint 0 erros/0 avisos, runtime 0/0, layout 0/0 e contraste 42/42 aprovados. **A amostragem automática de movimento não estava habilitada** (`motion.enabled=false`, `samples=0`); esses números não são apresentados como aprovação automática do movimento. Os quadros reais do MP4 foram inspecionados visualmente, e a prancha permite revisão independente.

## Escopo e limitações

Os dados de orçamento são apresentados como pagamentos primários federais de 2025, incluindo restos a pagar pagos, conforme a planilha indicada em `FACTS.md`; não representam todo o gasto público nem um único denominador para todas as funções. A taxa de 32,20% refere-se à carga tributária bruta consolidada como proporção do PIB em 2024, não à parcela paga por uma família. A análise distingue imposto de tributo, taxa e contribuição e registra o período de transição de IBS/CBS.

Nenhum achado automático de contraste ou layout ficou pendente no check. A conferência visual por amostragem não equivale à inspeção humana de cada quadro; o MP4 permanece disponível para revisão integral.
