document.addEventListener("DOMContentLoaded", (event) => {
    window.addEventListener("resize", detectOrientation);
    detectOrientation();
});

function detectOrientation() {
    let displayContent = document.querySelector('#displayContent');
    let rotateScreen = document.querySelector('#rotateScreen');

    console.log(screen.orientation.angle);

    if(screen.orientation.angle == 90) {
        displayContent.style.display = 'block';
        rotateScreen.style.display = 'none';
    }
    else {
        displayContent.style.display = 'none';
        rotateScreen.style.display = 'block';
    }

}