const burger = document.querySelector('.burger-button')
const navbar = document.querySelector('.content-navbar')


burger.addEventListener('click', ()=>{
    navbar.classList.toggle('active')
})