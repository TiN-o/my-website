// script js content

const navLink = document.querySelectorAll('#navLink')

navLink.forEach(link =>{
    link.addEventListener('click', ()=>{
        navLink.forEach(navigationLink =>{
            navigationLink.classList.remove('active')
        })
        link.classList.add('active')
    })
})