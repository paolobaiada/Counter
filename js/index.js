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

