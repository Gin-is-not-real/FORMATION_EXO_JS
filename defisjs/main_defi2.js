const convert = document.getElementById("convert") ;
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInYear = 365;

let operations = {
    "days": daysInYear,
    "hours": hoursInDay,
    "minutes": minutesInHour,
    "seconds": secondsInMinute,
};

convert.addEventListener("click", function() {
    let numberOfYears = document.getElementById("numberOfYears").value ;

    let result = numberOfYears;
    for(let key in operations) {
        result *= operations[key];
        console.log(result + " " + key);
    }

});