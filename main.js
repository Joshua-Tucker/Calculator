//So from my understanding I have selected all the numbers and the display div with these first two
const   numbers     = document.querySelectorAll(".number");
const   operators   = document.querySelectorAll(".operation");
const   symbols     = document.querySelectorAll(".symbol");
const   display     = document.querySelector(".display__container");
const   clear       = document.querySelector(".symbol__clear");
const   equals      = document.querySelector(".operation__equals")
let     firstNumber;
let     secondNumber;
let     operator ;

//This then says, when you click (on a number) it will take the inner html (which is showing as the same as the number presented) and take it to the display div. The += allowing it to then keep the previous number and add on any new additions to the display

const handleClear = () => {
    display.innerText = "";
  };

const handleClick = (event) => {
  display.innerHTML += event.target.innerHTML;
};

const handleOperators = (event) => {
    firstNumber = display.innerHTML;
    operator=event.target.innerHTML;
    display.innerHTML+=event.target.innerHTML;
    console.log(operator);
};

const handleEquals = () => {
    const numberArr = display.innerHTML.split(operator)
    console.log(numberArr)
    firstNumber = parseFloat(numberArr[0])
    secondNumber = parseFloat(numberArr[1])
    if (operator== "+"){
        display.innerHTML=firstNumber + secondNumber
    }else if (operator== "-"){
        display.innerHTML=firstNumber - secondNumber
    }else if (operator== "÷"){
        display.innerHTML=firstNumber / secondNumber
    }else {
        display.innerHTML=firstNumber * secondNumber
    }
}

//so with this, what i read it as, for each number you click, the handleclick function will be in play and take that number youve clicked into the display

//These display all buttons onto display
numbers.forEach((number) => {
  number.addEventListener("click", handleClick);
});

operators.forEach((operator) => {
  operator.addEventListener("click", handleOperators);
});

symbols.forEach((symbol) => {
  symbol.addEventListener("click", handleClick);
});

equals.addEventListener("click",handleEquals)
clear.addEventListener("click", handleClear);
