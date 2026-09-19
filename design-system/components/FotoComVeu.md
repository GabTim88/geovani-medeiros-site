# FotoComVeu

Foto sangrada atrás de uma seção, coberta por um véu de cor sólida. É como Mídia, Agenda e os dois blocos de CTA ganham atmosfera sem perder legibilidade.

## A regra do véu

**88% é o piso, não uma sugestão.** Abaixo disso o kicker dourado reprova AA sobre os pontos claros da foto.

| Véu | Kicker dourado |
| --- | --- |
| 82% | 3,9:1 — falha |
| 85% | 4,3:1 — falha |
| **88%** | **4,7:1 — passa** |

`veil-dark` em seção escura, `veil-burn` em bloco de CTA. O véu terracota existe para o bloco de CTA não perder a identidade de cor ao ganhar foto.

## Como medir uma foto nova

Componha a foto com o véu e meça o contraste contra o **percentil 99** de luminância, não contra o pixel mais claro: um brilho isolado — um sol estourado, um refletor — não deve forçar o design inteiro a um véu de 92%.

## Regras

- A foto é decorativa: `alt=""` e `aria-hidden="true"`. O conteúdo está no texto por cima.
- O conteúdo vai em `position: relative` com `z-index: 10`; sem isso ele fica atrás do véu.
- Texto de apoio sobe para `paper-muted` a 0,90. O 0,80 de superfície lisa reprova sobre foto.
- `object-position` centralizado por padrão.

## O que o consumidor fornece

A foto e a cor do véu. Nada mais é configurável — as opacidades pertencem ao sistema.
