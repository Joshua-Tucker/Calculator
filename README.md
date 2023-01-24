# Calculator


BREIF
A deployed website (using GitHub Pages)
2.  A public GitHub repository for your codebase **CHECK WITH ROB WHY GITHUBPAGES ISNT WORKING**
1.  A README.md with a short intro to the project TICK
2.  At least 15 Git commits for the different stages in your development
3.  Be responsive and built mobile-first, it should work on different screen widths
4.  Accept a minimum of 2 inputs, perform an operation and show the output
5.  DOES NOT USE THE eval() method (as this is extremely dangerous) TICK
6.  Code is highly readable (good naming and indented correctly


This is my second project of my project which is to design and make a fully functioning calculator. The focus is to integrate what we have learnt so far from html scss and javascript so the calculator is responsive regardless of screen size and can handle calculations with 2 inputs.



PLAN

-Go for basic iphone style calculator
-Write HTML and SCSS for this
-Add JS as we go
-When we are happy with functionality of calculator we can then change the layout

I'm getting marked on my integration of all 3 languages now, no point in making it look super fancy and spend loads of time on that if it doesn't work.


TIME AVAILABLE

WED PM
    Write up html and scss TICK
THURS PM
    Finish layout and research on how to apply functionality
FRI ALL DAY (?)
    Integrate JS
SAT BONUS DAY
    Integrate JS
MON PM
    Integrate JS
TUES PM
    If happy with functionality spice up the css

**HAND IN TUESDAY 4PM**


THINGS TO DO
-go over breif TICK
-go over code TICK 
-get the last 2 symbols working TICK 
-ensure its responsive TICK
-ensure text stays in display box and doesnt change overall design TICK
-dark mode TICK
-Highlight operator to clarify youve pressed on them3
-2 decimal places if statements to remove 1


QUESTIONS
How to create function to do mathematical process of the button its presssing
How to write it so its not limited to num1 + num2 = x and can include multiple numbers and multiple operators
Why do we put event in sometimes? why do we leave it blank? what are we saying to the function in the ()?


if then setting 768 and 1440, if i put a fixed percentage height and width why does the rest of whats internal not stay within that?

-toFixed thought for a soloution so display block wouldnt blow out,
made a function and tried to change it but it wouldnt work, why is that and what are the alternatives?
-not understanding active classs and how to use js to change buttons and text

SUMMARY
HIGH- It was satisfying working out the light/dark mode after googling it and actually understanding what was on the page, same when doing the percentage and how I can include that in functions that I already had.
After a bad end to last week i spent friday afternoon noting my code as if i was explaing it to my parents, i thought it was a bit off the mark but after clarifying with rob it gave me a bit of a confidence boost going into the weekend that i do know more that im telling myself.
LOW- Didnt have the design nor the tidyness of my code to the level that I wanted it, dissapointed that I'm not able to reach a good standard within the time parameters.

WHAT WILL I DO DIFFERENT- i think my intention this time was good, go raw for css but focus on functionality. At this point its just making sure that i am doing something on the project everyday, to keep up momentum and (because im slow) give me that extra bit to present good work for the deadline



NOTES

Okay im going to think out loud with my current understanding of using forEach and how we can use that to interact with the operators. Once i think i have an idea of how to do something (or even if I fall flat) then im going to research online on code to use because im not confident with tthe layout process just yet and i feel like that is where im going to get bugs because i dont know how to use them appropriatley yet.

i know havew the numbers showing up in the display, i guess the first thing to do would be to declare the rest of the symbols so i can then play around with them. TICK 
then i guess the logic would be ...
if (number) + (operator) + (number) + (equals) has been selected
then show on display 
(answer with math applied)
in order to get answer ...
answer = (number value) + (operator value) + (number value) 


I would need to then apply each operator with the mathematical sum that java recognises that relates to the button im pressing


what im going to do after lunch is go over the breif again and see what ive done and what else needs doing.
then im going to write code for the percentage and =/- operator
from there and ive got a working calculator i want to stop relying so heavily on robs handholding and get used to writing the code myself. the rest of friday would be to take the code ive written, look over it and talk it out so i understand what its doing and how to write each statment then remove code (stored in a safe place obviously) and do the whole thing over again. 

I wont learn until i start doing it myself and making those internal connections by trial and error. I know it, its there to refer back to ONLY IF I CANNOT SOLVE IT, so its time to practise and get those drills in.



//We are taking elemenets from the html and declaring them here so we can use them in functions later

//Using the let varible for the currentOperators and the first & second set of numbers in our sum, not defining them here because we later define them by whatever is on the display

//handleClick- when the EVENT (the clicking of the button) happens we are saying, TARGET this button and take the .innerHTML from it and whatever it is, take that and add it to the display

//handleClear- not defining an event here(still unsure why we do and we dont) in this function we are defining "blank" to be shown as the inner text of the display box

//handlecurrentOperators- we define firstNumber (our undefined let varible) to be whatever is shown in the display, which is whatever is written as the HTML, this can be innerText for numbers and it still works fine.
//next we are defining currentOperator (another undefined let varible) which is then defined by when we click (EVENT) an currentOperator button (TARGET) it will add the inner.HTML to the display container. 
//I am struggling to understand this because how does the console know that the class of currentOperators are different to those of numbers? when everything is // out other than currentOperators function and the block of code below it still logs into the console
//the final line im not sure of either, it states that the event.target.innerhtml should be added to the display.. is this then a local varible(?) so it doesnt exist outside the curlys so in this code is saying to display=currentOperator?

//handleEquals-again not defined with an event and unsure why. So we are stating here that we are creating a equals function, what to do when the equals button is clicked. First of all we create an array to store the information thats on the display, however, we want to split that by removing the currentOperator and then putting whatever numbers either side of that currentOperator as its own index. e.g if 12+21= we are splitting that string of numbers where the currentOperator (+) and then packeting those numbers seperatley [12] [21]
//so then becasue both sets of these are currently a STRING we need to change it into a NUMBER so we can do math to it. The parseFloat varible is used to change a string into a number [0]indicates the first number of the array so we define that as firstNumber and [1] is the second so that is then defined as secondNUmber
//Then we are saying, now that we have these NUMBERS, IF the currentOperator that was in the middle before was a + then we want to display the let varibles firstNumber PLUS secondNumber, and so on and so forth..

// add event listener keep a beady eye on the console to iniate a command when it is called into action. The first 3 are all the same, it says.. FOR EACH.. NUMBER that you CLICK(being the event) youre then going to carry out the handleClick which to save scrolling up is to show in the display box whatever the innerHTML is on the TARGET that youve just clicked (EVENT)

//because there are only one equals and one clear we dont use a foreach, we can simply say, when this button is clicked, carry out this function