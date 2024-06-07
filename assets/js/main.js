// SCROLLER LINE OF FULL WEBSITE
// let scroller = document.querySelector(".scroller");
// let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

// addEventListener("scroll", () => {
//     let scrollTop = document.documentElement.scrollTop;
//     scroller.style.width = `${(scrollTop / height) * 100}%`;
// });

let scroller = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight; 

addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    scroller.style.width = `${(scrollTop / height) * 100}%`
});



// NAVBAR
const searchButton = document.querySelector("nav .desktop-nav .link-search");
const closeButton = document.querySelector(".search-container .link-close");
const desktopNav = document.querySelector(".desktop-nav");
const searchContainer = document.querySelector(".search-container");
const overlay = document.querySelector(".overlay");

searchButton.addEventListener("click", () => {
    desktopNav.classList.add("hide");
    searchContainer.classList.remove("hide");
    overlay.classList.add("show");
})

closeButton.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})

overlay.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})


// Mobile Version

const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", () => {
    navContainer.classList.toggle("active");
})


const searchBar = document.querySelector(".mobile-search-container .search-bar");
const nav = document.querySelector(".nav-container nav");
const searchInput = document.querySelector(".mobile-search-container input");
const cancelBtn = document.querySelector(".mobile-search-container .cancel-btn");

searchInput.addEventListener("click", () => {
    searchBar.classList.add("active");
    nav.classList.add("move-up");
    desktopNav.classList.add("move-down");
})

cancelBtn.addEventListener("click", () => {
    searchBar.classList.remove("active");
    nav.classList.remove("move-up");
    desktopNav.classList.remove("move-down");
})


// BANNER TV
var swiper = new Swiper(".mySwiper", {
    // slidesPerView: "auto",
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 10,
    autoplay:{
        delay: 3500,
        disableOnlnteration: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
  });

  
// LOADING PAGE TRANSITION
let loadingTransition = () => {
    let transitionDivs = document.querySelectorAll(".trnasition > div");

    transitionDivs.forEach((el , ix) => {

        setTimeout(( ) => {
            el.style.transformOrigin = "bottom";
            el.style.transform = "scaleY(0)";
        } , 700 + (100 * ix));
    })
};
loadingTransition();