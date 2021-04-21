const myBtn = document.getElementById("myBtn");
myBtn.addEventListener("click", incrementByClick);

const cntClic = document.getElementById("cntClic");

var nbClic = 0;

function incrementByClick() {
    nbClic ++;
    cntClic.textContent = nbClic;
}
