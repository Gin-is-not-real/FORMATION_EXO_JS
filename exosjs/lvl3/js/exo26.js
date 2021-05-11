//Code à faire ici
let string = "";

function testStringLength(str) {
    if(str.length > 15) {
        return false;
    }
    else {
        return true;
    }
}

console.log(testStringLength("bonjour"));
console.log(testStringLength("bonjour tout le monde"));