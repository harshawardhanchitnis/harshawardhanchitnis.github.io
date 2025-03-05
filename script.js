// ============================
// Sticky Navbar Scroll Effect
// ============================
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(255, 165, 0, 0.9)"; // Slightly transparent Golden Orange
    } else {
        navbar.style.background = "#FFA500"; // Full Golden Orange
    }
});

// ============================
// Smooth Scroll for Navbar Links
// ============================
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// ============================
// Interactive Skill Cards (Show Tooltip on Hover)
// ============================
document.querySelectorAll('.icon-wrapper').forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        skill.querySelector('.skill-label').style.display = "block";
    });
    skill.addEventListener('mouseleave', () => {
        skill.querySelector('.skill-label').style.display = "none";
    });
});

// ============================
// Scroll Reveal Animation (For Sections)
// ============================
document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll(".container");

    function revealOnScroll() {
        sections.forEach(section => {
            let sectionPosition = section.getBoundingClientRect().top;
            let screenPosition = window.innerHeight / 1.2; // Adjust scroll threshold

            if (sectionPosition < screenPosition) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run once on load
});


