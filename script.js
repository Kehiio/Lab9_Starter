/* Custom NaN Error class */
class NaNError extends Error{
    constructor(message){
        super(message);
        this.name = "NaN Error";
    }
}


/* Caluclator Functionality */
let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;

    try {
        if ( isNaN(firstNum) || isNaN(secondNum)){
            throw new NaNError();
        }

        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    }
    catch (error)
    {
        if (error instanceof NaNError){
            console.error('Non-number string passed.')
        }
        else if (error instanceof ReferenceError || error instanceof TypeError){
            console.error('Invalid type passed');
        }
        else{
            console.error("Unexpected error: ", error);
        }
        
    }
    finally{
        console.log("Calculator output complete.");
    }

});

// list of all error buttons
let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// console log functionality
let logButton = document.querySelector('#log-btn');
logButton.addEventListener('click', e => {
    console.log("Console Log Demo");
});

// console error functionality
let errorButton = document.querySelector('#error-btn');
errorButton.addEventListener('click', e => {
    console.error("Console Error Demo");
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
let dirButton = document.querySelector('#dir-btn');
dirButton.addEventListener('click', e => {
    console.dir(document.head);
});

// console dirxml
let dirXMLButton = document.querySelector('#dirxml-btn');
dirXMLButton.addEventListener('click', e => {
    console.dirxml(document.head);
});

// console group start
let groupStartButton = document.querySelector('#group-start-btn');
groupStartButton.addEventListener('click', e => {
    console.group('example');
});

// console group end
let groupEndButton = document.querySelector('#group-end-btn');
groupEndButton.addEventListener('click', e => {
    console.groupEnd('example');
});

// console table
var exampleData = [
    {
        first: 'Kelly',
        last: 'Dempster'
    },
    {
        first: 'Marie',
        last: 'Morales'
    },
    {
        first: 'Tyeson',
        last: 'Nguyen'
    }
];
let tableButton = document.querySelector('#table-btn');
tableButton.addEventListener('click', e => {
    console.table(exampleData);
});

// Timer start
let timerStartButton = document.querySelector('#timer-start-btn');
timerStartButton.addEventListener('click', e => {
    console.time('Example Timer');
});

// Timer end
let timerEndButton = document.querySelector('#timer-end-btn');
timerEndButton.addEventListener('click', e => {
    console.timeEnd('Example Timer');
});

// Console trace
let traceButton = document.querySelector('#trace-btn');

// Trace example
traceButton.addEventListener('click', e => {
    const E1 = () => { E2(); };
    const E2 = () => { E3(); };
    const E3 = () => { E4(); };
    const E4 = () => { console.trace(); };
    E1();
});

