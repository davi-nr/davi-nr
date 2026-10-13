# Verificação independente — revisão V8

Execução audiovisual delegada efetivamente a `/root/hyperframes`; Codex verificou e organizou a entrega. Esta versão é candidata à avaliação editorial do usuário. Nenhuma versão anterior foi substituída.

## Alterações

- Abertura reconstruída com salário no celular, compra, combustível, conta de luz e fluxos conectados às perguntas. Palavra do gancho alterada para “Impostos!”. A explicação seguinte preserva a distinção entre tributo e imposto e esclarece que nem todo salário paga imposto de renda.
- A montagem anterior da abertura utilizava nove arquivos e oito intervalos inseridos, totalizando 3,3 segundos. A abertura revisada usa uma tomada contínua de 20,480 segundos, sem essa montagem fragmentada. Não houve aceleração indiscriminada da voz.
- Corpo recomposto pelo HyperFrames com progressão dos documentos, bases tributárias, fluxos federativos, barras proporcionais e etapas de fiscalização. A V8 corrige somente os offsets duplicados que faziam a cena 11 sobrepor passos e legendas.
- Música incorporada e mixagem com ducking. Normalização final preserva os pacotes de vídeo do master.

## Verificações executadas

- MP4 final: 179,400 segundos, 1080 × 1920, 30 quadros por segundo, H.264 e AAC estéreo a 48 kHz. Limite de 180 segundos respeitado, sem cortar a conclusão.
- Decodificação integral por FFmpeg: saída zero, nenhum erro, 5.381 quadros.
- Medição independente EBU R128 sobre o AAC exportado: aproximadamente −16,0 LUFS e pico verdadeiro −1,5 dBFS.
- Inspeção visual de 16 quadros distribuídos pelo MP4 e 12 quadros adicionais na abertura, fotografia, federalismo, cena 11 e encerramento. Em 163,5 segundos os quatro passos estão acima da legenda; em 179,33 segundos a chamada final está visível.
- Áudio AAC da V8 idêntico byte a byte ao da V7 tecnicamente corrigida: SHA-256 ADTS `de6f490cafcc31f35c3a0654e6b3a5cd37abb0a8b71874a164d084368df43b30`. A transcrição automática integral desse áudio identifica a abertura nova e o encerramento completo. Transcrição automática não comprova entonação ou pronúncia perfeita.
- Preservação verificada por SHA-256: 521 arquivos anteriores do episódio, 1.133 de outras produções e 15 arquivos do corpo inicial sem alteração.
- Legenda de Instagram: 2.001 caracteres e cinco hashtags.

## Limites

Não houve audição perceptiva por ferramenta nesta verificação. A entonação das perguntas e a qualidade editorial permanecem sujeitas à avaliação do usuário. A inspeção de quadros e a análise técnica não são apresentadas como aprovação automática ou como reprodução audiovisual integral assistida.

SHA-256 do MP4: `ce91ac9be9f031980625e7145b468747ef0c6e66b26834c936d7ef3f145c4394`.

## Pacote editável

Integridade ZIP verificada. Os três WAVs restaurados conferem com os hashes PCM do manifesto. No pacote extraído, instalação por lockfile e compilação das composições passaram: `FullVideo` (5.381 quadros, 1080×1920) e `Opening` (660 quadros, 1080×1920). O helper reconstrói a mixagem a partir da locução e trilha preservadas; os áudios não exigem nova síntese para renderizar. Não foram incluídas credenciais ou dependências instaladas.
