const password = document.getElementById("password");
const checkPassword = document.getElementById("check-password");
const message = document.getElementById("message");

let str = 'heazmif1';

checkPassword.addEventListener('keyup', function() {
    if(password.value != '' && checkPassword.value != '') {
        if(password.value == checkPassword.value) {
            message.innerHTML = "les mots de passe sont bien identiques !";
            message.style.color = 'green';
        }
        else {
            message.innerHTML = "les mots de passe ne sont pas identiques !";
            message.style.color = 'red';
        }
    }
    evalPasswordStrengh();
})

password.addEventListener('keyup', function() {
    evalPasswordStrengh();
})


function evalPasswordStrengh() {
    let arrayToDisplay = [];

    if(password.value.length < 8) {
        arrayToDisplay.push('le mot de passe devrait contenir 8 caracteres ');
    }

    //verifier la presence d'un nombre via RegExp
    var numPattern = new RegExp("[0-9]");
    if(!numPattern.test(password.value)) {
        arrayToDisplay.push('le mot de passe devrait contenir 1 nombre ');
    }
    //verifier la presence d'un char via RegExp
    var pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);
    if(!pattern.test(password.value)) {
        arrayToDisplay.push('le mot de passe devrait contenir 1 charactere spécial ');
    }

    // verifier la presence de maj via RegExp
    var upcasePattern = new RegExp(/[A-Z]/);
    if(!upcasePattern.test(password.value)) {
        arrayToDisplay.push('le mot de passe devrait contenir 1 majuscule ');
    }

    //verifier la presence de min via RegExp
    let lowcasePattern = new RegExp(/[a-z]+/);
    if(!lowcasePattern.test(password.value)) {
        arrayToDisplay.push('le mot de passe devrait contenir 1 minuscule ');
    }
    

    //on envoi les messages dans le html
    message.innerHTML = '';
    message.style.color = 'red';

    arrayToDisplay.forEach(entry => {
        message.innerHTML += entry + '<br>';
    })
}

/*
    8 caract
    1maj et 1min
    1chiffre
    1charactere
*/