const numbers = document.querySelectorAll(".number");
const currentOperators = document.querySelectorAll(".operation");
const symbols = document.querySelectorAll(".symbol");
const display = document.querySelector(".display__container");
const clear = document.querySelector(".symbol__clear");
const backSpace = document.querySelector(".symbol__backspace");
const equals = document.querySelector(".operation__equals");
const brightness = document.querySelector(".darkMode");
const calculator = document.querySelector(".calculator");

let firstNumber;
let secondNumber;
let currentOperator;

let isLight = true;


//Functions

const handleClick = (event) => display.innerHTML += event.target.innerHTML;

const handleClear = () => display.innerHTML = "";

const handleBackSpace = () => display.innerHTML = display.innerHTML.slice(0, -1);

const handlecurrentOperators = (event) => {
  firstNumber = display.innerHTML;
  currentOperator = event.target.innerHTML;
  display.innerHTML += event.target.innerHTML;
};

const calculate = (firstNumber, secondNumber, currentOperator) => {
  if (currentOperator == "+") {
    display.innerHTML = firstNumber + secondNumber;
  } else if (currentOperator == "-") {
    display.innerHTML = firstNumber - secondNumber;
  } else if (currentOperator == "÷") {
    display.innerHTML = firstNumber / secondNumber;
  } else if (currentOperator == "x") {
    display.innerHTML = firstNumber * secondNumber;
  } else {
    display.innerHTML = (firstNumber / 100) * secondNumber;
  }
};

const handleEquals = () => {
  const numberArr = display.innerHTML.split(currentOperator);
  console.log(numberArr);
  firstNumber = parseFloat(numberArr[0]);
  secondNumber = parseFloat(numberArr[1]);
  return calculate(firstNumber, secondNumber, currentOperator);
};

const handleBrightness = () => {
  isLight = !isLight;
  isLight ? (brightness.innerText = "🌞") : (brightness.innerText = "🌚");
  isLight ? (brightness.style.backgroundColor = "#c4d6b0"): (brightness.style.backgroundColor = "rgb(77, 77, 77");
  calculator.classList.toggle("active");
};


//Interactivity 

numbers.forEach((number) => {
  number.addEventListener("click", handleClick);
});

currentOperators.forEach((method) => {
  method.addEventListener("click", handlecurrentOperators);
});

equals.addEventListener("click", handleEquals);
clear.addEventListener("click", handleClear);
backSpace.addEventListener("click", handleBackSpace);
brightness.addEventListener("click", handleBrightness);
