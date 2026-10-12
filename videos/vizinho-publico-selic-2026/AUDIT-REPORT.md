# Relatório de auditoria — Por que a taxa de juros muda a sua vida?

Data da auditoria: 12 de outubro de 2026 (UTC).

## Arquivo exportado

- Arquivo: `renders/vizinho-publico-selic-final.mp4`
- SHA-256: `1239595a452147e6069ec8c5761cda6112c542c3125c212f8db91bc84e3aab27`
- Vídeo: H.264, 1080 × 1920, 30 fps, 5.345 quadros, 178,167 s.
- Áudio: AAC, 48 kHz, estéreo, duração alinhada ao vídeo.
- Tamanho: 44.500.214 bytes.
- Decodificação integral com FFmpeg: concluída sem erros.

## Áudio

A medição EBU R128 do MP4 final registrou −16,6 LUFS integrados, LRA 2,4 LU e true peak −1,5 dBTP. A trilha instrumental original segue durante o programa e termina com fade-out; a mixagem mantém a narração em primeiro plano. Não foi feita escuta humana nesta auditoria. A validação de fala usou reconhecimento automático em português, incluindo verificações independentes por Whisper pequeno e médio dos valores da simulação PRICE na cena 6 e da meta Selic na cena 11; os reconhecedores confirmaram os valores e conceitos centrais. Na cena 9, um ASR grafou “CDI” como “SEDI”; isso é registrado como variação lexical da transcrição automática, não como defeito de pronúncia confirmado.

## Imagem e composição

Foram revisados quadros reais do MP4 ao longo das 12 cenas, incluindo abertura, simulação financeira, gráfico da meta Selic, encerramento e amostras intermediárias. A revisão visual verificou título, valores, legenda, margens de segurança, presença da família ilustrada e CTA final. A capa é uma composição separada em `compositions/cover.html` e `deliverables/capa-instagram.jpg`.

O check do HyperFrames passou com zero erros de lint, zero erros de runtime e zero erros de layout; a análise de contraste terminou sem alertas. O runtime emitiu um aviso genérico de alvo GSAP não encontrado em um instante sem conteúdo; os quadros amostrados não mostraram elemento narrativo obrigatório ausente. O teste automático de movimento estava desativado (`enabled: false`, zero amostras), portanto não é considerado aprovado. A verificação de movimento foi feita visualmente comparando quadros em momentos diferentes do MP4, sem certificação automática de movimento.

## Precisão e escopo

Os valores da simulação PRICE foram conferidos contra o cálculo Decimal descrito em `FACTS.md`. A Selic foi conferida na série oficial SGS 432 e no comunicado do Copom; 13,75% a.a. é apresentado como a meta observada no corte de 12/10/2026, não como uma taxa de financiamento. Antes de publicação posterior, atualizar a consulta do BCB. Nenhuma publicação no Instagram foi feita.

Os reconhecedores automáticos auxiliam a conferência, mas não substituem escuta humana. A análise não é recomendação financeira nem parecer jurídico.
