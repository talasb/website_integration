// Obtenez le bouton de menu et le menu de navigation
const navBtn = document.querySelector('.btn-mobile');
const navMenu = document.querySelector('.nav-menu');

navBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu'); // ajoute/enlève la classe 'show-menu' au menu
});