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