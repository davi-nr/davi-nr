# Vizinho Público — Por que pagamos impostos?

Episódio completo dirigido e produzido pelo subagente HyperFrames, preservando projetos e prévias anteriores. Abertura conversacional de 22 segundos, música incorporada, narração feminina Fish Audio e documentário editorial 2D.

- [Assistir ou baixar o MP4 final](vizinho-publico-impostos-2026-final.mp4): 1080×1920, 30 fps, H.264 High@4.1 + AAC, 179,37 segundos, faststart.
- [Projeto editável completo](projeto-editavel-impostos.zip): fonte principal, fonte editável da abertura, capa, mídia utilizada, vinte takes selecionados, narração consolidada, música, legislação e planilhas de pesquisa.
- [Capa vertical](capa-instagram.jpg).
- [Roteiro](SCRIPT.md), [storyboard](STORYBOARD.md), [fontes e metodologia](FACTS.md) e [créditos/licenças](CREDITOS-E-LICENCAS.md).
- [Legenda pronta para Instagram](LEGENDA-INSTAGRAM.md), com cinco hashtags, e [legendas SRT](legendas.srt).
- [Narração consolidada](narracao-consolidada.mp3) e [trilha separada](trilha-documental.mp3).
- [Auditoria HyperFrames](AUDIT-REPORT.md), [auditoria independente](AUDITORIA-INDEPENDENTE.md) e [dados técnicos](VERIFICACAO-TECNICA.json).

Para abrir o projeto, extraia o ZIP e execute `python3 restore_audio.py` antes do preview. Os WAV são restaurados de FLAC com validação de frames e SHA256 PCM. Não é necessária chave API para renderizar as falas existentes. O pacote contém as fontes vetoriais editáveis da abertura; o programa completo usa uma cópia de vídeo seekable dessa abertura para captura fiel, junto a nove takes separados. Scripts de geração de voz no pacote usam credenciais próprias pelo ambiente seguro.

A auditoria decodificou integralmente o MP4, mediu −16,0 LUFS/−1,4 dBTP, inspecionou quadros de todas as cenas e verificou movimento/encerramento. A conferência de fala usou transcrições automáticas; não se afirma escuta humana da entonação.

Os caminhos locais mencionados em FACTS e manifestos referem-se à estrutura interna do projeto editável. Os arquivos WAV originais, masters e versões anteriores seguem preservados no ambiente de origem.
