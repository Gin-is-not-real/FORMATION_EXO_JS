let number = 15;
let text = "Je suis un texte";
let bool = false;

//Code à faire ici, on attend plus que typeof !
let typeNumber = number.constructor.name;
let typeText = text.constructor.name;
let typeBool = bool.constructor.name;

console.log(typeNumber + ", " + typeText + ", " + typeBool);