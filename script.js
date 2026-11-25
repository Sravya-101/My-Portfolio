
// Welcome message in browser console
console.log("Welcome to My Portfolio!");

// Show welcome alert
window.addEventListener("load", function () {
    console.log("Portfolio website loaded successfully!");
});

// Highlight active navigation link
const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {
    link.addEventListener("click", function () {
        links.forEach(item => item.style.color = "white");
        this.style.color = "#38bdf8";
    });
});
