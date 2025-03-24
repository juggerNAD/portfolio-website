document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;
    const form = document.getElementById("contactForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    // Check for saved dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.checked = true;
    }

    darkModeToggle.addEventListener("change", () => {
        body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", body.classList.contains("dark-mode") ? "enabled" : "disabled");
    });

    // Show confirmation message after form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload
        fetch(form.action, {
            method: "POST",
            body: new FormData(form),
        }).then(() => {
            form.reset();
            confirmationMessage.style.display = "block";
            setTimeout(() => confirmationMessage.style.display = "none", 5000);
        });
    });
});
