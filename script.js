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

const botao = document.querySelector('.buttonCarrinho');


function adicionarCarrinho() {
  togglemodal(event);
  const caixaModal = document.querySelector('.modal');
  const nomeProduto = document.querySelector('.teddy-text h1').textContent;
  const imgProduto = document.querySelector('.teddy-image img').currentSrc;
  const precoProduto = document.querySelector('.teddy-text h2').textContent;
  const qntProduto = document.querySelector('.teddy-qnt #numeric');

  const divCarrinho = document.createElement("div");
  divCarrinho.className = 'produtoCarrinho';
  const imgCarrinho = document.createElement("img");
  const tituloCarrinho = document.createElement("h1");
  const precoCarrinho = document.createElement("p");
  const removeCarrinho = document.createElement("button");
  const continueCheck = document.createElement("button");
  const qntCarrinho = document.createElement("input");
  caixaModal.appendChild(divCarrinho);
  divCarrinho.appendChild(continueCheck);
  divCarrinho.appendChild(imgCarrinho);
  divCarrinho.appendChild(tituloCarrinho);
  divCarrinho.appendChild(precoCarrinho);
  divCarrinho.appendChild(removeCarrinho);
  divCarrinho.appendChild(qntCarrinho);
  continueCheck.setAttribute("class", 'continueCheck')
  continueCheck.innerHTML = 'Continue to Checkout';
  removeCarrinho.setAttribute("class", 'removeCarrinhoBottaox')
  imgCarrinho.setAttribute("src", imgProduto);
  tituloCarrinho.innerHTML = nomeProduto;
  precoCarrinho.innerHTML = precoProduto;
  removeCarrinho.innerHTML = 'Remover';
  qntCarrinho.setAttribute("type", "number");
  qntCarrinho.setAttribute("min", 1);
  qntCarrinho.setAttribute("value", 1);
  const removerProduto = document.querySelector('.removeCarrinhoBottaox');
  removerProduto.addEventListener('click', removeProdutoCarrinho);
  function removeProdutoCarrinho(event) {
    const removeProdutoCarrinhoFilho = this.parentNode;
    caixaModal.removeChild(removeProdutoCarrinhoFilho);
    location.reload();
  }
  botao.removeEventListener('click', adicionarCarrinho);
  botao.addEventListener('click', togglemodal);
}




botao.addEventListener('click', adicionarCarrinho)