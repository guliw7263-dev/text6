
function toggleMenu() {
    document.getElementById("navLinks")
        .classList.toggle("active");
}

document.getElementById("contactForm")
    .addEventListener("submit", function(event) {
        event.preventDefault();

        document.getElementById("message").textContent =
            "Xabaringiz qabul qilindi! Rahmat.";

        this.reset();
    });
