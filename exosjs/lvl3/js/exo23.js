//Code à faire ici
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", function() {
    toggle.className = toggle.className.includes("toggle") ? toggle.className = "" : toggle.className = "toggle";
})