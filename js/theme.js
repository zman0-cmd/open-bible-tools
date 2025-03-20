document.addEventListener("DOMContentLoaded", () => {
    let themeToggle = document.getElementById("themeToggle");
    let themeLabel = document.getElementById("themeLabel");

    // Check local storage for user preference
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.checked = true;
        themeLabel.textContent = "Dark Mode";
    }

    // Toggle Dark/Light Mode
    themeToggle.addEventListener("change", () => {
        let isDarkMode = themeToggle.checked;
        document.body.classList.toggle("dark-mode", isDarkMode);
        themeLabel.textContent = isDarkMode ? "Dark Mode" : "Light Mode";

        // Save preference in local storage
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    });
});