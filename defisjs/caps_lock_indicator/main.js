let warning = document.querySelector('#warning');

document.getElementById("input").addEventListener("keyup", function(event) {
    let keys = [];
    let str = "";

    if(event.getModifierState("CapsLock")) {
        keys.push("CapsLock");
    }
    if(event.getModifierState("NumLock")) {
        keys.push("NumLock");
    }

    keys.forEach(k => {
        str += k + ', ';
    })

    str += ' activated';

    warning.style.display = keys.length > 0  ? 'block' : 'none';
    warning.textContent = str;
})
