const player = document.getElementById('player');
const moveSize = 24;
var playerWalk = 0;

const container = document.querySelector("#gameContainer");
let s = window.getComputedStyle(container);
let containerWidth = parseInt(s.width.replace("px", ""));
let containerHeight = parseInt(s.height.replace("px", ""));

let imgFolder = "jiangshi/";

document.addEventListener("keydown", function(event) {
    let direction = "";

    if(event.code == "ArrowUp") {
        playerWalk = playerWalk + 1;
        direction = "top";

        if(player.offsetTop - moveSize >= 0) {
            player.style.top = (player.offsetTop -moveSize)+"px";
        }

    } else if(event.code =='ArrowRight') {
        playerWalk =playerWalk +1;
        direction = "right";

        if((player.offsetLeft + moveSize) <= (containerWidth - moveSize)) {
            player.style.left =(player.offsetLeft +moveSize)+"px";
        }

    } else if(event.code =='ArrowDown'){
        playerWalk =playerWalk +1;
        direction = "face";

        if(player.offsetTop + moveSize <= (containerHeight - moveSize)) {
            player.style.top =(player.offsetTop +moveSize)+"px";
        }

    }else if(event.code =='ArrowLeft'){
        playerWalk =playerWalk +1;
        direction = "left";

        if(player.offsetLeft - moveSize >= 0) {
            player.style.left =(player.offsetLeft -moveSize)+"px";
        }

    }   

    if(direction == "") {
    player.style.backgroundImage = 'url("img/' + imgFolder + 'face-1.png")';
        
    }
    else {
        player.style.backgroundImage = 'url("img/' + imgFolder + direction + '-2.png")';
        window.setTimeout(() => {
            player.style.backgroundImage = 'url("img/' + imgFolder + direction + '-1.png")';
        }, 200);
    }

    console.log(player.offsetTop, player.offsetLeft);
})

