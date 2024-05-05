const numbers = document.querySelector("#numbers");
const display = document.querySelector("#display");

function sum(a, b){
    return a + b;
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

numbers.addEventListener("click", function(){
    if(event.target.classList.contains("digit")) {
        let displayNum = event.target.textContent;
        display.textContent += displayNum;
    };
});

function operate(x, operator, y){
 if(operator == "+"){
    console.log(sum(x,y))
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
}
operate(7,"+", 7);
operate(7,"-", 7);
operate(7,"*", 7);
operate(7,"/", 7);
