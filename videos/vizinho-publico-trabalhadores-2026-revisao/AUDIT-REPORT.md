# Relatório de auditoria — revisão do documentário sobre trabalho

Data de corte editorial: 11/10/2026. Projeto produzido com HyperFrames 0.8.147. A exportação final usa captura fiel de screenshots no navegador, software GPU e duas workers; a captura acelerada foi desativada. O arquivo auditado é `deliverables/vizinho-publico-trabalhadores-2026-revisado.mp4`.

## Exportação e integridade

- Vídeo H.264, 1080 × 1920, 30 fps, 6.292 quadros; duração do fluxo: 209,733 s.
- Áudio AAC estéreo, 48 kHz; duração do fluxo e do contêiner: 209,735 s.
- Tamanho: 32.089.760 bytes. SHA-256: `5f972ac97064fad7d3465a23b9395193cf86b94009796a962e5efd9fc88a90ff`.
- O FFmpeg decodificou integralmente o MP4 sem erros. A master de áudio foi atualizada depois da primeira exportação: o vídeo foi remuxado com cópia do fluxo de vídeo, sem reencodificar os 6.292 quadros. Versões anteriores permanecem preservadas em `deliverables/intermediate/`.
- A folha `snapshots/final-mp4/contact-sheet-final-mp4.jpg` foi extraída do MP4 final em 23 pontos, de 3,2 s a 206,7 s. A revisão visual conferiu abertura, propostas e seu status, direitos e repouso, doença, remuneração, flexibilidade, negociação, adaptação e encerramento. A revisão independente também conferiu quadros em 3,2, 89, 99, 148, 185 e 208 s. A chamada final “Siga @vizinhopublico” aparece no vídeo exportado.
- O quadro final e os quadros de música em 176, 185, 202 e 206 s foram verificados. A trilha estendida permanece audível ao longo do encerramento e termina em fade; não há trecho final silencioso causado pelo fim prematuro da música.

## Narração, música e legendas

As onze faixas individuais estão em `assets/audio/scenes/`; a narração consolidada, a master mixada, a trilha e os takes anteriores permanecem separadas e preservadas. O Fish Audio recebeu o alias solicitado `s2.1-pro-free`, referência `ceaf7f569bef42c7bd322d88e3a356b7`, temperatura 0,85, top-p 0,85 e velocidade 1,0. A API aceitou as requisições, mas não fornece atestação independente do backend que executou o modelo.

Whisper.cpp em português foi usado para conferir os takes. Uma segunda checagem independente com Whisper medium, sem texto-guia, corroborou as cenas 03 e 08 após a síntese com `normalize:false`: “quarenta e quatro horas por semana” e “quarenta horas por semana”, além da distinção entre aumento de 10% no custo por hora e aumento do custo total. Os registros estão em `assets/audio/asr-rechecks/`. Essa é validação automática por ASR; não se afirma audição humana das faixas.

A master `assets/audio/final-mix-normalized.wav` foi normalizada em dois passos com FFmpeg loudnorm. A medição EBU R128 do MP4 final registra −16,0 LUFS integrados, LRA 2,4 LU e true peak −1,0 dBFS. O arquivo `assets/audio/music-extended.wav` prolonga a música documental original por extensão com crossfade e fade-out, sem alterar o original. O script `scripts/extend_music.py` e `scripts/build_mix.sh` documentam a reprodução do processo. As medições finais estão em `deliverables/ebu-r128-final.log`.

`assets/audio/captions.srt` contém 116 cues. A validação programática confirmou início anterior ao fim, ordem crescente, nenhum cue sobreposto, nenhuma marca inicial repetida, duração mínima de 0,545 s e no máximo duas linhas por cue. A última legenda termina em 206,735 s, antes do fim do programa, mantendo tempo de leitura no encerramento.

## Fatos, edição e enquadramento

`FACTS.md` e `LEGAL-VERIFICATION.md` distinguem texto legislativo, status de tramitação, direito vigente e inferências de impacto. A PEC 221/2019 e a PEC 12/2026 são apresentadas como propostas em debate, não como regras já vigentes. A comparação de custos deixa explícito que a elevação de 10% se refere ao valor por hora sob as hipóteses indicadas, não ao custo total. A parte sobre repouso remunerado não presume um cálculo universal onde o texto consultado não o especifica; os limites sobre afastamento por doença referem-se ao empregado e aos primeiros quinze dias consecutivos, nos termos legais documentados.

As artes sintéticas de Lula e Flávio Bolsonaro estão identificadas visualmente como ilustrações geradas por IA. Não há lip sync ou fala atribuída aos candidatos. Foi preparada uma composição alternativa de abertura com fotografias documentais e créditos em `compositions/alternatives/`; ela é um arquivo editável, não uma segunda exportação completa. `CAPTION-INSTAGRAM.md` contém descrição acessível e créditos/fontes a acompanhar uma publicação. Esta entrega não foi publicada no Instagram; regras eleitorais e da plataforma devem ser revistas na data de publicação.

## Checks do HyperFrames

O check integrado final está em `deliverables/check-final.json` e `deliverables/check-final.log` (HyperFrames 0.8.147):

- Lint: 0 erros e 1 aviso organizacional (`timeline_track_too_dense`, quatro elementos temporizados na composição final).
- Runtime: 0 erros e 0 avisos.
- Layout: 0 erros, 0 avisos e 4 observações informativas de overflow, limitadas a até 7 px nos limites de canvases transformados e até 4 px na palavra “HORAS”. Os quadros correspondentes foram inspecionados no MP4 exportado; nenhum texto narrativo ou dado essencial aparece cortado.
- Contraste: 96 verificações, 96 aprovadas.
- A auditoria automática de movimento estava desativada (`enabled=false`, zero amostras); portanto não é marcada como aprovada. A progressão e as transições foram avaliadas por quadros do MP4 exportado em instantes diferentes, incluindo a folha de 23 quadros e a revisão independente indicada acima.

## Limites

A revisão técnica e documental não constitui parecer jurídico nem validação de publicação eleitoral. Não foi feita audição humana das falas; as verificações de dicção descritas são automáticas. A API do Fish Audio não confirma de forma independente qual backend efetivamente sintetizou o áudio. Consultar `TSE-IA-NOTE.md`, `FACTS.md`, `LEGAL-VERIFICATION.md` e `ASSET-ATTRIBUTIONS.md` antes de qualquer uso público.
