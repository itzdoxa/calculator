const keypad = document.querySelector("#keypad");
const operations = document.querySelector("#operations");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const display = document.querySelector("#display");
const operationLog = document.querySelector("#operationLog");
const del = document.querySelector(".delete");
const changeSign = document.querySelector("#changeSign")

function sum(a, b){
    return Number(a) + Number(b);
};
function subtract(a, b){
    return a - b;
};
function multiply(a, b){
    return a * b;
};
function divide(a, b){
    return a / b;
};

let num1;
let num2;
let optr;
let displayNum;
let digit;
let click;
let result;
let backspace;

function operate(x, operator, y){
    if(operator == "+"){
           result = sum(x,y);
           console.log("result: " + result);
           return Number(result.toFixed(8));                       
    };
    if(operator == "-"){
           result = subtract(x,y);
           console.log("result: " + result);
           return Number(result.toFixed(8));
    };
    if(operator == "*"){
           result = multiply(x,y);
           console.log("result: " + result);
           return Number(result.toFixed(8));
    };
    if(operator == "/"){
           result = divide(x,y);
           console.log("result: " + result);
           return Number(result.toFixed(8));
    };
};

keypad.addEventListener('click', function(){
    if(event.target.classList.contains("digit")) {

            digit = event.target.textContent;
            if(event.target.classList.contains("period") && display.textContent.includes(".")) return;

            display.textContent += digit;
            displayNum = display.textContent; 
      };  
});

del.addEventListener('click', function(){
    display.textContent = display.textContent.slice(0, -1); 
});

changeSign.addEventListener('click', function(){
    display.textContent = Number(display.textContent) * (-1);
});

operations.addEventListener('click', function(){
        click = 0;
        num1 = display.textContent; 
        console.log("num1: " +  num1);
        optr = event.target.textContent;
        display.textContent = ""
        displayNum = "";
});

const toFixedWithoutZeros = (num) => Number.parseFloat(num.toFixed(8));

let repeatValue;

equals.addEventListener('click', function() {
    click++;
    console.log("same operation count: " + click);

    if (click > 1) { 
        num1 = result;
        display.textContent = toFixedWithoutZeros(operate(num1, optr, repeatValue));

        let fixNum1 = toFixedWithoutZeros(num1);
        let fixRepeatValue = toFixedWithoutZeros(repeatValue);

        operationLog.textContent = fixNum1 + " " + optr + " " + fixRepeatValue;  
        return;

    } else {
        let num2 = display.textContent; 

        if (!num2) {
            if (optr === "-" || optr === "+") {
                num2 = 0;
            } else if (optr === "*" || optr === "/") {
                num2 = 1;
            }
        };
        console.log("num2: " + num2);

        repeatValue = Number(num2);  
        display.textContent = toFixedWithoutZeros(operate(num1, optr, num2));
        operationLog.textContent = num1 + " " + optr + " " + num2;
    }
});

clear.addEventListener('click', function(){
         click = 0;
         num1 = "";
         num2 = "";
         optr = "";
         display.textContent = "";
         operationLog.textContent = "";
});




