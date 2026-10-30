/* ============================================================
   CONTEÚDO DO SITE — para adicionar fotos novas, basta:
   1) colocar o arquivo em assets/img/
   2) acrescentar uma linha em WORKS (w e h são opcionais)
   Categorias do filtro: Retratos, Ensaios, Casamentos, Gastronomia, Maternidade
   ============================================================ */
window.WORKS = [
  { src: "assets/img/retrato-pb.jpg", cat: "Ensaios", title: "Preto e branco", w: 680, h: 1020 },
  { src: "assets/img/cantora-violao.jpg", cat: "Ensaios", title: "Ensaio com violão", w: 680, h: 1020 },
  { src: "assets/img/retrato-cinza.jpg", cat: "Retratos", title: "Retrato", w: 680, h: 1020 },
  { src: "assets/img/executiva-estudio.jpg", cat: "Retratos", title: "Retrato executivo", w: 680, h: 1020 },
  { src: "assets/img/moda-bolsa.jpg", cat: "Ensaios", title: "Moda", w: 764, h: 1020 },
  { src: "assets/img/gastronomia-burger-detalhe.jpg", cat: "Gastronomia", title: "Burger, detalhe", w: 680, h: 1020 },
  { src: "assets/img/retrato-blazer.jpg", cat: "Retratos", title: "Retrato", w: 680, h: 1020 },
  { src: "assets/img/casamento-noivo.jpg", cat: "Casamentos", title: "O noivo", w: 575, h: 863 },
  { src: "assets/img/casamento-noiva.jpg", cat: "Casamentos", title: "A noiva", w: 581, h: 853 },
  { src: "assets/img/gastronomia-fritas.jpg", cat: "Gastronomia", title: "Porção", w: 680, h: 1020 },
  { src: "assets/img/casamento-entrada.jpg", cat: "Casamentos", title: "A entrada", w: 581, h: 854 },
  { src: "assets/img/casamento-madrinhas.jpg", cat: "Casamentos", title: "Madrinhas", w: 586, h: 855 },
  { src: "assets/img/gastronomia-burger-jack.jpg", cat: "Gastronomia", title: "Burger", w: 680, h: 1020 },
  { src: "assets/img/retrato-branco.jpg", cat: "Retratos", title: "Retrato profissional", w: 680, h: 1020 },
  { src: "assets/img/retrato-terracota.jpg", cat: "Retratos", title: "Retrato editorial", w: 680, h: 1020 },
  { src: "assets/img/ensaio-baterista.jpg", cat: "Ensaios", title: "Ensaio autoral", w: 680, h: 1020 },
  { src: "assets/img/gastronomia-burger-luvas.jpg", cat: "Gastronomia", title: "Burger nas mãos", w: 680, h: 453 },
  { src: "assets/img/ensaio-rosa.jpg", cat: "Ensaios", title: "Ensaio com rosa", w: 680, h: 1020 },
  { src: "assets/img/retrato-verde.jpg", cat: "Retratos", title: "Retrato", w: 680, h: 1020 },
  { src: "assets/img/gastronomia-drink.jpg", cat: "Gastronomia", title: "Drink autoral", w: 680, h: 1020 },
  { src: "assets/img/retrato-perolas.jpg", cat: "Retratos", title: "Retrato clássico", w: 680, h: 1020 },
  { src: "assets/img/gastronomia-salmao.jpg", cat: "Gastronomia", title: "Prato", w: 680, h: 1020 },
  { src: "assets/img/ensaio-perfil.jpg", cat: "Ensaios", title: "Perfil", w: 680, h: 1020 },
  { src: "assets/img/gestante.jpg", cat: "Maternidade", title: "Gestante", w: 680, h: 1020 },
  { src: "assets/img/retrato-terno.jpg", cat: "Retratos", title: "Retrato corporativo", w: 680, h: 1020 },
];

/* Trabalhos selecionados (rolagem horizontal): h = altura em vh, y = deslocamento vertical em vh */
window.SHOWCASE = [
  { src: "assets/img/casamento-noiva.jpg",   h: 62, y: -2 },
  { src: "assets/img/retrato-pb.jpg",        h: 50, y: 9 },
  { src: "assets/img/gastronomia-drink.jpg", h: 42, y: -8 },
  { src: "assets/img/gestante.jpg",          h: 64, y: 3 },
  { src: "assets/img/retrato-terracota.jpg", h: 48, y: -9 },
  { src: "assets/img/ensaio-baterista.jpg",  h: 60, y: 6 },
  { src: "assets/img/casamento-entrada.jpg", h: 46, y: -4 },
  { src: "assets/img/gastronomia-burger-jack.jpg", h: 54, y: -6 },
  { src: "assets/img/retrato-perolas.jpg",   h: 60, y: 6 },
  { src: "assets/img/ensaio-perfil.jpg",     h: 62, y: -3 }
];

/* Serviços (img = foto que aparece ao passar o mouse) */
window.SERVICES = [
  { name: "Ensaios individuais",      img: "assets/img/ensaio-rosa.jpg" },
  { name: "Retratos e headshots",     img: "assets/img/retrato-branco.jpg" },
  { name: "Casamentos e noivados",    img: "assets/img/casamento-noiva.jpg" },
  { name: "Eventos e festas",         img: "assets/img/casamento-madrinhas.jpg" },
  { name: "Fotografia corporativa",   img: "assets/img/retrato-terno.jpg" },
  { name: "Gestantes e família",      img: "assets/img/gestante.jpg" },
  { name: "Gastronomia e produtos",   img: "assets/img/gastronomia-salmao.jpg" },
  { name: "Aluguel de estúdio",       img: "assets/img/executiva-estudio.jpg" },
  { name: "Audiovisual e conteúdo",   img: "assets/img/moda-bolsa.jpg" }
];

/* Contato — confirmar o número com a cliente */
window.CONTACT = { whatsapp: "5573999822306", phoneLabel: "(73) 99982-2306", instagram: "marquesscreative" };
