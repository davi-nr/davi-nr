# Revisão localizada da cena 11 — candidata V8

A V7 foi preservada como diagnóstico. A revisão V8 corrige apenas a disposição dos quatro passos da cena 11; o áudio, a narração e as demais cenas continuam com os mesmos arquivos-fonte. A renderização foi refeita integralmente com Remotion para manter as transições sincronizadas.

## Alteração

Em `remotion-app/src/BodyScenes.jsx`, os cartões agora recebem posições relativas ao contêiner. Em `remotion-app/src/styles.css`, o contêiner começa em 500 px. Antes, o contêiner começava em 560 px e os cartões ainda recebiam `top: 520 + i × 220 px`, somando indevidamente os deslocamentos. A disposição nova usa `top: 20 + i × 175 px`: os quatro passos ficam aproximadamente entre y=520 e y=1.190, acima da faixa de legendas.

## Quadros conferidos no MP4 de distribuição

Os quadros estão em `deliverables/reviewed-v8/frames/` e a prancha está em `deliverables/reviewed-v8/contact-v8-check.jpg`.

- 147,30 s: final da cena 10.
- 147,60 s: entrada da cena 11.
- 155,00 s: três passos visíveis; “EMPENHADO × PAGO” está inteiro e separado da legenda.
- 163,50 s: os quatro passos aparecem completos, com o quarto cartão e a trilha vertical acima das legendas.
- 164,60 s: saída da cena 11.
- 164,90 s: entrada do encerramento.
- 179,30 s: assinatura e CTA ainda visíveis.

Esta inspeção visual de quadros do MP4 confirma a correção pontual. Ela não é uma aprovação editorial automática do documentário.

## Integridade do arquivo

Arquivo: `deliverables/reviewed-v8/impostos-candidato-corpo-revisado-v8-final.mp4`
SHA-256: `ce91ac9be9f031980625e7145b468747ef0c6e66b26834c936d7ef3f145c4394`
1080 × 1920, H.264 High level 4.0, 30 fps, 5.381 quadros; AAC-LC 48 kHz estéreo; 179,400 s; 22.938.007 bytes. Decode integral concluído sem erro; `moov` precede `mdat`. A distribuição preserva exatamente o fluxo de vídeo do master (`SHA-256` dos pacotes de vídeo: `dde75d6747f218d74eb540eddfbb886e4e6a3329368d63615009c434d8c223a9`).

A faixa final foi normalizada a −16,02 LUFS integrados, LRA 3,0 LU e true peak −1,46 dBTP. A normalização de distribuição foi feita por `scripts/export_candidate_distribution.sh`, que copia o vídeo e normaliza o áudio em duas passagens. O WAV-fonte continua idêntico ao da V7: `2c7aa2bc5b4feb8de6d5d5d3c7359f3e13a6be605db99bdb8ec78d7d3cb26c12`.

O check legado HyperFrames não valida a composição React/Remotion. Não se declara aprovação automática de motion; a evidência desta correção é a inspeção dos quadros exportados acima.
