const openMenu = document.querySelector('.open_menu');
const closeMenu = document.querySelector('.close_menu');
const menu = document.querySelector('.menu-lightbox');





document.querySelector('.open_menu').addEventListener("click", fromServices);

function fromServices() {
    menu.style.display = 'block';
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
    .style.display = 'none';
    
    
    
    

    menu.classList.add('active');
}