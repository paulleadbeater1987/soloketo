document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("header");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) { // Scroll threshold = 50
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});