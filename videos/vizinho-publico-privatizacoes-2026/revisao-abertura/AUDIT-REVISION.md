# Relatório de auditoria — revisão da abertura

## Escopo

A revisão atende ao pedido de tornar a manchete real visível desde o início, inserir “ESTATAL DÁ PREJUÍZO. E DAÍ?” antes da fotografia e manter intactas a narração, a música e as cenas posteriores. A faixa de pergunta aos 8,4 s e o valor contábil receberam fundos discretos para preservar a leitura após a expansão fotográfica.

O projeto original permaneceu intacto. O MP4 aprovado original continua com SHA-256 `722a10a412650dba8ca6295f34b8855ad044e70e75de42ca6bd44e83194ba2f8`. A validação independente do orquestrador confirmou 112 arquivos do projeto original inalterados e 21 arquivos de áudio do clone idênticos aos originais. O código-fonte das cenas 2–8 é idêntico ao aprovado.

## Entrega final

- Vídeo: `deliverables/vizinho-publico-privatizacoes-revisado.mp4`
- SHA-256: `bd2069121cc693924fdb3024a4332193eb5bae26a199da983d70edffa123ccf4`
- Tamanho: 42.787.889 bytes (aprox. 40,8 MiB), abaixo do limite de 95 MiB.
- Formato: H.264 High, nível 4.1, yuv420p, 1080 × 1920, 30 fps; AAC-LC, 48 kHz, estéreo; 169,4 s.
- `+faststart` aplicado ao MP4 de distribuição.
- Master HyperFrames de alta qualidade: `exports/vizinho-publico-privatizacoes-revisado-master.mp4` (107.746.409 bytes).
- Capa: `deliverables/capa-instagram-revisada.jpg`, JPEG 1080 × 1920, SHA-256 `142d61c17fa567d865840c60a4ebaa7b5f8d377826ea254b2898f72d047c5887`.
- Prévia: `deliverables/previa-abertura-5s.mp4`, 150 quadros a 30 fps (5,0 s de vídeo), H.264 nível 4.1 e AAC inicial.

O AAC da distribuição foi copiado sem recodificação. O SHA-256 do AAC extraído como ADTS é `ee4bf9db5797738e51d8a67f612e808bf9034b445869b24b3a46a88bcdc6116d`, idêntico ao da versão aprovada anterior e ao AAC da master HyperFrames revisada.

## Verificações

- HyperFrames 0.8.147 `check .`: passou, sem erros de lint, runtime ou layout. Permanecem dois avisos de descoberta duplicada de mídia e duas advertências de contraste de legendas antigas (`#cap33` e `#cap34`, em 84,687 s); esses elementos e as cenas correspondentes não foram alterados. Não foram tratados como aprovação automática de movimento.
- Render da master: captura screenshot em software GPU, 5.082 quadros, sem erro de runtime; duração 169,4 s.
- Decodificação integral do MP4 de distribuição via FFmpeg: passou, sem erros.
- Quadros exportados revistos: 0,1; 1,49; 1,6; 2,75; 3,78; 4,8; 5,0; 5,2; 6,0; 8,4 s. A manchete aparece no início; as duas linhas do título ficam juntas antes da saída; a fotografia entra sem reinício visível do movimento; o valor está legível sobre seu suporte escuro; a pergunta está legível sobre suporte claro.
- Continuidade após o gancho comparada visualmente com o original em 13,8; 31,7; 60; 84,7; 120; 150; e 164 s. Os quadros correspondem visualmente, com diferenças de compressão H.264. Contact sheet: `snapshots/final-revision-review/unchanged-scenes-comparison.jpg`.
- A capa foi revisada em resolução completa e nos recortes centrais quadrado 1:1 e 3:4; o título e a assinatura permanecem dentro dos recortes.

A avaliação de movimento aqui descrita é uma revisão visual dos instantes listados; não alego uma certificação automática abrangente de movimento nem audição humana direta.
