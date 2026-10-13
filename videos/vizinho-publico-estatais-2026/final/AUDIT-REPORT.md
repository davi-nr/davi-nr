# Relatório de auditoria — “Estatal dá prejuízo. E daí?”

## Arquivo final

- `deliverables/estatal-da-prejuizo-final.mp4`
- SHA-256: `a163379ab25048fcce6e2015140beb3bdae4211ae9ebf6470535fd7b0051a825`
- Tamanho: 19.537.944 bytes (18,6 MiB).
- H.264 High, nível 4.1, yuv420p, 1080 × 1920, 30 fps; AAC-LC, 48 kHz, estéreo.
- Duração: 174,433 s; faststart presente.
- Decodificação completa por FFmpeg: concluída sem erros.

## Render e verificações

A master foi capturada pelo HyperFrames 0.8.147 em modo screenshot fiel, com captura por software GPU e 5.233 quadros. A versão de distribuição foi codificada em H.264 CRF 20, perfil High, nível 4.1 e yuv420p; a faixa AAC foi copiada sem recodificação. O hash da faixa AAC extraída da master e da versão final coincide: `abaf5939ac62e14ab98d3d07a2786bfcd8c13dd8dfb9f57ea762ec7966dde1ab`.

O check HyperFrames final da composição passou: lint 0 erros/0 avisos; runtime 0/0; layout 0/0 em sete amostras; movimento habilitado com 300 amostras e 0 ocorrências; contraste 49/49 verificações aprovadas. A validação final do MP4 incluiu 12 quadros extraídos em 0,8; 8; 16; 30; 44; 60; 80; 100; 120; 140; 160; e 172,5 segundos. Contato visual: `deliverables/contact-sheet-final-mp4.jpg`; quadros individuais: `deliverables/final-audit-frames/`.

EBU R128 na versão final: −16,0 LUFS integrados, LRA 3,5 LU e true peak −1,0 dBFS. Isso confirma níveis técnicos; não equivale a uma avaliação subjetiva de audição em dispositivos móveis.

## Fatos, números e limites editoriais

As comparações seguem `FACTS.md` e as fontes locais associadas. O prejuízo líquido contábil dos Correios em 2025 (R$ 8,46 bilhões arredondados) e o prejuízo contábil do Metrô-SP (R$ 1,06 bilhão) são resultados de empresas diferentes, não uma comparação direta de eficiência. O Metrô-SP também reportou fluxo operacional de caixa positivo de R$ 778,6 milhões e apoio público a PPPs de R$ 890,2 milhões; essas grandezas são exibidas em linhas separadas. Os créditos de passagens não usados, de R$ 368 milhões, foram reconhecidos em 2024 e não se repetiram em 2025, conforme a explicação da companhia.

O investimento da Sabesp é atribuído ao Governo do Estado de São Paulo e apresentado como dado reportado, não como prova de que uma mudança de controle causou o aumento. A fotografia mostra a ETE Barueri em 2017, não uma obra de 2025. O estudo de distribuidoras elétricas é descrito com seu recorte, tamanho e limite de inferência. A narrativa distingue venda de controle, concessão e PPP e não trata função social como justificativa automática para perdas.

## Voz e música

As falas foram sintetizadas no Fish Audio com a voz de referência e os parâmetros documentados no manifesto do projeto. O modelo/alias solicitado foi `s2.1-pro-free`; a resposta da API não fornece atestação independente do modelo interno executado. Foram verificados integridade, duração, sincronização, níveis e transcrições automáticas. O ambiente não disponibilizou audição humana direta; não se afirma uma revisão auditiva humana integral. A pessoa responsável aprovou expressamente a prévia vocal de 25 segundos antes da autorização do filme completo.

A trilha instrumental original foi mixada com ducking da voz, continuou até o encerramento e recebeu fade final. A master e a cópia de distribuição mantêm a mesma faixa AAC.

## Preservação e proveniência

Os projetos anteriores e a prévia aprovada foram mantidos intactos. Créditos, autores, licenças e fontes dos assets usados constam em `ASSET-ATTRIBUTIONS.md`; fontes factuais e ressalvas estão em `FACTS.md`. A capa está em `deliverables/capa-instagram.jpg`. Nenhuma publicação no Instagram foi feita.
