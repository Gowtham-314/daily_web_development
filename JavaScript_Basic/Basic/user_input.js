// User Input in JavaScript

let userName = prompt("Please enter your name:");
console.log("Hello, " + userName + "!");


let isConfirmed = confirm("Do you want to proceed?");   
if (isConfirmed) {
    console.log("You chose to proceed.");
}
else {
    console.log("You chose not to proceed.");
}