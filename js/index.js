var navigation = document.getElementById("navigation");
var projects_grid = document.getElementById("projects");
var about_page = document.getElementById("about");
var contact_page = document.getElementById("contact");

var projects_divs = document.querySelectorAll(".project");

function resize_grid(elements) {
    elements.forEach(element => {
        width = element.offsetWidth + "px";
        element.style.height = width;
    });
}

resize_grid(projects_divs);

visualViewport.onresize = function() {
    resize_grid(projects_divs);
};

// Asignacion de eventos
navigation.addEventListener('click', function (event) {

    
    if (event.target.matches('#name_link')) {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    if (event.target.matches('#logo_link')) {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    if (event.target.matches('#work_link')) {
        projects_grid.scrollIntoView({ behavior: 'smooth', block: 'end'});
    }
    if (event.target.matches('#about_link')) {
        about_page.scrollIntoView({ behavior: 'smooth', block: 'end'});
    }
    if (event.target.matches('#contact_link')) {
        contact_page.scrollIntoView({ behavior: 'smooth', block: 'end'});
    }

}, false);

projects_grid.addEventListener('mouseover', function (event) {

    if (event.target.matches('.stretched-link')) {
        event.target.parentElement.querySelector('.overlay').classList.add('show');
        event.target.parentElement.querySelector('.project-heading').classList.add('show');
    }

}, false);

projects_grid.addEventListener('mouseout', function (event) {

    if (event.target.matches('.stretched-link')) {
        event.target.parentElement.querySelector('.overlay').classList.remove('show');
        event.target.parentElement.querySelector('.project-heading').classList.remove('show');
    }

}, false);

window.addEventListener('scroll', function(e) {
    if(window.scrollY <= 160)  {
        navigation.classList.remove('shadow');
    };
    if(window.scrollY > 160)  {
        navigation.classList.add('shadow');
    };
});