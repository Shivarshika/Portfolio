const img = document.querySelector(".imgitem img");
if (img) {
    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.1)";
    });
    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    });
}

const form = document.getElementById("contactForm");
const status = document.getElementById("status");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("displaymessage").value.trim();

        if (!name || !email || !subject || !message) {
            status.textContent = "Please fill all fields!";
            status.className = "error";
            return;
        }

        status.textContent = "Message sent successfully!";
        status.className = "success";

        form.reset();

        setTimeout(() => {
            status.textContent = "";
            status.className = "";
        }, 3000);
    });
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar ul");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });

    document.querySelectorAll(".navbar ul li a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
        });
    });
}