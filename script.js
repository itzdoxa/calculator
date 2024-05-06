const keypad = document.querySelector("#keypad");
const display = document.querySelector("#display");
const plus = document.querySelector("#plus");
const equals = document.querySelector("#equals");
const minus = document.querySelector("#minus");
const multi = document.querySelector("#multiply");
const division = document.querySelector("#division");
const clear = document.querySelector("#clear");

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
let opt;
let displayNum;
let digit;

keypad.addEventListener('click', function(){
    if(event.target.classList.contains("digit")) {
        digit = event.target.textContent;
        if(event.target.classList.contains("period") && display.textContent.includes(".")) return;
           display.textContent += digit;
           displayNum = display.textContent;
        console.log("no. selected on keypad: " + displayNum);
    };  
});

plus.addEventListener('click', function(){
       num1 = display.textContent;
       opt = "+";
       display.textContent = "";
       displayNum = "";
       console.log("num1 " + num1);
       console.log("operation to perform " + opt)
});

division.addEventListener('click', function(){
    num1 = display.textContent;
    opt = "/";
    display.textContent = "";
    displayNum = "";
    console.log("num1 " + num1);
    console.log("operation to perform " + opt)
});

minus.addEventListener('click', function(){
    num1 = display.textContent;
    opt = "-";
    display.textContent = "";
    displayNum = "";
    console.log("num1 " + num1);
    console.log("operation to perform " + opt)
});

multi.addEventListener('click', function(){
    num1 = display.textContent;
    opt = "*";
    display.textContent = "";
    displayNum = "";
    console.log("num1 " + num1);
    console.log("operation to perform " + opt)
});

equals.addEventListener('click', function(){      
       let num2 = display.textContent;
       console.log("num2 " + num2);
       display.textContent = operate(num1, opt, num2);
       console.log("num1: " + num1 + " " + "num2: " + num2);
});

clear.addEventListener('click', function(){
    num1 = "";
    num2 = "";
    opt = "";
    display.textContent = "";
});

function operate(x, operator, y){
 if(operator == "+"){
    let result = sum(x,y);
    console.log(result);
     return Number(result.toFixed(2));
   };
 if(operator == "-"){
    let result = subtract(x,y);
    console.log(result);
     return Number(result.toFixed(2));
   };
 if(operator == "*"){
    let result = multiply(x,y);
    console.log(result);
     return Number(result.toFixed(2));
   };
 if(operator == "/"){
    let result = divide(x,y);
    console.log(result);
     return Number(result.toFixed(2));
   };
};
