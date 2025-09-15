document.getElementById('app').textContent = 'Jurassic Park';

//variable naming conventions
//camelCase
let firstName = 'John';
let lastName = 'Doe';

//snake_case
let first_name = 'Jane';
let last_name_snake = 'Smith';

//kebab-case (not valid for variable names in JS, but used in CSS)
let first-name = 'Invalid'; // This will cause an error

//PascalCase (usually used for class names)
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let person1 = new Person('Alice', 'Johnson');
console.log(person1.firstName); // Output: Alice
console.log(person1.lastName);  // Output: Johnson  
console.log(firstName); // Output: John
console.log(last_name_snake); // Output: Smith
console.log(first-name); // This will cause an error
console.log(person1.firstName); // Output: Alice
console.log(person1.lastName);  // Output: Johnson
console.log('Script loaded successfully');

// variables declaration
var oldVar = 'I am old';
let newVar = 'I am new';
const constantVar = 'I am constant';
console.log(oldVar);
console.log(newVar);
console.log(constantVar);

// Data types
let str = 'Hello, World!';
let num = 42;
let bool = true;
let undef;
let nul = null;
let obj = { name: 'John', age: 30 };
let arr = [1, 2, 3, 4, 5];
console.log(typeof str); // string
console.log(typeof num); // number
console.log(typeof bool); // boolean
console.log(typeof undef); // undefined
console.log(typeof nul); // object (this is a known quirk in JavaScript)
console.log(typeof obj); // object
console.log(typeof arr); // object

// Type coercion
let coercedNum = '5' + 10; // '510'
let coercedBool = '5' * true; // 5
console.log(coercedNum);
console.log(coercedBool);

// Basic operations
let sum = 5 + 10; // 15
let difference = 10 - 5; // 5
let product = 5 * 10; // 50
let quotient = 10 / 5; // 2
let remainder = 10 % 3; // 1
console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);
console.log(remainder);

// Control structures
if (num > 10) {
    console.log('Number is greater than 10');
} else {
    console.log('Number is 10 or less');
}

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// Functions
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('Alice'));

// Arrow functions
const add = (a, b) => a + b;
console.log(add(5, 10));

// Arrays and objects
arr.push(6);
console.log(arr);

obj.city = 'New York';
console.log(obj);

// DOM manipulation
document.getElementById('app').textContent = 'Hello, JavaScript!';

// Event handling
document.getElementById('app').addEventListener('click', () => {
    alert('App clicked!');
});

// Error handling
try {
    throw new Error('Something went wrong!');
} catch (error) {
    console.error(error.message);
}

// Asynchronous programming
setTimeout(() => {
    console.log('This message is shown after 2 seconds');
}, 2000);   
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));

// End of script.js

// Hoisting example
console.log(hoistedVar); // undefined
var hoistedVar = 'I am hoisted';
console.log(hoistedVar); // 'I am hoisted'

// console.log(notHoistedLet); // ReferenceError
let notHoistedLet = 'I am not hoisted';
console.log(notHoistedLet); // 'I am not hoisted'
// console.log(notHoistedConst); // ReferenceError
const notHoistedConst = 'I am not hoisted';
console.log(notHoistedConst); // 'I am not hoisted'

// Difference between var, let, and const
function varLetConstExample() {
    if (true) {
        var varVariable = 'I am var';
        let letVariable = 'I am let';
        const constVariable = 'I am const';
    }
    console.log(varVariable); // 'I am var'
    // console.log(letVariable); // ReferenceError
    // console.log(constVariable); // ReferenceError
}
varLetConstExample();

// Template literals
let name = 'John';
let greeting = `Hello, ${name}! Welcome to JavaScript.`;
console.log(greeting); // 'Hello, John! Welcome to JavaScript.' 
let multiLine = `This is a string
that spans multiple
lines.`;
console.log(multiLine);

// Multi-line strings
let multiLineString = `This is a string
that spans multiple
lines.`;
console.log(multiLineString);


// Destructuring 
// what does destructuring mean?   
let person = { firstName: 'Jane', lastName: 'Doe' };
let { firstName: fName, lastName: lName } = person;
console.log(fName); // 'Jane'
console.log(lName); // 'Doe'

let numbers = [1, 2, 3];
let [one, two, three] = numbers;
console.log(one);


// describe scope in javascript
// Global scope
var globalVar = 'I am global';

function checkScope() {
    // Function scope
    var functionVar = 'I am in a function';
    console.log(globalVar); // Accessible
    console.log(functionVar); // Accessible
    
    if (true) { 
        // Block scope
        let blockLet = 'I am in a block';
        const blockConst = 'I am also in a block';
        console.log(blockLet); // Accessible
        console.log(blockConst); // Accessible
    }
    
    // console.log(blockLet); // ReferenceError
    // console.log(blockConst); // ReferenceError
}

checkScope();

console.log(globalVar); // Accessible
// console.log(functionVar); // ReferenceError

// End of script.js


// what is .this keyword in javascript?
// what does this refer to in different contexts?
// In a method, this refers to the owner object.
// Alone, this refers to the global object.
// In a function, this refers to the global object (in non-strict mode) or undefined (in strict mode).
// In an event, this refers to the element that received the event.
// With arrow functions, this retains the value of the enclosing lexical context's this.

// why and how to use .this keyword in javascript?
// To access properties and methods of the current object.
// To maintain context in callback functions.
// To refer to the object that is executing the current function.
// To create methods that can be reused across different objects.

// Example usages of .this keyword
console.log(this); // In global context, refers to the global object (window in browsers)

const objThis = {
    name: 'Object',
    getName: function() {
        return this.name;
    }
};