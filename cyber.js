const navOpener = document.querySelector("#nav-toggle-open") ;
const navCloser = document.querySelector("#nav-toggle-close") ;
const navLinks = document.querySelector('.nav-links');
const navLogo = document.querySelector('.nav-logo');
const navContainer = document.querySelector("nav");

navOpener.addEventListener("click", function () {
    console.log('hht'); 
    openSidebar();
})

navCloser.addEventListener("click", function () {
    // console.log('hht');
    closeSidebar();
   
})
navContainer.addEventListener("mouseenter",function () {
    openSidebar();
});
navContainer.addEventListener("mouseleave",function () {
    closeSidebar();
});
function openSidebar () {
  navLinks.classList.add('open');
    navLogo.classList.add('open');
    navContainer.classList.add('open')
    navOpener.style.display='none'
    navCloser.style.display = 'block';
}
function closeSidebar () {
  navLinks.classList.remove('open');
  navLogo.classList.remove('open');
  navContainer.classList.remove('open')
  navCloser.style.display='none'
  navOpener.style.display = 'block';
}