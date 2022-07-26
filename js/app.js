const openMenu = document.querySelector('.open_menu');
const closeMenu = document.querySelector('.close_menu');
const menu = document.querySelector('.menu-lightbox');
const indexPage = document.querySelector('.navigation');

openMenu.addEventListener('click', menuOpen => {
    if(menu.style.display === 'none' ){
        indexPage.style.display === 'none'
    }
});



