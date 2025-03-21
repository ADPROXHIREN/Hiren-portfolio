// JavaScript for interactive elements

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });

    // Toggle mobile menu
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Contact Form Submission (Example functionality)
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Thank you for contacting us! We will get back to you soon.");
            contactForm.reset();
        });
    }

    // Testimonial Slider (Simple Manual Slider)
    let testimonialIndex = 0;
    const testimonials = document.querySelectorAll(".testimonial");
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? "block" : "none";
        });
    }
    document.getElementById("nextTestimonial").addEventListener("click", function () {
        testimonialIndex = (testimonialIndex + 1) % testimonials.length;
        showTestimonial(testimonialIndex);
    });
    document.getElementById("prevTestimonial").addEventListener("click", function () {
        testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(testimonialIndex);
    });
    showTestimonial(testimonialIndex);
});
