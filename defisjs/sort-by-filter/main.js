let btns = document.querySelectorAll('button');

btns.forEach(elt => {
    elt.addEventListener('click', function() {

        btns.forEach(btn => {
            btn.className = this == btn ? 'active' : '';
        })

        let selector = this.textContent;
        document.querySelectorAll('img').forEach(i => {
            i.style.display = (selector == 'all' || selector == i.className) ? 'block' : 'none';
        })
    })
});