//25 mapfilterreduce.js

import React from "react";
import { createRoot } from "react-dom/client";
import emojipedia from "./emojipedia_23";
import App from "./components/App_25";


const root = createRoot(document.getElementById('root'));
root.render(<App />);


function square(x) {
    return x * x;
}



var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

/* 
const newNumbers = numbers.map(x => x*2);
console.log(newNumbers+ " open");  */


//Filter - Create a new array by keeping the items that return true.

/* 
const newNumbers = numbers.filter(num => num > 10); 
console.log(newNumbers); */

//Reduce - Accumulate a value by doing something to each item in an array.
/* 
var newNumbers = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber);
console.log(newNumbers); */


//Find - find the first item that matches from an array.
/* 
const newNumber = numbers.find((num) => num >10);
console.log(newNumber); */

//FindIndex - find the index of the first item that matches.

/* 
const newNumber = numbers.findIndex((num) => {return(num >10)});
console.log(newNumber); */


