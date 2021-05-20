let btn = document.querySelector("#btn");
let result = document.querySelector("#result");

btn.addEventListener("click", function() {
    headsOrTails();
})

function headsOrTails() {
    // let rand = Math.floor(Math.random() *2);     fonctionne aussi
    //console.log(rand);

    let rand = Math.random() *1;
    let response = rand < 0.5 ? "HEADS" : "TAILS";
    result.textContent = response;
    
}