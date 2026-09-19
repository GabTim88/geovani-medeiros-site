<!-- Fonte de verdade dos valores: tailwind.config.ts e src/app/globals.css.
     Este diretório documenta o porquê; o código continua sendo o que roda. -->

# Terracota

O sistema visual do site de Geovani Medeiros — cantor, violonista e gaitista de
Barbacena, Minas Gerais. O site tem dois trabalhos: apresentar o artista e o
audiovisual *Um Entardecer em Tiradentes*, e converter quem chega em uma
conversa sobre data e orçamento.

## A ideia

Terracota, não laranja. A paleta veio da luz do fim de tarde mineiro — o barro,
o dourado do contraluz, o creme do papel. É uma paleta quente e baixa em
saturação, que deixa a fotografia ser o elemento mais vivo da tela.

O sistema é **editorial antes de ser interface**. Nada aqui tem cara de painel:
o respiro é largo, os cantos são quase retos, a hierarquia é feita por tamanho e
espaço em vez de caixas e sombras.

### Três princípios

**A foto manda.** Toda decisão de cor existe para a fotografia funcionar. Onde
há foto atrás de texto, o véu é calculado, não estimado — ver
[Contraste medido](#contraste-medido) abaixo.

**Um destaque por vez.** Cada seção tem uma cor de acento e só uma. Sobre creme
é o `burn`; sobre escuro é o `gold`. Nunca os dois na mesma superfície.

**O ritmo é a estrutura.** As seções alternam fundo claro e escuro de cima a
baixo. Essa alternância é o que separa os assuntos — não há divisórias, réguas
de separação nem molduras entre seções.

## Fundamentos visuais

### Cor

Cinco cores de marca e nada mais. Os tons intermediários que o site usa são
sempre a mesma cor com opacidade, nunca um novo valor.

| Token | Papel |
| --- | --- |
| `cream` | Fundo claro e texto sobre escuro |
| `dark` | Fundo escuro e texto sobre claro. É marrom-oliva, nunca preto |
| `wine` | Fundo de uma seção só, O Projeto |
| `burn` | Terracota da marca: blocos de CTA e acento sobre creme |
| `gold` | Acento sobre escuro, e a cor do logotipo |

O `wine` (`#371216`) aparece uma única vez no site inteiro. Essa escassez é o
que faz a seção do audiovisual se destacar sem precisar de nenhum outro recurso.

**Armadilha conhecida:** `burn` sobre `wine` dá 2,07:1 e some. Em qualquer
superfície wine, os separadores e acentos viram `gold` (9,22:1).

### Tipografia

Playfair Display para tudo que é voz, Inter para tudo que é informação.

O itálico do Playfair era usado como destaque dentro dos títulos. Esse padrão
está sendo retirado: os títulos das seções Mídia, Depoimentos, Galeria, Quem já
contratou, Dúvidas frequentes e Orçamento já estão com a frase inteira no mesmo
corte. Títulos novos nascem sem destaque interno.

Kickers em caixa alta com `0.2em` de entreletra marcam o início de toda seção.
São eles que dão o tom de revista.

### Espaço

O ritmo vertical é `space-24` no mobile e `space-32` no desktop — 96px e 128px.
É generoso de propósito: é o respiro que faz o site parecer editorial e não
institucional.

Container de conteúdo: `max-w-6xl` (1152px), com `space-6` de goteira. A seção
Agenda abre para 1400px porque o card precisa de largura.

### Cantos e sombras

`radius-sm` (2px) em quase tudo. O site **não usa sombra** para separar
elementos: usa borda de 1px em `hairline` sobre fundo escuro, e nada sobre
fundo claro. A única sombra existente é o realce no hover da galeria.

O `radius-pill` aparece em um único botão, o da Agenda. É deliberado: ele é o
CTA mais específico do site e o formato o diferencia dos demais.

## Contraste medido

Todos os pares abaixo foram medidos, não estimados. Os valores sobre foto usam
o percentil 99 de luminância da imagem — um brilho isolado não deve forçar o
design inteiro.

| Par | Medido | Mínimo |
| --- | --- | --- |
| `paper` sobre `dark` | 12,5:1 | 4,5 |
| `paper-muted` sobre `dark` | 8,1:1 | 4,5 |
| `ink-muted` sobre `cream` | 5,5:1 | 4,5 |
| `gold` sobre `dark` | 6,8:1 | 4,5 |
| `burn` sobre `cream` | 7,7:1 | 4,5 |
| `burn` sobre `wine` | **2,1:1** | falha — usar `gold` |
| `paper` sobre foto + `veil-dark` | 5,7:1 | 4,5 |
| `gold` sobre foto + `veil-dark` | 4,7:1 | 4,5 |
| `paper-muted` 0,80 sobre foto + `veil-burn` | **4,3:1** | falha — subir para 0,90 |

**Regra:** texto de apoio sobre superfície lisa pode ficar em `paper-muted`
(0,80). Sobre foto com véu, o mínimo é 0,90. A diferença parece pequena e é o
que separa aprovar de reprovar AA.

## Movimento

Tudo que anima respeita `prefers-reduced-motion`, e a preferência **nunca
esconde conteúdo**: ela remove deslocamento, transição e fixação, mas deixa
tudo visível de uma vez.

O revelar por scroll parte de `opacity: 0`. Isso significa que sem JavaScript a
página ficaria em branco, então existe um `<noscript>` no layout que força tudo
visível. Qualquer padrão novo que dependa de JS para aparecer precisa do mesmo
cuidado.

---

## Neste diretório

| Arquivo | O que tem |
| --- | --- |
| [`tokens.json`](tokens.json) | Todos os tokens em forma legível por máquina, com nota de uso |
| [`guidelines/fotografia.md`](guidelines/fotografia.md) | Critério de escolha, tamanhos de origem, véus e a regra do mosaico |
| [`assets/logotipos.md`](assets/logotipos.md) | Variantes do logotipo e quando usar cada uma |
| [`components/`](components/) | Seis padrões, com regras e armadilhas conhecidas |

### Componentes

- [`CabecalhoDeSecao`](components/CabecalhoDeSecao.md) — kicker, H2 e régua editorial
- [`Botoes`](components/Botoes.md) — as três formas e o papel de cada uma
- [`FotoComVeu`](components/FotoComVeu.md) — foto de fundo e a regra do véu de 88%
- [`Revelar`](components/Revelar.md) — revelação por scroll e as redes de segurança
- [`HeroSequencia`](components/HeroSequencia.md) — o palco fixo de duas fases
- [`CarrosselContinuo`](components/CarrosselContinuo.md) — faixa de depoimentos

### Onde os valores vivem no código

| Token | Arquivo |
| --- | --- |
| Cores e fontes | [`tailwind.config.ts`](../tailwind.config.ts) |
| Classes de movimento e padrões | [`src/app/globals.css`](../src/app/globals.css) |
| Dados de marca, redes e agenda | [`src/lib/site.ts`](../src/lib/site.ts) |

Ao mudar um valor, mude no código **e** aqui. Um sistema que descreve algo que
o código não faz mais é pior do que nenhum sistema.

### Previews ao vivo

Os seis componentes têm preview renderizado na versão publicada deste sistema,
fora do repositório. Este diretório carrega o texto; os previews mostram o
resultado.
