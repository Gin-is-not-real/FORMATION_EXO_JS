function fizbuzz() {
    let toLog = "";
    
    for(let i = 0; i < 400; i++) {
        toLog = i%15 == 0 ? 'fizzbuzz' : i % 3 == 0 ? 'fizz' : i % 5 == 0 ? 'buzz' : i;
        console.log(toLog);
    }
}
fizbuzz();