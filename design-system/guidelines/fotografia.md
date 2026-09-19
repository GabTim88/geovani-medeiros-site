# Fotografia

A fotografia é o material mais forte do sistema. Quase toda seção ou é uma foto,
ou tem uma foto atrás.

## O acervo

Dois registros, com linguagens diferentes:

**Estúdio** — fundo branco ou preto liso, luz dura, o artista e o instrumento.
Usadas onde o assunto é ele: Sobre, início da galeria, abertura do Projeto.

**Tiradentes** — o audiovisual gravado ao ar livre no fim de tarde, com a banda,
o público e o casario da cidade ao fundo. Contraluz dourado, muita atmosfera.
Usadas onde o assunto é o trabalho ao vivo: Projeto, Agenda, Mídia, CTAs.

A regra de escolha é essa: **estúdio para falar dele, Tiradentes para falar do
que ele faz.**

## Tamanhos de origem

Medidos a partir do layout real, não arbitrados. Fonte a 2× a largura CSS máxima
do slot:

| Uso | Largura CSS | Origem |
| --- | --- | --- |
| Fundo de hero e de seção | 1920 | 1920px |
| Coluna de Sobre e Projeto | 512 | 1080px |
| Mosaico da galeria | 357 desktop / 430 mobile | 1200px |
| Logotipo do hero | 560 | 1200–1600px |

Teto geral: **1600px no maior lado**, WebP qualidade 85. As fotos da galeria
chegaram com 4024×6048 — 11× mais pixels do que o layout usa, o que travava o
otimizador de imagem. Os originais ficam em `assets-originais/`, fora de
`public/`, para não irem no deploy.

## Fotos atrás de texto

Sempre com véu, sempre medido. `veil-dark` em seção escura, `veil-burn` em bloco
de CTA. 88% é o piso: abaixo disso o kicker dourado reprova AA.

Nesse nível a foto funciona como textura e atmosfera, não como assunto — que é o
papel certo para um fundo com muito texto por cima. Quem quiser a foto legível
deve usá-la como elemento de conteúdo, em coluna própria, não como fundo.

## Mosaico da galeria

CSS multi-column de 3 colunas. As imagens entram com largura e altura
intrínsecas (`w-full h-auto`), não em caixa de proporção fixa: o mosaico fica
com as proporções reais e sem layout shift.

**A contagem importa.** Com 3 colunas, o navegador equilibra pela altura total.
6, 9 e 12 fecham exato; 7 ou 8 deixam um item pendurado sozinho e abrem meia
tela de vazio. Ao adicionar fotos, adicione em múltiplos de 3 ou substitua.
