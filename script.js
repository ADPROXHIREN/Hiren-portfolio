document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", function () {
        sections.forEach(section => {
            let position = section.getBoundingClientRect().top;
            let screenHeight = window.innerHeight / 1.3;
            if (position < screenHeight) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0px)";
            }
        });
    });
});
