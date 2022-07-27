const openMenu = document.querySelector('.open');
const closeMenu = document.querySelector('.close');
const menu = document.querySelector('.menu-lightbox');
const indexPage = document.querySelector('.navigation');

// openMenu.addEventListener('click', menuOpen => {
//     if(menu.style.display === 'none' ){
//         indexPage.style.display === 'none'
//     }
// });


document.querySelector('.open_menu').addEventListener("click", menuOpen);

function menuOpen() {
    document.querySelector('.menu-lightbox').style.display = 'block';
    document.querySelector('.navigation').style.display = 'none';
    document.querySelector('.open_menu').style.display = 'none';
    // document.querySelector('.close_menu').style.display = 'block';
}



