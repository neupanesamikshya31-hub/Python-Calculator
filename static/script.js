
let display = document.querySelector(".display input");

// AC button
let clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", function() {
    display.value = "";
});

// DEL button
let deleteButton = document.querySelector("#delete");

deleteButton.addEventListener("click", function() {
    display.value = display.value.slice(0, -1);
});

// Percentage button
let percentButton = document.querySelector("#percent");

percentButton.addEventListener("click", function() {
    display.value = display.value + "%";
});

// Number buttons
let numbers = document.querySelectorAll(".number-button");

numbers.forEach(function(button) {
    button.addEventListener("click", function() {
        display.value = display.value + button.textContent;
    });
});

// Operator buttons
let operators = document.querySelectorAll(".operator-button");

operators.forEach(function(button) {
    button.addEventListener("click", function() {
        display.value = display.value + button.textContent;
    });
});

// Decimal point
let decimalButton = document.querySelector("#decimal");

decimalButton.addEventListener("click", function() {
    display.value = display.value + ".";
});

// Brackets
let bracketButton = document.querySelector("#bracket");

bracketButton.addEventListener("click", function() {
    if (display.value.includes("(")) {
        display.value = display.value + ")";
    } else {
        display.value = display.value + "(";
    }
});

// Equal button

let equalButton = document.querySelector("#equal");

equalButton.addEventListener("click", function() {

    let expression = display.value;

    // Handle percentage
   expression = expression.replaceAll("%", "/100*");

    // Handle multiplication before brackets
    expression = expression.replaceAll("(", "*(");

    if (expression.startsWith("*")) {
        expression = expression.slice(1);
    }

    let result = eval(expression);

    display.value = result;

});
