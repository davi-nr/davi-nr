# Auditoria da prévia conversacional v6

## Candidato atual

- Arquivo: `preview-conversacional-v6-distribution.mp4`
- Duração 22,000 s, 660 quadros, 1080×1920, 30 fps.
- H.264 High@4.1, yuv420p; AAC-LC 48 kHz estéreo.
- Tamanho: 2.306.431 bytes. SHA-256: `b3287572f54b32f56a370fe0258773bf10bf60e2526ec1351d19f26e6399c3af`.
- Faststart conferido (`moov` antes de `mdat`); decodificação completa do MP4 passou.
- EBU R128 medido no MP4: −16,0 LUFS integrado, LRA 4,3 LU, true peak −1,4 dBFS.
- SHA-256 do fluxo AAC extraído: `d8baffe84ecd525cc2f9c817c1802544565b8ee3b524de21eb89c5622e5831d5`.

## Construção e verificação

O vídeo foi capturado pelo HyperFrames 0.8.147 em modo screenshot fiel, software GPU e low-memory mode. A distribuição v6 reaproveita o fluxo H.264 da distribuição v5 sem recodificar quadros; o SHA-256 do fluxo H.264 elementar permaneceu idêntico (`9276ddfd1c4ebdfe0f0b1ffc46f2ee3d885176045d09f00c056512dd0448a444`). A faixa sonora foi normalizada em duas passagens a partir do WAV de origem, então codificada como AAC e remuxada com faststart. Os WAVs e MP3s anteriores foram preservados.

O check HyperFrames do HTML registrou zero erros ou avisos de lint, runtime, layout e contraste; 35 de 35 verificações de contraste passaram. O gate automático de movimento estava desabilitado (`enabled:false`, zero amostras). A inspeção visual manual do MP4 v5, cujo vídeo é idêntico ao v6, está na prancha `preview-conversacional-v5-contact.jpg` e amostra 12 instantes: salário no celular, compra, abastecimento, conta de luz, junção das ações, “IMPOSTOS!” e as duas perguntas. Os elementos permanecem legíveis nos quadros amostrados.

## Áudio e opções de voz

O MP4 usa a opção A, montada a partir de takes Fish independentes e de `assets/audio/preview-mix-v2-A.wav` (mix original SHA-256 `e78004174ecd578d73b0097c4e3814bdb8b4ff6839fc71d6df6ea9f70e599d12`). Os três mixes A/B/C foram normalizados em duas passagens para cerca de −16 LUFS e true peak abaixo de −1 dBTP, facilitando a comparação. As fontes sem normalização continuam preservadas. Os arquivos para ouvir e os textos estão em `ALTERNATIVAS-DE-PERGUNTA-v3.md`; manifesto e hashes em `voice-manifest-options-final.json`.

Whisper.cpp small, português e sem prompt, transcreveu o AAC extraído do MP4 v6: as quatro ações, a pergunta comum, “Impostos!”, “Mas espera aí...”, a pergunta sobre por que pagar tributos e a pergunta sobre o destino do dinheiro. Uma segunda transcrição independente com Whisper medium, sem prompt, no v5 anterior à normalização reconheceu a mesma sequência e terminou em 19,54 s; a normalização v6 alterou apenas o nível sonoro e manteve o tempo, como confirma o fluxo de vídeo idêntico e a nova transcrição small. O medium também transcreveu B com “tributos” e uma só ocorrência de “Mas espera aí...”. Os textos de verificação estão em `verification-asr/`. O ASR pode grafar “para” como “pra” e não certifica interpretação vocal. As opções de texto e duração estão em `ALTERNATIVAS-DE-PERGUNTA-v3.md`; manifesto e hashes em `voice-manifest-options-final.json`.

O ambiente não oferece escuta humana direta. A transcrição e as métricas não comprovam que a ênfase em “Impostos!” ou as perguntas soem naturais; essa avaliação depende de o usuário ouvir as opções A/B/C. A aprovação explícita da abertura continua pendente. Não foi iniciado render do documentário completo.

## Versões internas preservadas

O v4 apontava para uma mixagem antiga incompleta e não deve ser compartilhado. O v5 contém a mixagem A completa, mas estava em nível baixo; é preservado como intermediário. O arquivo para revisão é somente o v6 acima. A pasta contém os logs, capturas e mixes anteriores para rastreabilidade.

## Conferência independente do orquestrador

MP4 de distribuição decodificado integralmente; 22,000 segundos, faststart, −16,0 LUFS e pico verdadeiro −1,4 dBTP. O bitstream H.264 é idêntico ao da composição visual revisada: a última alteração foi apenas a masterização do áudio. As três opções MP3 medem aproximadamente −16,2 LUFS; picos A −1,7, B −1,8 e C −1,3 dBTP. Corpo preservado: 15 arquivos de referência sem alterações, incluindo a fonte completa, dados e áudios das cenas 2–12. Os 1.133 arquivos de episódios anteriores registrados no início desta produção também estão intactos. Transcrição e medições não comprovam naturalidade da entonação; não houve escuta humana neste ambiente.
