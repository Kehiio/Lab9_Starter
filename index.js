
/* Caluclator Functionality */
let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});

// list of all error buttons
let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// console log functionality
let logButton = document.querySelector('#log-btn');
logButton.addEventListener('click', e => {
    console.log("Console Log");
});

// console error functionality
let errorButton = document.querySelector('#error-btn');
errorButton.addEventListener('click', e => {
    console.error("Console Error");
});

// console count functionality
let countButton = document.querySelector('#count-btn');
countButton.addEventListener('click', e=> {
    console.count('counter')
});

// console warn functionality
let warnButton = document.querySelector('#warn-btn');
warnButton.addEventListener('click', e=> {
    console.warn('Warning Example');
});

// console assert function example
const a = 4;
const b = 5;
const msg = 'a is expected to equal b';
let assertButton = document.querySelector('#assert-btn');
assertButton.addEventListener('click', e => {
    console.assert(a == b, {a, b, msg});
});

// console clear
let clearButton = document.querySelector('#clear-btn');
clearButton.addEventListener('click', e => {
    console.clear();
});

// console dir
//let dirButton = document.querySelector('#dir-btn');

