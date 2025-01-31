// //NORMAL FUNCTION

// function today (a,b,c,d)
// {
    
    
// }
// today(10,11,12,13)


//ANONYMUS FUNCTION

// let add = function (a,b)
// {
//     const c = a +b
//     console.log(c)
// }
// add(5,6)


//IIFE(Immdiately Invoked Function) FUNCTION

// (function (a,b)
// {
//     const c = a +b
//     console.log(c)
// })(2,5)


//ARROW FUNCTION
// const s = (num1, num2) => {
//     let c = num1+num2
//     console.log(c)
    
// }

// s(10,20)


//RECURSIVE FUNCTION

function rec(n)
{
    if(n === 200)
    {
        console.log( "done");
        return
    }
    console.log(n)
    rec(n+10)
}
rec(100)


//CONSTRUCTOR FUNCTION




//===========================================================================================================================

// A.)SIMPLE FUNCTION


// 1. Function to add two numbers
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); 

// 2. Function to check if a number is even
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4)); 

// 3. Function to find the maximum of two numbers
function max(a, b) {
    return a > b ? a : b;
}
console.log(max(10, 20)); 

// 4. Function to return the square of a number
function square(num) {
    return num * num;
}
console.log(square(5)); 

// 5. Function to greet a user
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); 


//B.) ARROW FUNCTION

// 1. Arrow function to add two numbers
const add = (a, b) => a + b;
console.log(add(2, 3)); 

// 2. Arrow function to check if a number is even
const isEven = num => num % 2 === 0;
console.log(isEven(4)); 
// 3. Arrow function to find the maximum of two numbers
const max = (a, b) => a > b ? a : b;
console.log(max(10, 20)); 

// 4. Arrow function to return the square of a number
const square = num => num * num;
console.log(square(5));

// 5. Arrow function to greet a user
const greet = name => `Hello, ${name}!`;
console.log(greet("Alice")); 


// C.) RECURSIVE FUNCTION

// 1. Recursive function to calculate factorial
function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5)); 

// 2. Recursive function to calculate Fibonacci series
function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6)); 

// 3. Recursive function to reverse a string
function reverseString(str) {
    return str === "" ? "" : reverseString(str.slice(1)) + str[0];
}
console.log(reverseString("hello"));

// 4. Recursive function to find the sum of an array
function sumArray(arr, index = 0) {
    return index === arr.length ? 0 : arr[index] + sumArray(arr, index + 1);
}
console.log(sumArray([1, 2, 3, 4, 5])); 

// 5. Recursive function to calculate power (x^y)
function power(x, y) {
    return y === 0 ? 1 : x * power(x, y - 1);
}
console.log(power(2, 3)); 



//D.) IIFE FUNCTION


// 1. IIFE to print a message
(function() {
    console.log("Hello from IIFE!");
})(); 
// 2. IIFE to calculate and print the sum of two numbers
(function(a, b) {
    console.log("Sum:", a + b);
})(3, 4); 
// 3. IIFE to prevent global variable pollution
const counter = (function() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
})();
console.log(counter.increment()); 
console.log(counter.getCount()); 

// 4. IIFE to generate a random number
const randomNum = (function() {
    return Math.random();
})();
console.log(randomNum); 

// 5. IIFE to fetch and print API data (mock example)
(async function() {
    const data = await new Promise(resolve => setTimeout(() => resolve("Fetched Data"), 1000));
    console.log(data);
})(); 