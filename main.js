

const   numbers             = document.querySelectorAll(".number");
const   currentOperators    = document.querySelectorAll(".operation");
const   symbols             = document.querySelectorAll(".symbol");
const   display             = document.querySelector(".display__container");
const   clear               = document.querySelector(".symbol__clear");
const   backSpace           = document.querySelector(".symbol__backspace")
const   equals              = document.querySelector(".operation__equals")
let     firstNumber;
let     secondNumber;
let     currentOperator ;


const handleClick = (event) => {
  display.innerHTML += event.target.innerHTML;
};

const handleClear = () => {
  display.innerHTML = "";
  console.log(clear.innerHTML)
};

const handleBackSpace =(event) => {
  display.innerHTML = display.innerHTML.slice(0,-1);
  console.log(backSpace.innerHTML)
}

const handlecurrentOperators = (event) => {
  firstNumber = display.innerHTML;
  currentOperator=event.target.innerHTML;
  display.innerHTML+=event.target.innerHTML;
  console.log(currentOperator);
  //event.target.style.backgroundColor="red" .active class 
};

const handleEquals = () => {
    const numberArr = display.innerHTML.split(currentOperator)
    console.log(numberArr)
    firstNumber = parseFloat(numberArr[0])
    secondNumber = parseFloat(numberArr[1])
  
    //display.innerHTML = calculate(firstNumber, secondNumber, currentOperator)

    //create function
    if (currentOperator== "+"){
        display.innerHTML=firstNumber + secondNumber
    }else if (currentOperator== "-"){
        display.innerHTML=firstNumber - secondNumber
    }else if (currentOperator== "÷"){
        display.innerHTML=firstNumber / secondNumber
    }else if (currentOperator== "x"){
        display.innerHTML=firstNumber * secondNumber}
        else {display.innerHTML = ((firstNumber/100)* secondNumber)}
    
}

numbers.forEach((number) => {
  number.addEventListener("click", handleClick);
});

currentOperators.forEach((method) => {
  method.addEventListener("click", handlecurrentOperators);
});


equals.addEventListener("click",handleEquals);
clear.addEventListener("click", handleClear);
backSpace.addEventListener("click",handleBackSpace);

