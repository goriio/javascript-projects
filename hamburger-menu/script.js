const menuBtn = document.querySelector('.menu');
const navLinksEl = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
    navLinksEl.classList.toggle('show');
});