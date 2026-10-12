# Revisão pontual da abertura

Esta revisão mantém o documentário aprovado e altera somente a apresentação inicial. O projeto de origem permanece em `../../project`; o MP4 anterior não foi sobrescrito.

## Alterações visuais

- De 0 a 1,5 s, a manchete real da Agência Brasil, publicada via UOL em 23/04/2026, fica visível imediatamente e recebe aproximação suave.
- De 1,5 a 4 s, entram em sequência “ESTATAL DÁ PREJUÍZO.” e “E DAÍ?”, permanecendo juntas por mais de um segundo.
- Entre 4 e 5 s, a manchete sai e a fotografia dos Correios ocupa a tela cheia dentro da cena 1. As cenas 2–8 permanecem intactas.
- A partir de 7,6 s, a pergunta original permanece no mesmo texto e timing. Foi acrescentado apenas um fundo claro discreto atrás dela para manter contraste sobre a foto.
- Aos 5–9 s, o número contábil ganhou um painel escuro compacto para manter contraste sobre o céu; o dado e sua animação não mudaram.
- Voz, música, mixagem, legendas e cenas 2–8 não foram alteradas.

## Arquivos da revisão

- Fonte da timeline revisada: `index.html`.
- Fonte da capa: `compositions/cover-revision.html`.
- Capa exportada: `deliverables/capa-instagram-revisada.jpg` (1080 × 1920). As versões de recorte central 1:1 e 3:4 estão em `snapshots/revision-preview-v2/`.
- Prévia da abertura (5 s): `deliverables/previa-abertura-5s.mp4`.
- Contact sheet da continuidade pós-abertura: `snapshots/revision-continuity-final/contact-sheet.jpg`.

## Reprodução

Com HyperFrames 0.8.147 instalado, execute na raiz deste projeto:

```bash
hyperframes check .
PRODUCER_LOW_MEMORY_MODE=true hyperframes render . --output exports/vizinho-publico-privatizacoes-revisado-master.mp4 --fps 30 --quality delivery --workers 1 --experimental-fast-capture=false
```

O render desta revisão é uma captura fiel em screenshot no modo de baixo uso de memória. Para recriar a versão leve de distribuição (somente o vídeo é recodificado; AAC é copiado):

```bash
ffmpeg -i exports/vizinho-publico-privatizacoes-revisado-master.mp4 -map 0:v:0 -map 0:a:0 -c:v libx264 -preset medium -crf 20 -profile:v high -level:v 4.1 -pix_fmt yuv420p -c:a copy -movflags +faststart deliverables/vizinho-publico-privatizacoes-revisado.mp4
```

O MP4 de distribuição e o relatório de auditoria estão em `deliverables/` e `AUDIT-REVISION.md`.
