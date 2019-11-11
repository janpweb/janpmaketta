window.addEventListener('DOMContentLoaded', () => {
    var nav = document.querySelector('nav');
    nav.setAttribute('style', 'left:-100%');

    function navmenu() {
        var animenu = nav.style.left;

        if (animenu == '-100%') {
            nav.style.left = '0';
            nav.style.transition = "all 1000ms"
        } else {
            nav.style.left = '-100%';
        }
        return true;
    }


    function AnimarBoton() {
        var element = document.getElementById('hamburger-6');
        element.classList.toggle('is-active');

    }



    //scroll 
    window.addEventListener('scroll', function() {
        //alert("ha dado scroll");   
        var animenu = nav.style.left;

        if (animenu == '0px') {

            nav.style.left = '-100%';
            nav.style.transition = "all 100ms";

            AnimarBoton(false);
        }
    });
    //boton de la hamburguesa



    var botonHamburguesa = document.querySelector('.hamburger');


    botonHamburguesa.addEventListener('click', function() {
        console.log("le ha dasdo click")
        AnimarBoton();

        if (botonHamburguesa) {

            navmenu();
        }


    });
    //MODAL DESENFOQUE








});