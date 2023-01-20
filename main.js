

const   numbers             = document.querySelectorAll(".number");
const   currentOperators    = document.querySelectorAll(".operation");
const   symbols             = document.querySelectorAll(".symbol");
const   percentage          = document.querySelector(".symbol__percentage")
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

// const handlePercentage = (event)=> {
//   display.innerHTML += event.target.innerHTML
//   const percentArr = display.innerHTML.split(percentage)
//   console.log(percentArr)
//   firstNumber = parseFloat(percentArr[0])
//   secondNumber = parseFloat(percentArr[1])

//   display.innerHTML = (100 * percentArr[0]) / percentArr[1];
//   }


const percentageSum = (firstNumber, secondNumber) => {
  display.innerHTML= ((firstNumber/100)* secondNumber).toFixed(2)
}

const handlePercentage = (event) =>{
  if(display.innerHTML += event.target.innerHTML){
    display.innerHTML += percentageSum
  }




}

percentage.addEventListener("click",handlePercentage);


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
    }else {
        display.innerHTML=firstNumber * secondNumber
    }
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

