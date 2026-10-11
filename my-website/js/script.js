// skills array

// const mySkillsArray = [
//     {
//         image: '/my-website/asserts/images/industrial-automtion.png',
//         title: 'Relay Logic Simulation'
//     },
//     {
//         image: '/my-website/asserts/images/data-analytics.png',
//         title: 'Data Analytics'
//     },
//     {
//         image: '/my-website/asserts/images/we-developement.png',
//         title: 'Web Developement'
//     },
//     {
//         image: '/my-website/asserts/images/plc-hmi.jpg',
//         title: 'PLC programming and HMI Design'
//     }
// ];

const navLink = document.querySelectorAll('#navLink')
const toggleMenu = document.querySelector('.toggleMenu')
const toggleDarkMode = document.querySelector('.toggle-dark-light')

// skills slider
// const skillImage = document.querySelector('.skill-image');
// const skillTitle = document.querySelector('.skill-title');
// const previousButton = document.querySelector('.previous-image');
// const nextButton = document.querySelector('.next-image');
// const dateOfYear = document.querySelector('.date')

// DOM loading
// let currentValue = 0;
// window.addEventListener('DOMContentLoaded', ()=>{
//     showSkillDetail(currentValue)
// });

// function showSkillDetail(){
//     const currentItem = mySkillsArray[currentValue];
//     skillImage.src = currentItem.image;
//     skillTitle.textContent = currentItem.title;
// };

// previousButton.addEventListener('click', ()=>{
//     currentValue --;
//     if(currentValue < 0){
//         currentValue = mySkillsArray.length - 1;
//     }
//     showSkillDetail(currentValue);
// });

// nextButton.addEventListener('click', ()=>{
//     currentValue ++;
//     if(currentValue > mySkillsArray.length -1){
//         currentValue = 0;
//     }
//     showSkillDetail(currentValue);
// });

// adding the active class to  a navigation link
navLink.forEach(link =>{
    link.addEventListener('click', ()=>{
        navLink.forEach(navigationLink =>{
            navigationLink.classList.remove('active')
        })
        link.classList.add('active')
    })
})

// open and close navigation menu
toggleMenu.addEventListener('click', ()=>{
    toggleMenu.classList.toggle('open-navigation')
    // toggleMenu.classList.remove('ti-menu-deep')
    // toggleMenu.classList.add('ti-x')
})

// dark and light mode toggling
toggleDarkMode.addEventListener('click', ()=>{
    console.log('clicked!')
    document.body.classList.toggle('light-mode')
})

// footer date 
dateOfYear.innerHTML = new Date().getFullYear()