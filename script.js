// Scroll to section from navigation bar
const sections = document.querySelectorAll(".header-nav a");

for (const section of sections) {
    section.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}

// Scroll down from header
const scrollDown = document.getElementById("down-btn");
scrollDown.addEventListener("click", downHandler);

function downHandler() {
    const offsetTop = document.getElementById("about").offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}

// Fade-in animation initialize
AOS.init();

// connect calendly
// connect medium
// discord?
// website images inside screen
// nav fixed
// contact icons fixed
// social media links in bubbles inside header
// bounce in animation


