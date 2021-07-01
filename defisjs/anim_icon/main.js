let count = 0;

function balanceScale() {
    setInterval(function() {
        let banlanceDiv = document.querySelector('#balanceIcon');
        let entities = ['&#xf24e', '&#xf515', '&#xf24e', '&#xf516'];
        banlanceDiv.innerHTML = entities[count % 4];
        count ++;
    }, 300);
}
balanceScale();


function lockUnlock() {
    setInterval(function() {
        let lockDiv = document.querySelector('#lockIcon');
        let entities = ['&#xf023', '&#xf3c1'];
        lockDiv.innerHTML = entities[count % 2];
    }, 500);
}
lockUnlock();


function wheelChair() {
    let windDiv = document.querySelector('#windIcon');
    windDiv.innerHTML = '&#xf72e';
    windDiv.style.transform = 'rotate(180deg)';

    let wheelDiv = document.querySelector('#wheelIcon');
    wheelDiv.innerHTML = '&#xf193';

    let div = document.querySelector('#chairAnim');

    setInterval(function() {
        div.style.marginLeft = (count * 10)%1000 + 'px';
    }, 800);
}
wheelChair();