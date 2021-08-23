# Counter

## This project is a simple counter with two buttons one of decrement and one of increment.

![Screenshot (5)](https://user-images.githubusercontent.com/89268273/130265592-911ed1f1-ac25-49cb-b563-fbb299769c76.png)


## For the structure in the file html there is a main div where there are two buttons and an h1 with the number of counter.
## HTML
```
<div class="main">
    <h1 class="counter-display">(..)</h1>
    <button class="counter-min">-</button>
    <button class="counter-plus">+</button>
</div>
```
## In the css file there is the style of the page with lightblue backgroundcolor, the rounded buttons and on mouse over change the buttons color.

## CSS
```
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
    background-color: #1ae0ee;
}
.main{
    text-align: center;
    height: 500px;
}
.counter-min{
    width: 200px;
    height: 50px;
    margin: 30px;
   background-color: #297f87a9;
   border: cadetblue;
   font-size: 40px;
   border-radius: 20px;
   
}
.counter-plus{
    width: 200px;
    height: 50px;
    margin: 30px;
    border: cadetblue;
    background-color:#297f87a9 ;
    font-size: 40px;
    border-radius: 20px;
    
}
.counter-plus:hover
{
    background-color: #11757ed7;
    transition: 0.4s;
}
.counter-min:hover{
    background-color: #11757ed7;
    transition: 0.4s;
}

.counter-display{
    font-size: 100px;
    
}
```
## In the javascript file there is the logic of the program divided in four parts, variables declaration, display counter, increment button, decrement button.

## JAVASCRIPT
```
//variables declaration
let counterDisplay = document.querySelector(".counter-display");
let counterMin = document.querySelector(".counter-min");
let counterPlus = document.querySelector(".counter-plus");

let count = 0;


//display counter
function updateDisplay(){
    counterDisplay.innerHTML = count; 
}
updateDisplay();


//increment button
counterPlus.addEventListener("click",function(){
    count++;
    updateDisplay();
});


//decrement button
counterMin.addEventListener("click",function(){
    count--;
    updateDisplay();
});
```
