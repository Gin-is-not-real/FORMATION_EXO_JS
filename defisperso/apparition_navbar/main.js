window.onscroll = slideDown;

function slideDown() {
    let root = document.documentElement;
    let rootHeight = root.clientHeight;

    changeNavbarSelection(rootHeight);
}

// ADD
function changeNavbarSelection(rootHeight) {
    let sections = document.querySelectorAll('section');
    let middleViewport = rootHeight/3;

    sections.forEach(section => {
        let bgColor;

        if(section.getBoundingClientRect().top <= middleViewport) {
            bgColor ='lightgrey';
        }
        else {
            bgColor ='white';
        }

        if(section.getBoundingClientRect().bottom <= middleViewport) {
            bgColor ='white';
        }

        section.style.backgroundColor = bgColor;
    })
}