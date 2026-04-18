// ── IMAGE HOVER EFFECT ──
const img = document.querySelector(".imgitem img");
if (img) {
    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.1)";
    });
    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    });
}

// ── HAMBURGER MENU ──
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("open");
        navMenu.classList.toggle("open");
    });

    // Close menu when a nav link is clicked
    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("open");
            navMenu.classList.remove("open");
        });
    });
}

// ── CONTACT FORM ──
const form = document.getElementById("contactForm");
const status = document.getElementById("status");

if (form && status) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name    = document.getElementById("name").value.trim();
        const email   = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("displaymessage").value.trim();

        // Validation
        if (!name || !email || !subject || !message) {
            status.textContent = "⚠️ Please fill in all fields before sending!";
            status.className = "error";
            return;
        }

        // Email format check
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            status.textContent = "⚠️ Please enter a valid email address!";
            status.className = "error";
            return;
        }

        // Success
        status.textContent = "✅ Thank you, " + name + "! Your message has been sent successfully.";
        status.className = "success";

        form.reset();

        // Clear message after 4 seconds
        setTimeout(() => {
            status.textContent = "";
            status.className = "";
        }, 4000);
    });
}