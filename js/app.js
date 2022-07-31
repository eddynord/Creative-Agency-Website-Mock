const openMenu = document.querySelector('.open_menu');
const closeMenu = document.querySelector('.close_menu');
const menu = document.querySelector('.menu-lightbox');
const indexPage = document.querySelector('.navigation');
const contactPage = document.querySelector('.wrapper-container')


document.querySelector('.open_menu').addEventListener("click", menuOpen);

function menuOpen() {
    menu.style.display = 'block';
    indexPage.style.display = 'none';
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
    contactPage.style.display = 'none';
    

    menu.classList.add('active');
}





