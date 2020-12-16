// connect calendly
// connect medium
// discord?
// website images inside screen
// nav fixed
// contact icons fixed
// social media links in bubbles inside header

// let skillHover = document.getElementsByClassName("skills-label");

// for (let i = 0; i < skillHover.length; i++) {
//     skillHover[i].addEventListener("mouseenter", function (event) {
//         // highlight the mouseenter target
//         console.log("hover");
//         event.target.style.opacity = 1;

//     }, false);
// }

(function () {

    let skillHover = document.getElementsByClassName("skills-label");

    for (let i = 0; i < skillHover.length; i++) {

        function showLabel(e) {
            e.target.style.opacity = 1;
        }
    
        function hideLabel(e) {
            e.target.style.opacity = 0;
        }
    
        skillHover[i].onmouseover = showLabel;
        skillHover[i].onmouseleave = hideLabel;
    }


})();

