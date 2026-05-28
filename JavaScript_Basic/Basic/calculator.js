// Simple Calculator in JavaScript

// Switch statement
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /):");
let result;

switch (operation) {
    case "+":
        result = add(num1, num2);
        break;
    case "-":
        result = subtract(num1, num2);
        break;
    case "*":
        result = multiply(num1, num2);
        break;
    case "/":
        result = divide(num1, num2);
        break;
    default:
        result = "Invalid operation.";
}

alert("The result is: " + result);
