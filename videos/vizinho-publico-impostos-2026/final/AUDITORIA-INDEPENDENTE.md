# Auditoria independente — Vizinho Público

Direção e produção realizadas pelo subagente HyperFrames efetivamente retomado. O Codex principal conferiu artefatos, fontes, preservação e o arquivo exportado.

## MP4 final verificado

- SHA256: 5ce2403d1cc89ee734de0fc489f361a3b0dbb69adf6413fcf2b086438315e9c3.
- 24.611.902 bytes; 179,366667 segundos, incluindo conclusão e assinatura.
- 1080×1920, 30 fps, 5.381 quadros, H.264 High nível 4.1, yuv420p; AAC-LC, 48 kHz, estéreo.
- Faststart comprovado: moov em offset 32, antes de mdat. Decodificação integral sem erros.
- EBU R128 medido no AAC final decodificado: −16,0 LUFS integrados, LRA 3,2 LU, true peak −1,4 dBTP.

## Inspeção visual e movimento

Foram inspecionados 43 quadros reais do master, distribuídos por todas as cenas, e 33 quadros do MP4 final, incluindo 177,8 e 179,2 segundos para verificar assinatura e encerramento. As composições mantêm textos primários legíveis, progressão de dados e diagramas, fotografias com movimento e personagens sem atuação articulada. Não foram observados cortes de rótulos ou sobreposições de texto que comprometam a leitura nos quadros amostrados.

Varredura de todos os quadros pelo freezedetect, limiar 0,0001 e duração mínima de 3 s: uma retenção de 3,033333 s entre 29,966667 e 33 s, durante a leitura da definição inicial. Não foram detectadas outras retenções estáticas acima desse limiar. Esse teste não certifica qualidade criativa sozinho; foi combinado com as amostras de progressão das cenas.

Check nativo independente no projeto: zero erros/avisos em lint e runtime; layout sem erros/avisos e um info de overflow intencional do pan da cidade; contraste 42/42. O número do relatório resumido anterior foi corrigido para o resultado confirmado no log real. A amostragem automática de motion do CLI estava desabilitada, portanto não é declarada como uma aprovação.

## Conferência do áudio

Transcrição Whisper medium, sem prompt, executada sobre o áudio extraído do MP4 final: gancho, ponte sobre imposto/tributo e salário, conceitos, dados, fiscalização e chamada final presentes; valores centrais reconhecidos. A transcrição integral contém erros de reconhecimento e não substitui roteiro ou legendas. Para resolver uma divergência no nome geral, o áudio real da cena 3 foi extraído separadamente e reconheceu “Tributo é o nome geral”. A última chamada foi reconhecida até cerca de 177,4 s, seguida pelo encerramento visual.

Não foi realizada audição humana da entonação. ASR, decodificação e medidores não certificam naturalidade perceptiva; não se afirma ter ouvido integralmente a narração ou assistido em reprodução contínua.

## Fontes e preservação

A listagem oficial da Receita conferida nesta retomada ainda apresenta 2024 como estudo mais recente. A planilha 2025 foi baixada novamente da URL oficial do Tesouro e tem o mesmo SHA256 da cópia utilizada: 886f4e3266e99907f976c4815dfe8da99ebcf9c670a6ce331925913e88e64b88. FACTS explicita pagamentos primários do Governo Central, incluindo restos a pagar pagos, separadamente da carga tributária consolidada de 2024.

Os 1.133 arquivos inventariados de episódios anteriores e as 15 referências do corpo original do episódio de impostos permanecem idênticos. As novas entregas estão em pasta própria. A legenda tem cinco hashtags; créditos e licenças constam nos arquivos da entrega.

Evidências: verification/independent/ e verification/hyperframes-check.json.
