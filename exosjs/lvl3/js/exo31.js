//Code à faire ici
let tab = [];

function myFunction() {
    while(tab.length < 5) {
        // console.log(tab.length);
        let rand = Math.floor(Math.random() * 800);

        if(rand % 50 == 0 && rand >= 450 ) {
            if(!tab.includes(rand)) {
                tab.push(rand);
            }
        }
    }
    console.log(tab);
}
myFunction();