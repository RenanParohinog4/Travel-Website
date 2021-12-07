let searchBtn = document.querySelector('#search-btn')
let searchBar = document.querySelector('.search-bar-container')
let formBtn = document.querySelector('#login-btn')
let loginForm = document.querySelector('.login-form-container')
let formClose = document.querySelector('#form-close')
let menuBars = document.querySelector('#menu-bars')
let navBar = document.querySelector('.navbar')

let vidBtn = document.querySelectorAll('.vid-btn')

menuBars.addEventListener('click', () =>{
    menuBars.classList.toggle('fa-times')
    navBar.classList.toggle('active')
})
searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times')
    searchBar.classList.toggle('active')
})

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active')
})
formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active')
})

vidBtn.forEach(btn =>{
    btn.addEventListener('click', ()=> {
        document.querySelector('.controls .alive').classList.remove('alive');
        btn.classList.add('alive')
        let src = btn.getAttribute('data-src')
        document.querySelector('#video-slider').src = src;
    })
})

var swiper = new Swiper(".testemonial-slider", {
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    }
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});