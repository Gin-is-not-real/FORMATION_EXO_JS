let reserdWordsToCreateVariableJS = ["var", "let", "const"];

//Code à faire ici
let textVar = "Comme son nom l'indique cette variable est variable, on peut en modifier sa valeur. Sa portée est globale, on peut la récuperer n'importe où dans son code. Si elle est crée dans une fonction (le corps d'une fonction est une portée locale) on pourras tout de même la récupérer ailleurs, même dans une autre fonction";

let textLet = "Celle ci est variable aussi, on peut la modifier, mais sa portée est locale. Declarée dans une fonction elle ne seras pas accessible ailleurs que dans celle ci. Trés utile car beaucoup de nos variables n'ont lieu d'être que dans leur fonction, et on peut avoir 2 variables du m^me nom dans son code, tant qu'elles ne se trouvent pas dans la même portée (2 fonctions peuvent avoir une variable 'resultat' par exemple, l'une n'écraseras pas l'autre, et celles ci seront détruites à la cloture de la fonction";

let textConst = "Ceci est une constante, une fois qu'on l'as crée on ne pourras que la modifier";

reserdWordsToCreateVariableJS.forEach(element => {
    console.log(element + ", type: " + typeof element);

    switch(element) {
        case "var":
            console.log(textVar);
            break;

        case "let":
            console.log(textLet);
            break;

        case "const":
            console.log(textConst);
            break;
    }
})