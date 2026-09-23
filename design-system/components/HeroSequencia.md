# HeroSequencia

A abertura da home: um trilho de 200vh com um palco fixo de 100svh. A pessoa rola cerca de 100vh enquanto o palco fica preso no topo, e o conteúdo troca em duas fases.

## As fases

1. **Logotipo** entra com fade, 28px de subida e escala 0,96 → 1.
2. **Fica fixo** enquanto o scroll percorre os primeiros 45% da altura da tela.
3. **Crossfade**: o logotipo sai, a chamada entra na parte de baixo. O indicador de scroll some junto.
4. **O CTA** entra 0,8s depois da chamada, com fade e 12px de subida.
5. A chamada e o CTA permanecem pelos ~55vh restantes.

A troca é `scrollY >= 0.45 * innerHeight`, com `requestAnimationFrame` limitando a frequência. O JavaScript só alterna uma classe; a transição é toda CSS — 0,9s no logotipo, 0,7s no texto, 0,7s no CTA depois de 0,8s de espera.

A fase do texto alterna `visibility` junto com `opacity`: só com `opacity: 0` o CTA continuaria tabulável enquanto invisível.

## Fundo

Foto em qualquer tela; vídeo em loop, mudo, só a partir de 768px. A foto pinta primeiro (é ela o LCP) e sai de cena quando o vídeo fica pronto. Nunca ficam as duas visíveis ao mesmo tempo: duas camadas a 60% somam um composto turvo.

No celular o vídeo não carrega de jeito nenhum: sob o véu escuro o movimento é quase imperceptível e custaria 16MB de dados e bateria. A foto também é o fundo único com economia de dados, conexão 2g, movimento reduzido ou falha no download. A regra mora em `useVideoBackgroundEnabled`.

## Armadilha de layout

`position: sticky` quebra se um ancestral tiver `overflow` diferente de `visible` em qualquer eixo: com `overflow-x: hidden` o eixo Y computa para `auto`, o `body` vira container de scroll e a fixação para de funcionar. O site usa `overflow-x: clip`, que contém sem criar container.

## Movimento reduzido

Sem trilho, sem fixação, sem crossfade: o trilho vira `height: auto`, o palco vira estático e as duas fases aparecem empilhadas e visíveis. Scroll fixado é gatilho clássico de náusea vestibular.

## O que o consumidor fornece

O logotipo, a chamada e o vídeo. O limiar de troca e a altura do trilho são os dois botões de ritmo.
