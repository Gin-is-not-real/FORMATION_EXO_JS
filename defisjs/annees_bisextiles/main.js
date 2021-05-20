const check =document.getElementById("check");
const result = document.querySelector("#result");

check.addEventListener("click",function(){
    let year = document.getElementById("year").value;
    console.log(checkIfBissextile(year));
    
});

//bisextile si année ou siécle divisible par 4
function checkIfBissextile(year) {
    let result;
    result = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? " is a leap year" : " is not a leap year";

   return result;
}
