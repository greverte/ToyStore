const moreAbout = document.querySelector('a[href="#more-about"]');
function scrollSlow(event) {
  event.preventDefault();

  let target = document.querySelector(this.hash); // pegando a div linkada
  target.scrollIntoView({ behavior: 'smooth' }); //aplicando o slowScroll
}
moreAbout.addEventListener('click', scrollSlow);
