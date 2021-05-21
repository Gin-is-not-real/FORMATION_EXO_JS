const convert = document.querySelector("#convert");
let msg = document.querySelector("#msgToCode");
let pResult = document.querySelector("#crypted");

convert.addEventListener("click", function() {
    let code = msg.value; 
    let crypted = [];

    for(let i = 0; i < code.length; i++) {
        crypted.push(convertNumberToBinary(code.charCodeAt(i)));
    }
    pResult.textContent = binArrayToBinStr(crypted);
})

function convertNumberToBinary(number) {
    let binary = "";
    let rest = number;

    while(rest != 0) {
        binary = rest%2 + binary;
        rest = Math.floor(rest/2);
    }

    while(binary.length < 8) {
        binary = "0" + binary;
    }
    console.log(binary, rest);

    return binary;
}

function binArrayToBinStr(binArray) {
    let str = "";

    binArray.forEach(element => {
        str += element + " ";
    });
    return str;
}