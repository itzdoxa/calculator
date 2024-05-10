const keypad = document.querySelector("#keypad");
const operations = document.querySelector("#operations");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const display = document.querySelector("#display");
const operationLog = document.querySelector("#operationLog");

function sum(a, b){
    return Number(a) + Number(b);
   // or else  return a + b;  string: 7 + 8 = 78
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
let optrvar;
let click;
let result;

keypad.addEventListener('click', function(){
    if(event.target.classList.contains("digit")) {
        digit = event.target.textContent;
        if(event.target.classList.contains("period") && display.textContent.includes(".")) 
            return;

        display.textContent += digit;
        displayNum = display.textContent; 
        console.log("no. selected on keypad: " + displayNum);
        console.log("display number is a: " + typeof(displayNum));
    };  
});

operations.addEventListener('click', function(){
    click = 0;
    num1 = display.textContent; // string
    optr = event.target.textContent;
    display.textContent = "";
    displayNum = "";
    console.log("num1: " + num1 + " is a: " + typeof(num1));
    console.log("operation to perform: " + optr + typeof(optr));
});

const toFixedWithoutZeros = (num) => Number.parseFloat(num.toFixed(4));

let repeatValue;
equals.addEventListener('click', function(){      
    click++;
    console.log("click count" + click)

    if(click > 1) { 
        num1 = result;
     //   display.textContent = toFixedWithoutZeros(Number(operate(num1, optr, repeatValue)));
     display.textContent = toFixedWithoutZeros(operate(num1, optr, repeatValue));
 
      // let x = Number.isInteger(num1) ? num1.toString() : parseFloat(num1).toFixed(2);
      // let y = Number.isInteger(repeatValue) ? repeatValue.toString() : parseFloat(repeatValue).toFixed(2);
       let xnum1 = toFixedWithoutZeros(num1);
       let yvalue = toFixedWithoutZeros(repeatValue);
        operationLog.textContent = xnum1 + " " + optr + " " + yvalue; // i dont want this to overflow the calculator display,
                                                      // so i have to use less decimal places
        return;

    } else {
        let num2 = display.textContent; // string
        if (!num2) {
            if (optr === "-" || optr === "+") {
                num2 = 0;
            } else if (optr === "*" || optr === "/") {
                num2 = 1;
            }
        }
        repeatValue = Number(num2);  // number

        console.log("num2 " + num2 + " is a: " + typeof(num2));
   
     //   display.textContent = toFixedWithoutZeros(Number(operate(Number(num1), optr, Number(num2))));
        display.textContent = toFixedWithoutZeros(operate(num1, optr, num2));

        console.log(display.textContent + ' display no. is ' + typeof(display.textContent))
        console.log("num1: " + num1 + "; " + "num2: " + num2);

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

function operate(x, operator, y){
    if(operator == "+"){
        console.log('function call + here x and y are ' + typeof(x) + typeof(y)); 
        result = sum(x,y);
        console.log(result + " result " + typeof(result)); // result will be a string
        return Number(result.toFixed(4)); // to fixed returns a string to operation fxn, 
                                  // that will further be added as text content to display
    };
    if(operator == "-"){
        result = subtract(x,y);
        console.log(result);
        return Number(result.toFixed(4));
    };
    if(operator == "*"){
        result = multiply(x,y);
        console.log(result);
        return Number(result.toFixed(4));
    };
    if(operator == "/"){
        result = divide(x,y);
        console.log("function call / here result is "+ typeof(result))
        console.log(result);
        return Number(result.toFixed(4));
    };
};

// add feature: allow user to input a big expresion 
// like in the google calc rather than a pair of numbers.

// when the user picks num1 and opt and then presses equals without selecting
// a second number,
//make the result the same (+-0 and */1)
// or dont do any operation
