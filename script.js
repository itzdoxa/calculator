const numbers = document.querySelector("#numbers");
const display = document.querySelector("#display");
const plus = document.querySelector("#plus");
const equals = document.querySelector("#equals");

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

numbers.addEventListener('click', function(){
    if(event.target.classList.contains("digit")) {
        digit = event.target.textContent;
        display.textContent += digit;
        displayNum = display.textContent;
        console.log("numbers event " + displayNum);
    };  
});

plus.addEventListener('click', function(){
       num1 = displayNum;
       opt = "+";
       display.textContent = "";
       displayNum = "";
       console.log(opt)
       console.log("num1 " + num1);
});

equals.addEventListener('click', function(){
       let num2 = displayNum;        
       console.log("num2 " + num2);
       console.log("num1 in equals " + num1);
       display.textContent = operate(num1, opt, num2);
});

function operate(x, operator, y){
 if(operator == "+"){
    let result =sum(x,y);
    console.log(result);
     return result;
   };
 if(operator == "-"){
    console.log(subtract(x,y))
   };
 if(operator == "*"){
    console.log(multiply(x,y))
   };
 if(operator == "/"){
    console.log(divide(x,y))
   };
};
