let num = 5;
console.log(num);

console.log(num++); // what does this do?
console.log(++num); // what does this do?

console.log(num--); // what does this do?
console.log(--num); // what does this do?

function getAreaOfCircle(radius) {
    return Math.PI * radius ** 2;
    // return Math.PI * Math.pow(radius, 2);
    // return Math.PI * radius * radius;
    // return 3.14 * radius * radius;
    // return 3.14 * Math.pow(radius, 2);
}
console.log(getAreaOfCircle(3)); // 28.274333882308138
console.log(getAreaOfCircle(5)); // 78.53981633974483
console.log(getAreaOfCircle(10)); // 314.1592653589793

function getRandomPassword() {
    return Math.trunc(Math.random() * 1000000);
}

getRandomPassword(); // eg. 348927

function salesTax(price) {
    return price * 1.07;
}

console.log(salesTax(100)); // 107
console.log(salesTax(45.50)); // 48.685
console.log(salesTax(10)); // 10.7

// DOM Manipulation
const appDiv = document.getElementById('app');
console.log(appDiv);
appDiv.style.color = 'blue';
appDiv.style.fontSize = '24px';
appDiv.style.fontWeight = 'bold';
appDiv.textContent = 'Hello, JavaScript 2025!';

// Event Handling
appDiv.addEventListener('click', () => {
    alert('App div clicked!');
});

// More DOM Manipulation
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph added by JavaScript.';
appDiv.appendChild(newParagraph);

// Function to change background color
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Change background color to light gray
changeBackgroundColor('#f0f0f0');

// Function to toggle visibility of the app div
function toggleAppVisibility() {
    if (appDiv.style.display === 'none') {
        appDiv.style.display = 'block';
    } else {
        appDiv.style.display = 'none';
    }
}

// Toggle visibility after 3 seconds
setTimeout(toggleAppVisibility, 3000);
setTimeout(toggleAppVisibility, 6000);  // Toggle back after another 3 seconds  
console.log('Script loaded and executed.');
// End of main.js

let chips = 10;
let soda = 5;
let candy = 2;
let pizza = 20;

const totalCost = chips + soda + candy + pizza;
const taxRate = 0.07;

function calculateSalesTax(totalCost, taxRate){
    return totalCost + (totalCost * taxRate);
}
console.log(calculateSalesTax(totalCost, taxRate));