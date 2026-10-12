# Verificação do pacote

- MP4: H.264, 1080×1920, 30 fps, 5.345 quadros, 178,167 segundos; AAC estéreo 48 kHz. Decodificação integral sem erros.
- Medição do áudio do MP4: −16,6 LUFS integrados; pico verdadeiro −1,5 dBTP.
- ZIP: extraído e CRC validado. Todos os sete WAV comprimidos como FLAC foram restaurados com parâmetros e amostras PCM idênticos aos arquivos originais, incluindo narração consolidada, música e mix.
- Projeto extraído: `npm ci` e check HyperFrames 0.8.147 concluídos. Zero erros de lint/runtime/layout/contraste; 93 de 93 verificações de contraste passaram. Um aviso genérico de alvo GSAP ausente em tempo zero; movimento automático desativado, portanto sem alegação de aprovação desse teste. Inspeção visual documentada em AUDIT-REPORT.md.
- Reconsulta oficial em 12/10/2026: último comunicado Copom, reunião 281 de 16/09/2026, meta de 13,75% ao ano; último registro SGS 432 em 12/10/2026 também 13,75%.
- Narração verificada por transcrição automática; essa verificação não equivale a escuta humana. Limitações detalhadas na auditoria.
- SHA256SUMS permite conferir os três downloads principais. O pacote não inclui credenciais.
