# HeroSequencia

A abertura da home: um trilho de 260vh com um palco fixo de 100svh. A pessoa rola cerca de 160vh enquanto o palco fica preso no topo, e o conteúdo troca em duas fases.

## As fases

1. **Logotipo** entra com fade, 28px de subida e escala 0,96 → 1.
2. **Fica fixo** enquanto o scroll percorre os primeiros 45% da altura da tela.
3. **Crossfade**: o logotipo sai, a chamada entra na parte de baixo. O indicador de scroll some junto.
4. A chamada permanece pelos ~115vh restantes.

A troca é `scrollY >= 0.45 * innerHeight`, com `requestAnimationFrame` limitando a frequência. O JavaScript só alterna uma classe; a transição é toda CSS — 0,9s no logotipo, 0,7s no texto.

## Fundo

Vídeo em loop, mudo, é o padrão em qualquer tela. A foto pinta primeiro (é ela o LCP) e sai de cena quando o vídeo fica pronto. Nunca ficam as duas visíveis ao mesmo tempo: duas camadas a 60% somam um composto turvo.

A foto permanece quando o vídeo não deve carregar — economia de dados, conexão 2g, movimento reduzido ou falha no download.

## Armadilha de layout

`position: sticky` quebra se um ancestral tiver `overflow` diferente de `visible` em qualquer eixo: com `overflow-x: hidden` o eixo Y computa para `auto`, o `body` vira container de scroll e a fixação para de funcionar. O site usa `overflow-x: clip`, que contém sem criar container.

## Movimento reduzido

Sem trilho, sem fixação, sem crossfade: o trilho vira `height: auto`, o palco vira estático e as duas fases aparecem empilhadas e visíveis. Scroll fixado é gatilho clássico de náusea vestibular.

## O que o consumidor fornece

O logotipo, a chamada e o vídeo. O limiar de troca e a altura do trilho são os dois botões de ritmo.
