/*Sticky navbar*/
const navbar = document.querySelector("nav");

const stickyPos = navbar.offsetTop;

const toggleSticky = ()=> {
    if (window.pageYOffset >= stickyPos) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};

window.onscroll = toggleSticky;

/*Open/close navbar menu on small screens*/
const navicon = document.querySelector(".navicon");

const navLinks = document.querySelector("nav ul");

navicon.addEventListener("click", function() {
    navLinks.classList.toggle("visible");
})

/*Modal windows for Projects*/
const openModal = (modalId) => {
    let modal = document.querySelector(modalId);
    modal.style.display = "block";
} 

const closeModal = (modalId) => {
    let modal = document.querySelector(modalId);
    modal.style.display = "none";
}
window.onclick = (event) => {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
}

/*Project 1 - Reference Manager*/
const refManBtn = document.querySelector("#ref-man-btn");
refManBtn.addEventListener("click", () => {
    openModal("#ref-man-modal");
});

const refManClose = document.querySelector("#ref-man-x");
refManClose.addEventListener("click", () => {
    closeModal("#ref-man-modal");
});

/*Project 2 - To-Do List*/
const toDoBtn = document.querySelector("#to-do-btn");
toDoBtn.addEventListener("click", () => {
    openModal("#to-do-modal");
});

const toDoClose = document.querySelector("#to-do-x");
toDoClose.addEventListener("click", () => {
    closeModal("#to-do-modal");
});

/*Project 3 - Analogue Generator*/
const anaGenBtn = document.querySelector("#ana-gen-btn");
anaGenBtn.addEventListener("click", () => {
    openModal("#ana-gen-modal");
});

const anaGenClose = document.querySelector("#ana-gen-x");
anaGenClose.addEventListener("click", () => {
    closeModal("#ana-gen-modal");
});