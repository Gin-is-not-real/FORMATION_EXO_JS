window.onscroll = function() {
    scrollIndicator();
}

function scrollIndicator() {
    //screen.height; -> hauteur de device
    let root = document.documentElement;

    // let boundingRect = root.getBoundingClientRect();
    // let rootHeight = boundingRect.height;
    rootHeight = root.scrollHeight;
    rootClHeight = root.clientHeight;
    let screenHeight = rootHeight - rootClHeight;

    let scrollToTop = root.scrollTop;

    let percents =  (scrollToTop/screenHeight)*100;
    // console.log(percents);

    document.querySelector('#bar').style.width = percents + '%';
}