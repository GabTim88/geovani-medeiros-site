# CarrosselContinuo

Faixa horizontal que rola sozinha, da direita para a esquerda. Carrega os depoimentos na home e na página de contratação.

## A decisão de implementação

Rola por `scrollLeft` com `requestAnimationFrame`, **não** por `transform`. O motivo é prático: com scroll nativo o arrasto por toque no celular funciona de graça, com a inércia do próprio sistema. Com `transform` seria preciso reimplementar momentum na mão.

## Loop sem salto

A lista é renderizada duas vezes e o scroll volta ao cruzar o ponto de emenda. A distância do loop é **medida** — `offsetLeft` do segundo grupo menos o do primeiro — e não estimada como metade do `scrollWidth`.

A diferença importa: metade do `scrollWidth` não inclui o gap entre os dois grupos, o que produz um tranco de meio gap a cada volta. Com `gap-8` isso é um salto visível de 16px.

## Pausa

Pausa no repouso do mouse, no foco por teclado e durante o toque ou arrasto — retomando 2s depois de soltar. No celular, onde hover não existe, quem pausa é o toque (`pointerdown`).

A pausa mora em uma ref, não em estado: alternar estado reiniciaria o loop de animação a cada entrada do ponteiro.

## A armadilha do sub-pixel

O avanço por quadro é fração de pixel: a 28px/s em 60fps dá 0,46px. `scrollLeft` arredonda, então **somar sobre o valor lido de volta do elemento descarta o resto a cada quadro** e a faixa fica parada. A 32px/s (0,53px) ela passa raspando do limiar e anda — o que fazia o bug parecer exclusivo de uma das páginas.

A posição real mora em uma ref de ponto flutuante; o elemento só recebe o valor. E como a nossa própria escrita dispara `onScroll`, o handler compara o `scrollLeft` com o último valor escrito e ignora a diferença abaixo de 1,5px — sem isso o arredondado voltaria para a ref e o problema reapareceria.

## Acessibilidade

- `role="region"` com rótulo, e `tabIndex={0}` para permitir navegação por teclado.
- A cópia do loop é marcada `aria-hidden`: o leitor de tela lê cada item uma vez só.
- Com `prefers-reduced-motion`, não anima — vira uma faixa rolável comum.

## O que o consumidor fornece

Os cards, o rótulo da região e, opcionalmente, a velocidade em pixels por segundo. O site usa 32 na home e 28 na contratação.
