


//So from my understanding I have selected all the numbers and the display div with these first two
const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display__container")
const clear = document.querySelector(".symbol__clear")

//This then says, when you click (on a number) it will take the inner html (which is showing as the same as the number presented) and take it to the display div. The += allowing it to then keep the previous number and add on any new additions to the display
const handleClick = (event) => {
    display.innerHTML+= event.target.innerHTML
}
//so with this, what i read it as, for each number you click, the handleclick function will be in play and take that number youve clicked into the display
numbers.forEach((number)=> {
    number.addEventListener("click", handleClick)
})

const handleClear = () => {
    display.innerText = "";
}
clear.addEventListener("click", handleClear)


