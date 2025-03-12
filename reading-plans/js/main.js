// Basic error handling.

document.addEventListener("DOMContentLoaded", () => {
    let generateButton = document.getElementById("generateButton");
    if (generateButton) {
        generateButton.addEventListener("click", generateReadingPlan);
    } else {
        console.error("Error: 'generateButton' not found in the document.");
    }
});

// Advanced mode vs basic mode. Basic mode on refresh. No Local Storage.

document.addEventListener("DOMContentLoaded", () => {
    let modeToggle = document.getElementById("modeToggle");
    let modeLabel = document.getElementById("modeLabel");

    modeToggle.checked = false;
    modeLabel.textContent = "Basic Mode";
    toggleAdvancedMode(false);

    // Set default mode
    modeToggle.addEventListener("change", () => {
        let isAdvanced = modeToggle.checked;
        modeLabel.textContent = isAdvanced ? "Advanced Mode" : "Basic Mode";

        // Show/Hide advanced elements
        toggleAdvancedMode(isAdvanced);
    });

    // Function to toggle UI elements
    function toggleAdvancedMode(isAdvanced) {
        let advancedElements = document.querySelectorAll(".advanced");
        advancedElements.forEach(element => {
            element.style.display = isAdvanced ? "block" : "none";
        });
    }
});

// Theme code
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

document.addEventListener("DOMContentLoaded", () => {
    let planDropdown = document.getElementById("planType");
    let apocryphaOption = document.getElementById("apocryphaOption");

    // Function to check if Apocrypha should be displayed
    function updateApocryphaVisibility() {
        let selectedPlan = planDropdown.value;
        if (selectedPlan === "whole-bible") {
            apocryphaOption.style.display = "block"; // Show checkbox
        } else {
            apocryphaOption.style.display = "none"; // Hide checkbox
        }
    }

    // Run function on dropdown change
    planDropdown.addEventListener("change", updateApocryphaVisibility);

    // Run function once on page load to apply the correct state
    updateApocryphaVisibility();
});

document.addEventListener("DOMContentLoaded", () => {
    let clearButton = document.getElementById("clearButton");

    clearButton.addEventListener("click", () => {
        document.getElementById("output").innerHTML = ""; // Clear output table
    });
});

async function generateReadingPlan() {
    let planType = document.getElementById("planType").value;
    
    if (!planType) {
        alert("Please select a plan type.");
        return;
    }

    switch (planType) {
        case "whole-bible":
            generateWholeBiblePlan();
            break;
        case "new-testament":
            generateNewTestamentPlan();
            break;
        case "thematic":
            generateThematicPlan();
            break;
        case "chronological":
            generateChronologicalPlan();
            break;
        default:
            alert("Invalid plan type selected.");
    }
}
