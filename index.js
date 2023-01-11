





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





const swiper = new Swiper('.swiper', {
    autoplay :{
        delay:3000,
        disableOnInteraction:false,
    },
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
        clickable:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
});

//second swiper
var swiper2 = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    // centerSlide: 'true',
    // fade: 'true',
    // grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    // breakpoints: {
    //   0: {
    //     slidesPerView: 1,
    //   },
    //   100: {
    //     slidesPerView: 2,
    //   },
    //   950: {
    //     slidesPerView: 3,
    //   },
    // },
  });



