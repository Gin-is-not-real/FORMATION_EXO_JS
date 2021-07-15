const player = document.getElementById('player');
const moveSize = 24;
var playerWalk = 0;

const container = document.querySelector("#gameContainer");
let s = window.getComputedStyle(container);
let containerWidth = parseInt(s.width.replace("px", ""));
let containerHeight = parseInt(s.height.replace("px", ""));

let imgFolder = "jiangshi/";

let trap = document.createElement('div');
container.appendChild(trap);

document.addEventListener("keydown", function(event) {
    if(event.code == 'Space') {
        // dropObject();
        dropObjects();
    }

    let direction = "";
    if(event.code == "ArrowUp") {
        direction = "top";
    } else if(event.code =='ArrowRight') {
        direction = "right";
    } else if(event.code =='ArrowDown'){
        direction = "face";
    } else if(event.code =='ArrowLeft'){
        direction = "left";
    }   

    /*
        si le personnage est deja tourné dans la bonne direction, il avance, sinon il se tourne
    */
    if(player.style.backgroundImage.includes(direction)) {
        movePlayer(direction);
        setImageUrl(direction);
    }
    else {
        setImageUrl(direction);
    }
});


function movePlayer(direction) {
    switch(direction) {
        case 'top':
            if(player.offsetTop - moveSize >= 0) {
                player.style.top = (player.offsetTop -moveSize)+"px";
            }
            break;

        case 'right':
            if((player.offsetLeft + moveSize) <= (containerWidth - moveSize)) {
                player.style.left =(player.offsetLeft +moveSize)+"px";
            }
            break;

        case 'face': 
            if(player.offsetTop + moveSize <= (containerHeight - moveSize)) {
                player.style.top =(player.offsetTop +moveSize)+"px";
            }
            break;

        case 'left':
            if(player.offsetLeft - moveSize >= 0) {
                player.style.left =(player.offsetLeft -moveSize)+"px";
            }
            break;
    }
    playerWalk = playerWalk + 1;
}

function setImageUrl(direction) {
    if(direction != "") {
        player.style.backgroundImage = 'url("img/' + imgFolder + direction + '-2.png")';

        window.setTimeout(() => {
            player.style.backgroundImage = 'url("img/' + imgFolder + direction + '-1.png")';
        }, 200);
    }
}

function dropObject() {
    trap.style.top = player.style.top;
    trap.style.left = player.style.left;
    trap.className = "trap";
}

function dropObjects() {
        let trap = document.createElement('div');
        trap.style.top = player.style.top;
        trap.style.left = player.style.left;
        trap.className = "trap";
        container.appendChild(trap);
}


let a = 'a', b = 'b';
console.log({a, b});