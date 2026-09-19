# Revelar

O conteúdo entra com fade e 40px de subida quando cruza a viewport. É o único movimento de scroll do site fora do hero.

## Como funciona

`IntersectionObserver` com limiar de 0,15 adiciona `.visible`; a transição é CSS, 0,9s em `cubic-bezier(0.16, 1, 0.3, 1)`. O observador se desconecta depois de disparar — o elemento não volta a esconder.

Três degraus de atraso (`0,1s`, `0,3s`, `0,5s`) escalonam grupos de irmãos. Não crie um quarto: acima disso o escalonamento vira espera.

## O perigo

O estado base é `opacity: 0`. Sem JavaScript a página ficaria **em branco**, e o Googlebot não é a única coisa que lê HTML sem executar tudo.

Por isso existem duas redes de segurança, e qualquer padrão novo que dependa de JS para aparecer precisa das duas:

1. Um `<noscript>` no layout que força `.reveal` visível.
2. Uma guarda no hook: sem `IntersectionObserver`, revela na hora em vez de deixar preso invisível.

## Movimento reduzido

Com `prefers-reduced-motion`, o conteúdo **continua aparecendo** — some só o deslocamento, a transição e o atraso. Desligar a revelação inteira esconderia a página; essa é a inversão que o padrão evita.

## O que o consumidor fornece

O elemento e, opcionalmente, o limiar e o degrau de atraso.
