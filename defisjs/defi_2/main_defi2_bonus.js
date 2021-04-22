/////////////////////////////////////////
const convert = document.getElementById("convert");
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInYear = 365;

let in_unit = document.querySelector("select");
console.log(in_unit.value);
/*
    je stocke les operations dans un array pour pouvoir boucler dessus
*/
let operations = {
    "days": daysInYear,
    "hours": hoursInDay,
    "minutes": minutesInHour,
    "seconds": secondsInMinute,
};
/*
    je recupere tout les 'p' dans un array pour afficher les resultats correspondants
*/
let paragraphs = document.querySelectorAll("p");

convert.addEventListener("click", function() {
    let toConvert = document.getElementById("to-convert").value ;
    
    let result = toConvert;

    let operator = "dividor";
    /*
        boucle "for...in": a chaque tour de boucle sur le tableau "operatins", la variable result est multiplié par l'operation, et le resultat est loggué
    */
    for(let key in operations) {
        if(in_unit.value.includes(key)) {
            operator = "multiplicator";
        }

        if(operator == "multiplicator") {
            result *= operations[key];
        }
        else if(operator == "dividor") {
            result /= operations[key];
        }
        console.log(result + " " + key);
        /*
            boucle array.foreach(element => { action });
                - c'est à dire "pour chaque element du tableau => { action }";
            si l'id du 'p' contient l'index (key) en cours, on affiche le resultat avec textContent
        */
        paragraphs.forEach(p => {
            let trim_key = key.substr(1, key.length);

            if(p.id.includes(trim_key)) {
                p.textContent = result + " " + key;
            }
        })
    }
});