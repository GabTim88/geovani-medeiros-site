/**
 * Fonte única dos depoimentos (home e /contratacao consumiam cópias divergentes).
 *
 * Origem: public/depoimentos.txt, enviado pelo cliente.
 * Os depoimentos anteriores, de procedência não confirmada, foram removidos.
 *
 * REGRA: `quote` é declaração atribuída a pessoa real — não reescrever.
 * `quoteShort` é recorte literal usado nos cards de /contratacao.
 *
 * Três exceções, todas sinalizadas no item correspondente:
 * emojis removidos e o nome do artista grafado corretamente no depoimento da
 * Janaína, e os textos do Carlos Eduardo e da Marisa Melo condensados a pedido
 * do cliente.
 */

export interface Testimonial {
  quote: string;
  quoteShort: string;
  name: string;
  /** Opcional: nem todo depoimento veio com cidade. */
  location?: string;
  /** Tipo de evento — etiqueta nos cards de contratação. */
  context: string;
}

export const testimonials: Testimonial[] = [
  {
    // Emojis removidos e "Giovani" grafado como "Geovani"; texto inalterado.
    quote:
      "Que trabalho incrível! Sua voz e seu violão deixaram a recepção do nosso casamento ainda mais especial e emocionante. Além do seu talento, queremos registrar nosso agradecimento pelo envolvimento e pela forma como você interagiu com nossos convidados, criando um ambiente leve, acolhedor e cheio de alegria. Foi muito especial ver nossos convidados cantando, se envolvendo e aproveitando cada momento ao som da sua música. Obrigada pelo carinho, profissionalismo e por fazer parte de um dia tão importante para nós. Você tornou nossa celebração ainda mais inesquecível!",
    quoteShort:
      "Sua voz e seu violão deixaram a recepção do nosso casamento ainda mais especial. Foi muito especial ver nossos convidados cantando e aproveitando cada momento ao som da sua música.",
    name: "Janaína",
    location: "Barbacena/MG",
    context: "Casamento",
  },
  {
    quote:
      "O Geovani é um cantor incrível! Faz 5 anos que canta em nossa casa, e sempre dá um espetáculo. Vai chegando o final de semana e diversos clientes vão perguntando: “É o Geovani que canta nesse final de semana? Quero ver ele!”. Muitos clientes frequentam nossa pizzaria por causa dele. Sempre animado, disposto, curtindo com os clientes. Um cara extremamente profissional! É um prazer ter essa parceria em nossa casa!",
    quoteShort:
      "Faz 5 anos que canta em nossa casa, e sempre dá um espetáculo. Muitos clientes frequentam nossa pizzaria por causa dele. Um cara extremamente profissional!",
    name: "Felipe Tostes — Piu Sapore Pizzeria",
    location: "Tiradentes/MG",
    context: "Bar e restaurante",
  },
  {
    // Condensado a pedido do cliente (marcação em public/depoimentos.txt).
    // TODO(cliente): validar esta versão com o Carlos Eduardo antes de publicar.
    quote:
      "Há mais de 15 anos, Geovani é o músico da nossa festa familiar anual. Além de excelente instrumentista e cantor, com domínio de diferentes estilos, ele percebe rapidamente o clima da festa e envolve os convidados de forma natural. Depois de tantos anos, lembra das preferências musicais de cada um da família e está sempre disposto a atender pedidos especiais. Todos os anos ele é novamente requisitado e aguardado com entusiasmo. Já não é apenas o músico da festa — é parte da nossa história.",
    quoteShort:
      "Há mais de 15 anos, Geovani é o músico da nossa festa familiar anual. Já não é apenas o músico da festa — é parte da nossa história.",
    name: "Carlos Eduardo",
    location: "Família Couto de Araújo",
    context: "Festa familiar",
  },
  {
    // NÃO consta em public/depoimentos.txt. Mantido porque não foi apontado
    // como fabricado — confirmar a procedência ou remover.
    // TODO(cliente): confirmar autoria e autorização de uso.
    quote:
      "Geovani é um artista extremamente versátil e talentoso! Sua capacidade de tocar e interpretar diferentes estilos e músicas nacionais é impressionante. Mesmo sozinho, consegue criar uma sonoridade completa, com a presença e a energia de uma verdadeira banda. Além de tocar muito bem, tem um repertório diversificado, carisma e uma excelente interação com o público, tornando qualquer evento mais especial e animado. Um músico que certamente recomendo para quem busca qualidade, versatilidade e uma ótima experiência musical!",
    quoteShort:
      "Mesmo sozinho, consegue criar uma sonoridade completa, com a presença e a energia de uma verdadeira banda. Recomendo para quem busca qualidade e versatilidade.",
    name: "Edgard Barros do Amaral",
    location: "Belo Horizonte/MG",
    context: "Evento privado",
  },
  {
    // Digitação corrigida ("o que o que" -> "o que"; "extraordinaria" ->
    // "extraordinária"); texto do cliente inalterado fora isso.
    quote:
      "Simplesmente fantástico, entrega muito mais do que o esperado, ultra profissional, pontual e altíssimo astral, e a banda é extraordinária. Nosso casamento não seria o mesmo sem Geovani e Banda.",
    quoteShort:
      "Simplesmente fantástico, entrega muito mais do que o esperado, ultra profissional, pontual e altíssimo astral. Nosso casamento não seria o mesmo sem Geovani e Banda.",
    name: "Hugo Felipe",
    location: "Betim/MG",
    context: "Casamento",
  },
  {
    quote:
      "Em Tiradentes, esse ano, nos encantamos pela cidade e tivemos a oportunidade de assistirmos ao seu show: encantamento em dose dupla! Obrigada por aceitar o nosso convite, organizar a sua agenda e vir a Patrocínio para o aniversário do meu marido! Foi lindo!",
    quoteShort:
      "Em Tiradentes, esse ano, nos encantamos pela cidade e tivemos a oportunidade de assistirmos ao seu show: encantamento em dose dupla! Foi lindo!",
    name: "Adenilda",
    location: "Patrocínio/MG",
    context: "Aniversário",
  },
  {
    // Condensado a pedido do cliente: 722 caracteres e dois parágrafos deixavam
    // o card com quase o dobro da altura dos demais. São só cortes — nenhuma
    // palavra foi acrescentada ao que a Marisa escreveu.
    // TODO(cliente): validar esta versão com a Marisa antes de publicar.
    quote:
      "Ter o Geovani cantando no meu casamento foi, sem dúvida, um momento muito especial para mim. Sempre admirei o seu trabalho, seu talento e a forma como ele consegue transmitir tanta emoção através da música. Sempre falava que, quando eu me casasse, ele seria uma das pessoas que eu chamaria. E foi exatamente assim! Ele encantou a mim e aos nossos convidados, com seu carisma, sua voz e uma energia maravilhosa. Sou muito grata por esse momento!",
    quoteShort:
      "Ter o Geovani cantando no meu casamento foi um momento muito especial. Ele encantou a mim e aos nossos convidados, com seu carisma, sua voz e uma energia maravilhosa. Foi uma alegria enorme ter o Geovani fazendo parte da nossa história!",
    name: "Marisa Melo",
    location: "Alfredo Vasconcelos/MG",
    context: "Casamento",
  },
];
