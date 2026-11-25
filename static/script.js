let display = document.querySelector(".display input");
console.log(display);

// Variables for calculation
let firstNumber = "";
let operator = "";

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

// Number buttons
let number = document.querySelectorAll(".number-button");
number.forEach(function(number) {
    number.addEventListener("click", function() {
        display.value = display.value + number.textContent;
    });
});

// Operator buttons
let operators = document.querySelectorAll(".operator-button");
operators.forEach(function(button){
    button.addEventListener("click", function(){
firstNumber=display.value;
operator = button.textContent;
        display.value = "";
    });
})