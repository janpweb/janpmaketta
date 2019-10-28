$(document).ready(function() {
    $(".hamburger").click(function() {
        $(this).toggleClass("is-active");
    });
});
//la funcion de la pagina para que baje  suavemente//

var botonHamburguesa = document.querySelector('.hamburger');

botonHamburguesa.addEventListener('click', function() {

    botonHamburguesa.classList.toggle('.is-active')
});