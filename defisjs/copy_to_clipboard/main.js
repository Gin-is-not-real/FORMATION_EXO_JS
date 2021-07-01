const buttonCopy = document.getElementById("button-copy");
const buttonPaste = document.getElementById("button-paste");
let copyText = document.querySelector('#copy-text');
let pasteText = document.querySelector('#paste-text');

buttonCopy.addEventListener('click', function() {
    copyText.focus();
    copyText.select();
    document.execCommand("copy");
})

//////////////////////////////////////////////////
//BONUS
// buttonCopy.addEventListener('click', function() {
//     copyText.focus();
//     copyText.select();
//     document.execCommand("copy");
// })

// buttonPaste.addEventListener('click', function() {
//     pasteText.focus();
//     document.execCommand("paste");
//     console.log(pasteText.textContent);

//     navigator.clipboard.readText().then(clipText => pasteText.innerText = clipText);
// })

// navigator.permissions.query({name:'clipboardWrite'}).then(function(result) {
//     if (result.state === 'granted') {
//       console.log('permissed');
//     } else if (result.state === 'prompt') {
//       console.log('not permissed');
//     }
//     // Don't do anything if the permission was denied.
//   });