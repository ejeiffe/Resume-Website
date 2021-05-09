/*To-Do
Modal windows for projects section.
*/

/*Sticky navbar*/
var navbar = document.querySelector("nav");

var stickyPos = navbar.offsetTop;

const toggleSticky = function() {
    if (window.pageYOffset >= stickyPos) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};

window.onscroll = toggleSticky;

/* Open/close navbar menu on small screen*/
var navicon = document.querySelector(".navicon");

var navLinks = document.querySelector("nav ul");

navicon.addEventListener("click", function() {
    navLinks.classList.toggle("visible");
})