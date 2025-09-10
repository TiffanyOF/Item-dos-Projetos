var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 0,
  speed: 500,
  preventClicks: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 350,
    modifier: 1,
    slideShadows: true,
  },
  on: {
    click(event) {
      swiper.slideTo(this.clickedIndex);
    },
    slideChangeTransitionEnd() {
      const activeSlide = swiper.slides[swiper.activeIndex];
      const altText = activeSlide.querySelector('img').getAttribute('alt').toLowerCase();
      const cor = coresFundo[altText];
      if (cor) {
        document.body.style.background = `radial-gradient(circle, ${cor} 5%, #ffffff 60%)`;
      }
    }
  },
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
});
// Conteúdo do modal (sem alterações)
const conteudoModal = {
  'gremio': {
    titulo: 'Grêmio Estudantil',
    texto: 'O Grêmio Estudantil é a entidade de representação dos estudantes, responsável por organizar eventos, defender os direitos dos alunos e promover a integração na escola.',
    imagemUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Gr%C3%AAmio_FBPA_-_Escudo_2021.png'
  },

  'monitor': {
    titulo: 'Monitoria',
    texto: 'A monitoria é um programa de apoio educacional onde alunos mais experientes ajudam outros colegas com dificuldades em matérias específicas.',
    imagemUrl: 'https://placehold.co/400x300/4A90E2/FFFFFF?text=Monitoria'
  },
'jornal': {
    titulo: 'A Voz do Estudante',
    texto: 'O Projeto Jornal foi uma iniciativa para cobrir eventos da escola e da comunidade, promovendo a escrita e o jornalismo entre os alunos.',
    imagemUrl: 'https://placehold.co/400x300/F5A623/FFFFFF?text=Jornal'
  },
  'aee': {
    titulo: 'Atendimento Educacional Especializado',
    texto: 'A A.E.E. (Atendimento Educacional Especializado) oferece recursos e apoio pedagógico para alunos com necessidades especiais, garantindo uma educação inclusiva e de qualidade.',
    imagemUrl: 'https://placehold.co/400x300/BD10E0/FFFFFF?text=A.E.E.'
  },
  'anti-bullying': {
    titulo: 'Anti-Bullying',
    texto: 'O projeto Anti-Bullying promove ações e discussões para combater a violência e o assédio moral na escola, criando um ambiente mais seguro e respeitoso para todos.',
    imagemUrl: 'https://placehold.co/400x300/50E3C2/000000?text=Anti-Bullying'
  },
  'eletivas': {
    titulo: 'Eletivas',
    texto: 'As eletivas são aulas temáticas opcionais que permitem aos alunos explorar seus interesses e aprofundar conhecimentos em áreas não-curriculares.',
    imagemUrl: 'https://placehold.co/400x300/7ED321/FFFFFF?text=Eletivas'
  },
  'robotica': {
    titulo: 'Robótica',
    texto: 'O clube de robótica estimula a criatividade e o raciocínio lógico, onde os alunos aprendem a construir e programar robôs para competições e projetos.',
    imagemUrl: 'https://placehold.co/400x300/4A4A4A/FFFFFF?text=Robótica'
  },
  'pgm': {
    titulo: 'PGM',
    texto: 'PGM (Padrões de Gerenciamento) é um projeto focado em ensinar metodologias de organização e planejamento, preparando os alunos para o futuro profissional e acadêmico.',
    imagemUrl: 'https://placehold.co/400x300/F8E71C/000000?text=PGM'
  },
  'olimpiadas': {
    titulo: 'Olimpíadas do Conhecimento',
    texto: 'Participação em olimpíadas acadêmicas de diversas áreas do conhecimento, incentivando o estudo e a competição saudável entre os alunos.',
    imagemUrl: 'https://placehold.co/400x300/9013FE/FFFFFF?text=Olimpíadas'
  },
  'sibim': {  // corrigido aqui
    titulo: 'SIBIM',
    texto: 'O SIBIM (Sistema de Informação e Bibliotecas Integradas) é uma plataforma para gerenciar o acervo da biblioteca e facilitar o acesso dos alunos aos recursos de pesquisa.',
    imagemUrl: 'https://placehold.co/400x300/5903F4/FFFFFF?text=SIBIM'
  },
};
// Cores de fundo (sem alterações)
const coresFundo = {
  'jornal': 'rgb(56, 105, 161)',
  'monitor': 'rgb(66, 165, 245)',
  'gremio': 'rgba(85, 38, 140, 1)',
  'aee': 'rgb(229, 57, 53)',
  'anti-bullying': 'rgb(0, 184, 212)',
  'eletivas': 'rgb(139, 195, 74)',
  'robotica': 'rgb(96, 125, 139)',
  'pgm': 'rgb(255, 235, 59)',
  'olimpiadas': 'rgb(255, 152, 0)',
  'sibim': 'rgb(76, 175, 80)'
};
// Modal
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close-btn");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const modalImage = document.getElementById("modal-image");
// Define a cor de fundo inicial
document.body.style.background = `radial-gradient(circle, ${coresFundo['gremio']} 5%, #ffffff 60%)`;
// Adiciona evento de clique em toda a área do slide para abrir modal
swiper.slides.forEach(slide => {
  slide.addEventListener('click', () => {
    const altText = slide.querySelector('img').getAttribute('alt').toLowerCase();
    const data = conteudoModal[altText];
    if (data) {
      modalTitle.textContent = data.titulo;
      modalText.textContent = data.texto;
      modalImage.src = data.imagemUrl;
      modal.style.display = "block";
    }
  });
});
// Fecha modal ao clicar no botão X
closeBtn.addEventListener('click', () => {
  modal.style.display = "none";
});
// Fecha modal ao clicar fora do conteúdo
window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
// Fecha modal ao pressionar ESC
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.style.display === 'block') {
    modal.style.display = 'none';
  }
});

