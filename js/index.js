var navigation = document.getElementById("navigation");
var mobile_navigation = document.getElementById("mobile_navigation");
var work_page = document.getElementById("work");
var about_page = document.getElementById("about");
var contact_page = document.getElementById("contact");
var px_for_shadow = 1;

// Funcion para asignar animaciones a elementos, permite hacer algo cuando termina
const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, {once: true});
    });

/*
animateCSS('.my-element', 'bounce');

animateCSS('.my-element', 'bounce').then((message) => {
  // Do something after the animation
});

*/


// Asignacion de eventos
navigation.addEventListener('click', function (event) {

    if (event.target.matches('#name_link')) {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    if (event.target.matches('#logo_link')) {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    if (event.target.matches('#work_link')) {
        work_page.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }
    if (event.target.matches('#about_link')) {
        about_page.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }
    if (event.target.matches('#contact_link')) {
        contact_page.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }
}, false);

mobile_navigation.addEventListener('click', function (event) {
    var mobile_menu = document.getElementById("mobile_menu");
    var toggle_menu = document.getElementById("toggle_menu");
    

    if (event.target.matches('#work_link_mb')) {
        work_page.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }
    if (event.target.matches('#about_link_mb')) {
        about_page.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }
    if (event.target.matches('#contact_link_mb')) {
        contact_page.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }
    if (event.target.matches('#toggle_menu')) {
        animateCSS('#toggle_menu', 'bounceOut').then((message) => {
            toggle_menu.classList.toggle("hide");
            mobile_menu.classList.toggle("hide");
            animateCSS('#mobile_menu', 'fadeIn');
        });
        
    }
    if (event.target.matches('.nav-link')) {
        animateCSS('#mobile_menu', 'fadeOut').then((message) => {
            toggle_menu.classList.toggle("hide");
            mobile_menu.classList.toggle("hide");
            animateCSS('#toggle_menu', 'bounceIn');
        });
    }
}, false);

window.addEventListener('scroll', function(e) {
    if(window.scrollY <= px_for_shadow)  {
        navigation.classList.remove('shadow');
    };
    if(window.scrollY > px_for_shadow)  {
        navigation.classList.add('shadow');
    };
});