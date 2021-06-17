window.onscroll = slideDown;

function slideDown() {
    let root = document.documentElement;
    let rootHeight = root.clientHeight;

    let scrollToTop = root.scrollTop;

    let navbar = document.querySelector('#navbar');

    if(scrollToTop >= (rootHeight/2)) {
        navbar.style.top = '0';
    }
    else {
        navbar.style.top = '-56px';
    }
}
