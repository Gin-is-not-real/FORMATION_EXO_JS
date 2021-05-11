//Code à faire ici
function randomAndVerify() {
    let rand = Math.floor(Math.random() * 10);

    if(rand >= 4 && rand <= 6) {
        return false;
    }
    else {
        return true;
    }
}

