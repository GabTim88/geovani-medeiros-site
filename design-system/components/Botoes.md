# Botoes

Três formas, três papéis. O site tem poucos caminhos de conversão, então cada forma significa uma coisa só.

## Os três

**Bloco claro** — creme sólido com texto `burn`. CTA principal dentro de blocos terracota. Um por bloco.

**Contorno dourado** — borda `gold` sobre fundo escuro, preenche no hover. Ação secundária em superfície escura.

**Pílula dourada** — `radius-pill`, fundo `gold` sólido, texto `dark`. Existe em um lugar só: a consulta de data na Agenda. A forma é o que a diferencia; não replique sem motivo.

## Regras

- Rótulo em caixa alta, 0.1em de entreletra, sempre com verbo: "Pedir meu orçamento", não "Enviar".
- Altura mínima de toque de 44px.
- Transição de 300ms em cor. Nunca `transform: scale`, que desloca o layout.
- Links externos com `rel="noopener noreferrer"`.
- Foco visível: contorno `gold` de 2px com 3px de afastamento.

## O que o consumidor fornece

Rótulo e destino. Os links de WhatsApp saem de `whatsappLink()`, que já monta a mensagem pré-preenchida — o lead chega com data e cidade.
