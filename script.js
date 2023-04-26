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
const alltoys = document.querySelector('.allToysLink');
const primeiraLinha = document.querySelectorAll('.primeira-linha a');
const telaToys = document.querySelector('.all-toys');


function add1(event) {
  event.preventDefault();
  links.forEach((link) => {
    link.classList.remove('ativo')
  });
  primeiraLinha.forEach((x) => {
    if (x.classList.value === "wooden some") {
      x.classList.remove("some");
    }
    if (x.classList.value === 'stuffed') {
      x.classList.add("some")
    }
  });
  wooden.classList.add('ativo');
  newh5.innerText = 'Wooden Toys';
  caminho.appendChild(newh5);
  titulo.style.width = '200px';
  titulo.innerHTML = 'Wooden Toys';
  telaToys.style.height = '720px'

}
function add2(event) {
  event.preventDefault();
  links.forEach((link) => {
    link.classList.remove('ativo')
  });
  primeiraLinha.forEach((x) => {
    if (x.classList.value === "stuffed some") {
      x.classList.remove("some");
    }
    if (x.classList.value === 'wooden') {
      x.classList.add("some");
    }
  });
  stuffed.classList.add('ativo');
  newh5.innerText = 'Stuffed Animals';
  caminho.appendChild(newh5);
  titulo.innerHTML = 'Stuffed Animals';
  titulo.style.width = '200px'
  telaToys.style.height = '720px'
}

function add3(event) {
  event.preventDefault();
  primeiraLinha.forEach((x) => {
    x.classList.remove("some");
  });
  links.forEach((link) => {
    link.classList.remove('ativo')
  });
  alltoys.classList.add('ativo');
  newh5.innerText = '';
  caminho.appendChild(newh5);
  titulo.innerHTML = 'All Toys'
  titulo.style.width = '100px'
  telaToys.style.height = '1350px'
}

wooden.addEventListener('click', add1);
stuffed.addEventListener('click', add2);
alltoys.addEventListener('click', add3)

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

const moreAbout = document.querySelector('a[href="#more-about"]');


function scrollSlow(event) {
  event.preventDefault();

  let target = document.querySelector(this.hash); // pegando a div linkada
  target.scrollIntoView({ behavior: 'smooth' }); //aplicando o slowScroll
}
moreAbout.addEventListener('click', scrollSlow);
