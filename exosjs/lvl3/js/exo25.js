//Code à faire ici
let input = document.getElementById("text");
let clickable = document.querySelector("[type=submit]");

clickable.addEventListener("click", function(event) {
    event.preventDefault();

    if(input.value !== "") {
        console.log("Texte non vide");
    }
    else {
        console.log("Texte vide");
    }
})
 