const divs = document.querySelectorAll('.scroll');

const metadeTela = window.innerHeight * 0.9 // pegando uma porcentagem da tela
function animaScroll() {
  divs.forEach((div) => {
    const divTop = div.getBoundingClientRect().top; // pega a altura da div em relação a janela
    const divVisivel = (divTop - metadeTela) < 0  // retorna true or false
    if (divVisivel) { //se for true
      div.classList.add('ativo');
    }
  })
}
animaScroll();
window.addEventListener('scroll', animaScroll)