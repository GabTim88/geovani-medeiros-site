# Logotipos

A marca é uma assinatura em uma linha, com proporção de aproximadamente 2,73:1.
Os arquivos de origem são PNG com transparência, 3000×3000 — quadrados, com a
arte ocupando só a faixa central. **68% da tela é área vazia.**

Isso importa: usado direto como quadrado, o logotipo aparece minúsculo no meio
de um vazio enorme. Para tela, use a versão aparada.

## Qual usar

| Arquivo | Quando |
| --- | --- |
| `LOGO-GEOVANI-MEDEIROS.png` | Dourado (`#fabb48`). O padrão. Sobre fundo escuro, vídeo ou foto com véu |
| `LOGO-GEOVANI-MEDEIROS-BRANCA.png` | Onde o dourado não separa do fundo |
| `LOGO-GEOVANI-MEDEIROS-PRETA.png` | Sobre creme e fundos claros |
| `LOGO-GEOVANI-MEDEIROS-VINHO.png` | Aplicações impressas sobre claro |
| `logo-geovani-medeiros-hero.png` | **Derivado.** Aparado e reduzido a 1600×585 para o hero do site |

O dourado da marca (`#fabb48`) é mais saturado que o token `gold` (`#d5bf86`).
São coisas diferentes: `gold` é cor de interface, o dourado do logotipo é da
marca. Não substitua um pelo outro.

## Regras

- No hero da home o logotipo **é o `<h1>`**, com `alt="Geovani Medeiros"`. A
  hierarquia semântica não depende de JavaScript.
- Nunca recolorir, distorcer, inclinar ou aplicar sombra.
- Margem livre mínima em volta: a altura da assinatura.
- Sobre foto, sempre com véu — ver o componente `FotoComVeu`.
