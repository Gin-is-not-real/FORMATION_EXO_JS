//Code à faire ici
const pClic = document.querySelector("#clickOnMe");

pClic.addEventListener("click", function() {
    console.log('cliquer sur le paragraphe d\'id="clickOnMe"');
})

pClic.addEventListener("mouseover", function() {
    pClic.style.border = "1px solid black";
})

pClic.addEventListener("mouseleave", function() {
    pClic.style.border = "none";
})