// script js content

const navLink = document.querySelectorAll('#navLink')
const toggleMenu = document.querySelector('.toggleMenu')
const toggleDarkMode = document.querySelector('.toggle-dark-light')

navLink.forEach(link =>{
    link.addEventListener('click', ()=>{
        navLink.forEach(navigationLink =>{
            navigationLink.classList.remove('active')
        })
        link.classList.add('active')
    })
})

toggleMenu.addEventListener('click', ()=>{
    toggleMenu.classList.toggle('open-navigation')
    // toggleMenu.classList.remove('ti-menu-deep')
    // toggleMenu.classList.add('ti-x')
})

toggleDarkMode.addEventListener('click', ()=>{
    console.log('clicked!')
    document.body.classList.toggle('light-mode')
})