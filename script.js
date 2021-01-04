// Smooth scroll to section from navigation bar
const sections = document.querySelectorAll(".nav-links a");

sections.forEach(section => section.addEventListener("click", clickHandler));

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });

    navSlide();
}

// Smooth scroll down from header
const scrollDown = document.getElementById("down-btn");
scrollDown.addEventListener("click", downHandler);

function downHandler() {
    const offsetTop = document.getElementById("about").offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}

// Mobile navigation slider
const menu = document.querySelector('.mobile-menu');
const nav = document.querySelector('.nav-links');
const menuIcon = document.querySelector('.mobile-menu');

function navSlide() {
    nav.classList.toggle('nav-open');
    menuIcon.classList.toggle('close');
}

menu.addEventListener('click', navSlide);

// var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
// var rootElement = document.documentElement

// function handleScroll() {
//     // do something on scroll
//     var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
//     if ((rootElement.scrollTop / scrollTotal) > 0.80) {
//         //show button
//         scrollToTopBtn.style.display = "block"
//     } else {
//         //hide button
//         scrollToTopBtn.style.display = "none"
//     }
// }

// function scrollToTop() {
//     //scroll to top logic
//     rootElement.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     })
// }
// scrollToTopBtn.addEventListener("click", scrollToTop)
// document.addEventListener("scroll", handleScroll)

// Fade-in animation initialize
AOS.init();

// connect calendly


