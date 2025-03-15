// Toggle mobile menu
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

// Sticky header
window.addEventListener("scroll", () => {
    let header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 100);
});

// Smooth scrolling for links
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        let targetId = this.getAttribute("href").substring(1);
        let targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});

// Highlight active section in navbar
window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".navbar a");

    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector('.navbar a[href*=' + id + ']').classList.add("active");
            });
        }
    });
});

