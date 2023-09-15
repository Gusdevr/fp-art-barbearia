
AOS.init();

let lastScroll = 0;
const scrollHeader = document.querySelector(".scroll-header");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        scrollHeader.classList.add("show");
    } else {
        scrollHeader.classList.remove("show");
    }

    if (currentScroll <= 0) {
        scrollHeader.style.backgroundColor = "";
    } else {
        scrollHeader.style.backgroundColor = "";
    }

    lastScroll = currentScroll;
});


function menuShow() {
    let menuMobile = document.querySelector('.menu-nav');
    if (menuMobile.style.display === 'block') {
      menuMobile.style.display = 'none';
      document.querySelector('.icon').src = "assets/img/menu.png"
    
    } else {
      menuMobile.style.display = 'block';
      document.querySelector('.icon').src = "assets/img/closeicon.png"
     
    }
  }
  











