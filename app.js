const burgerIcon = document.querySelector('.burger');
const menu = document.querySelector('.menu_item');


burgerIcon.addEventListener('click', function(){
    menu.classList.toggle('mobile');
})