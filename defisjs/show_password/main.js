const input = document.getElementById("input");
let textDisplay = document.querySelector('#display');
let checkbox = document.getElementById('checkbox');

// document.getElementById('checkbox').addEventListener('click', function(){
//     input.type = input.type == 'password' ? 'text' : 'password';
//     document.querySelector('#display').textContent = input.type == 'password' ? 'Show' : 'Hidde';
// })

checkbox.addEventListener('mousedown', function(){
    input.type = 'text';
    textDisplay.textContent = 'Hidde';
})
checkbox.addEventListener('mouseup', function(){
    input.type = 'password';
    textDisplay.textContent = 'Show';
})
