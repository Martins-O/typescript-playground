"use strict";
let greet = () => {
    console.log("Hello");
};
const add = (a, b, c) => {
    console.log(a + b);
};
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 5);
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
