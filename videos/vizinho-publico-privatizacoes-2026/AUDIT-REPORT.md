# Relatório de auditoria — Privatização: quem paga essa conta?

## Arquivo final

- MP4: `exports/vizinho-publico-privatizacoes-final.mp4`
- H.264, 1080 × 1920, 30 fps, 5.082 quadros; AAC-LC, 48 kHz, estéreo.
- Duração: 169,400 s (2 min 49,4 s), incluindo o CTA final.
- Tamanho: 46.650.271 bytes (44,5 MiB), abaixo do limite de 100 MiB por arquivo do GitHub.
- SHA-256: `722a10a412650dba8ca6295f34b8855ad044e70e75de42ca6bd44e83194ba2f8`.
- A faixa AAC foi copiada sem recodificação da master HyperFrames. MD5 do bitstream AAC extraído de ambas as versões: `070250ea44cb169abeeeb805a1f3ba8b`.
- A master de render, sem recodificação de vídeo, está preservada como `exports/vizinho-publico-privatizacoes-master-hyperframes.mp4`.
- A versão compacta foi criada com `libx264`, preset `medium`, CRF 20, perfil High/nível 4.1, `yuv420p` e `+faststart`; o áudio permaneceu em cópia direta. Comparação quadro a quadro com a master: SSIM global 0,995694. Não houve mudança de duração, resolução ou contagem de quadros.

## Integridade de áudio e imagem

- O decodificador FFmpeg percorreu o MP4 final completo sem reportar erro.
- Medição EBU R128 do MP4: −16,03 LUFS integrado, LRA 2,60 LU, true peak −0,96 dBTP. A saída do filtro de análise em alvo −16 LUFS/−1 dBTP estima −15,98 LUFS e −1,00 dBTP.
- A trilha cobre o programa inteiro, incluindo fade-out no encerramento; o SFX de impressão da abertura foi gerado para esta produção e está integrado à mixagem. A voz permanece como primeiro plano, com ducking musical.
- A auditoria visual da exportação compacta usou 16 quadros extraídos do MP4 — dois pontos por cena — reunidos em `snapshots/final-mp4/contact-sheet.jpg`. Foram conferidos abertura/manchete, cartões legais e explicativos, gráfico do balanço, exemplos, comparativo, investimento, ressalvas e encerramento/CTA. Os textos e créditos permanecem legíveis nas amostras; não foi encontrada sobreposição nova após a recodificação. As imagens foram comparadas à master; SSIM global 0,995694.
- A fonte de vídeo documental do carteiro tem keyframes esparsos (intervalo máximo reportado de 3,97 s). O render fiel por screenshot foi usado e o trecho aparece em movimento documental; não se aplicou interpolação artificial de movimento.
- A ferramenta de análise automática de movimento estava desativada (`enabled=false`, `samples=0`); portanto, não se declara aprovação por esse gate. A revisão de movimento foi visual, por amostragem de quadros exportados.
- Uma varredura adicional de congelamento (limiar −50 dB por pelo menos 2 s) marcou holds de aproximadamente 2–3,23 s nos cartões de leitura das cenas 2, 3 e 5, e aproximadamente 4,9 s no CTA. A inspeção visual confirma que são pausas de leitura após entrada/revelação do conteúdo e sustentação deliberada da tela final; não são lacunas de mídia ou falhas de render.
- O plano fotográfico da cena 7 está ligado à timeline principal: GSAP anima `#img7` de escala 1,08 para 1,00 e desloca x/y em 30,341 s, começando junto da cena. Para confirmar a renderização, quadros da região fotográfica em 117,5, 122, 130, 138, 145 e 146,5 s foram comparados; a diferença média absoluta por canal entre quadros consecutivos ficou entre 5,032 e 8,033 níveis de 8 bits, compatível com a deriva visual sutil mais as mudanças de luz/composição. O movimento aparece no MP4 final.
- Não havia capacidade de escuta humana direta neste ambiente. A validação de fala foi feita por transcrição automática: Whisper small no conjunto final e Whisper medium independente nos takes 4, 6 e 7. Os testes sustentam os números e frases centrais; transcrição automática não equivale a certificação de pronúncia por uma pessoa.

## Checagens HyperFrames

Check completo HyperFrames 0.8.147, com amostras e pontos de transição:

- Lint: 0 erros, 2 avisos relacionados a instâncias repetidas de mídia em montagens.
- Runtime: 0 erros, 0 avisos.
- Layout: 0 erros, 33 avisos e 47 informações; 127 ocorrências no total, resultado truncado. Os avisos remanescentes são de overscan/cross-fade e itens de conteúdo já inspecionados visualmente nos quadros amostrados.
- Contraste após correção de dois textos: 53/53 combinações verificadas aprovadas; 0 avisos.
- Movimento: gate não executado, conforme registrado acima.

Um check completo anterior, antes das duas correções de tinta, apontou 2 avisos de contraste (ícone de ônibus e chamada final). A cor desses elementos foi escurecida. A verificação dirigida posterior aprovou 20/20 amostras; o check completo final acima aprovou 53/53.

## Voz, dados e limites editoriais

A locução foi gerada pelo Fish Audio com o alias solicitado `s2.1-pro-free`, referência de voz `ceaf7f569bef42c7bd322d88e3a356b7`, temperature/top_p 0,85, speed 1,0 e normalização desativada. A API aceitou a solicitação; a resposta não forneceu atestado independente do modelo executado no backend.

Os fatos, cálculos, distinção entre concessão e PPP, componentes do resultado dos Correios e limites de causalidade estão documentados em `FACTS.md` e fontes em `research/`. O resultado líquido de 2025 é apresentado como dado contábil; a narrativa não o atribui integralmente a custos de universalização. O exemplo de tarifa, risco e benefício é identificado como hipótese ou atribuído à fonte correspondente, sem tratar associação temporal como causalidade comprovada.

O teste de render HyperFrames usou captura por screenshot em software GPU e dois workers, concluindo 5.082/5.082 quadros. O arquivo final de distribuição foi então recodificado a partir da master para ficar abaixo do limite de upload sem reencodar o AAC.
