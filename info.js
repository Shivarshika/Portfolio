const img = document.querySelector(".imgitem img");

img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.1)";
});

img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
});
const form = document.getElementById("contactForm");
const status = document.getElementById("status");

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