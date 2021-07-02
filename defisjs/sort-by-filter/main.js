let btns = document.querySelectorAll('button');
let img = document.querySelectorAll('img');

btns.forEach(elt => {
    elt.addEventListener('click', function() {

        btns.forEach(btn => {
            if(this == btn) {
                btn.classList.add('active');
            }
            else {
                btn.classList.remove('active');
            }
        })

        let selector = this.textContent;
        img.forEach(i => {
            i.style.display = (selector == 'all' || selector == i.className) ? 'block' : 'none';
        })
    })
});