const openMenu = document.querySelector('.open_menu');
const closeMenu = document.querySelector('.close_menu');
const menu = document.querySelector('.menu-lightbox');
const indexPage = document.querySelector('.navigation');
const contactPage = document.querySelector('.wrapper-container');
const servicesPage = document.querySelector('.services-wrapper');
const form = document.querySelector('.form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const subjectLine = document.getElementById('subject');
const messageArea = document.getElementById('message')
const submitBtn = document.getElementById('btn')
const errorMessage = document.getElementById('errorMessage');
const errorIcon = document.querySelector('.fas')



// document.querySelector('.open_menu').addEventListener("click", menuOpen);

// function menuOpen() {
//     menu.style.display = 'block';
//     indexPage.style.display = 'none';
//     openMenu.style.display = 'none';
//     closeMenu.style.display = 'block';
//     contactPage.style.display = 'none';
//     // servicesPage.style.display = 'none';
//     menu.classList.add('active');
// }


// ERRORS

form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitForm();
});

function submitForm() {
    if(email.value === '') {
        errorMessage.style.display = ' block'
        errorIcon.style.display = 'block'
    } else{
        e.preventDefault()
    } 
}


    
    
    









