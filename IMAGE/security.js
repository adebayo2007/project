const navOpener = document.querySelector("#nav-toggle-open") ;
const navCloser = document.querySelector("#nav-toggle-close") ;
const navLinks = document.querySelector('.nav-links');
const navLogo = document.querySelector('.nav-logo');
const navContainer = document.querySelector("nav");

navOpener.addEventListener("click", function () {
    // console.log('hht');
    navLinks.classList.add('open');
    navLogo.classList.add('open');
    navContainer.classList.add('open')
    this.style.display='none'
    navCloser.style.display = 'block';
})

navCloser.addEventListener("click", function () {
    // console.log('hht');
    navLinks.classList.remove('open');
    navLogo.classList.remove('open');
    navContainer.classList.remove('open')
    this.style.display='none'
    navOpener.style.display = 'block';
})