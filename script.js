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

const botaoAbrir = document.querySelector('[data-modal="abrir"]');
const botaoFechar = document.querySelector('[data-modal="fechar"]');
const containerModal = document.querySelector('[data-modal="container"]'); //div modal

function togglemodal(event) {
  event.preventDefault();
  containerModal.classList.toggle('ativo')
}
function cliqueForaModal(event) {
  if (event.target === this) { // se eu clicar no modal (parte escura), ele fecha.
    togglemodal(event);
  }
}
botaoAbrir.addEventListener('click', togglemodal);
botaoFechar.addEventListener('click', togglemodal);
containerModal.addEventListener('click', cliqueForaModal);



const products = document.querySelectorAll('.all-toys a')
const tamanhoAllToys = document.querySelector('.all-toys')

const arrayRandom = [];
var y = ''
function relatedProducts(event) {
  event.preventDefault();
  if (window.location.href.includes('product') === true) {
    while (arrayRandom.length < 4) {
      const random = Math.floor(Math.random() * products.length);
      if (!arrayRandom.includes(random)) {
        arrayRandom.push(random)
      }
    }
    tamanhoAllToys.style.height = '400px';
  }
  arrayRandom.forEach((random) => {
    products[random].removeAttribute("id");
  })
}
window.addEventListener('load', relatedProducts)

