# Revisão audiovisual — registro de alterações

Esta revisão parte da produção anterior localizada em `../vizinho-publico-trabalhadores-2026/project`. Ela foi copiada para uma pasta exclusiva; os arquivos anteriores permanecem preservados. Identidade, ilustrações 2D, trilha original, tipografia, paleta e composições aprovadas foram reaproveitadas.

A revisão refoca a narrativa em duas propostas trabalhistas e seus pontos de atenção. As cenas mantêm campos separados para texto de tela e texto de narração em `scene-text.json`; números da fala são escritos por extenso. O corte histórico é 11/10/2026.

- **Cena 1:** mantém Lula e Flávio em ilustrações simétricas, rotuladas na tela como geradas por IA; título cabe na área segura.
- **Cena 2:** apresenta 6×1 e o 5×2 apenas como exemplo visual, explicitamente não universal.
- **Cena 3:** mostra a redução gradual prevista pela PEC 221/2019, os dois repousos remunerados, manutenção salarial, transição, regimes específicos, situação no Senado e ausência de vigência.
- **Cena 4:** identifica a PEC 12/2026, Rogério Marinho e Flávio Bolsonaro como signatário; apresenta opção de regime, piso/benefícios proporcionais e situação na CCJ.
- **Cena 5:** torna visíveis os dois repousos semanais remunerados atribuídos à PEC 221. A dúvida sobre o cálculo do repouso em jornada variável aparece sincronizada à narração e é apresentada como falta de detalhe expresso, não como perda automática de direito.
- **Cena 6:** separa regras atuais sobre falta justificada e afastamento por doença das questões não detalhadas expressamente pela PEC 12.
- **Cena 7:** distingue previsibilidade do salário mensal de renda por hora variável, sem inventar cifras ou projeções individuais.
- **Cena 8:** calcula somente o custo por hora sob a hipótese de salário mensal mantido e jornada 44→40; deixa explícito que isso não prevê o custo total.
- **Cena 9:** sincroniza o argumento de liberdade para negociar com a cláusula de prevalência do contrato individual; apresenta eventual desequilíbrio como risco possível, sem tratá-lo como resultado certo.
- **Cena 10:** separa visualmente PEC 221 e PEC 12, seus respectivos autores, conteúdo e tramitação; remove títulos que poderiam sugerir que propostas já estão valendo.
- **Cena 11:** mantém o fechamento editorial e “Siga @vizinhopublico”.

## Voz e sincronização

A fala foi mantida em onze arquivos por cena, com uma faixa consolidada e legendas retimadas após a revisão. As cenas 03 e 08 foram regeneradas com `normalize:false`, opção documentada pela API Fish, porque a normalização padrão do serviço levou dois reconhecedores automáticos a transcreverem as unidades de “horas” de maneira ambígua. ASR independente Whisper medium confirmou “quarenta e quatro horas por semana” e “quarenta horas por semana” na cena 03 e a formulação do cálculo por hora na cena 08. Os takes substituídos e suas transcrições foram mantidos em `assets/audio/original-scenes-v1/`, `assets/audio/versions-v1/`, `assets/audio/originals-before-diction-fix/` e `assets/audio/asr-rechecks/`.

A faixa original de música tinha 177,048 segundos, menos que o programa de 209,735 segundos. Para não deixar a cauda final sem música, `scripts/extend_music.py` acrescenta um trecho interior de 42 segundos com crossfade linear de 2,5 segundos e fade-out final; `music-original.wav` foi preservada. A mixagem continua aplicando ducking da trilha durante a voz e a master é normalizada em dois passes.
