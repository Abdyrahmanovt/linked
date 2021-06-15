const burgerMenu = document.querySelector('.mobile-menu')
const topMenu = document.querySelector('.top-menu')

burgerMenu.addEventListener('click', () => {
    topMenu.classList.toggle('show')
})


const menuLinks = document.querySelectorAll('.top-menu a')
menuLinks.forEach(item => item.addEventListener('click', () =>{
    topMenu.classList.remove('show')
}))