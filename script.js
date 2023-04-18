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

const wooden = document.querySelector('.woodenToys');
const links = document.querySelectorAll('.submenu-catalog a')
const stuffed = document.querySelector('.stuffedAnimals');
const caminho = document.querySelector('.caminho')
const newh5 = document.createElement('h5');
const titulo = document.querySelector('.alltoys h2');

function add1(event) {
  event.preventDefault();
  links.forEach((link) => {
    link.classList.remove('ativo')
  });
  wooden.classList.add('ativo');
  newh5.innerText = 'Wooden Toys';
  caminho.appendChild(newh5);
  titulo.style.width = '200px';
  titulo.innerHTML = 'Wooden Toys';

}
function add2(event) {
  event.preventDefault();
  links.forEach((link) => {
    link.classList.remove('ativo')
  });
  stuffed.classList.add('ativo');
  newh5.innerText = 'Stuffed Animals';
  caminho.appendChild(newh5);
  titulo.innerHTML = 'Stuffed Animals';
  titulo.style.width = '200px'
}


wooden.addEventListener('click', add1);
stuffed.addEventListener('click', add2);


