const openMenu = document.querySelector('.open_menu');
const closeMenu = document.querySelector('.close_menu');
const menu = document.querySelector('.menu-lightbox');
const indexPage = document.querySelector('.navigation');
const contactPage = document.querySelector('.contact-container');
const servicesPage = document.querySelector('.wrapper');
const form = document.querySelector('.form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const subjectLine = document.getElementById('subject');
const messageArea = document.getElementById('message');
const submitBtn = document.getElementById('btn');
const formActive = document.querySelector('.form')




document.querySelector('.open_menu').addEventListener("click", menuOpen);

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


// ERRORS

const error = document.querySelector('error')
const errorMessage = document.getElementById('errorMessage');
const errorIcon = document.querySelector('.fas')
const success = document.querySelector('.success')


form.addEventListener('submit', e => {
    if (firstName.value != '' && lastName.value != '' && email.value != '' && subjectLine.value != '' && messageArea.value != '') {
        success.style.visibility = 'visible'

        setTimeout(() => {
            success.style.visibility = 'hidden'
            // window.location.href = 'index.html'
        }, 3000)
    }


});

