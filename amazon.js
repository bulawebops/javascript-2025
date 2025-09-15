// create variables to hold the item price, shipping cost, tax rate, and quantity
let itemPrice = 20.00; // price of a single item
let shippingCost = 5.00; // flat shipping cost
let taxRate = 0.07; // 7% sales tax
let quantity = 0; // initial quantity of items

// function to calculate the total cost
function calculateTotal() {
    let itemsCost = itemPrice * quantity;
    let totalBeforeTax = itemsCost + shippingCost;
    let taxAmount = totalBeforeTax * taxRate;
    let orderTotal = totalBeforeTax + taxAmount;

// update the DOM with the calculated values
    document.getElementById('item').textContent = itemsCost.toFixed(2);
    document.getElementById('shipping').textContent = shippingCost.toFixed(2);
    document.getElementById('total').textContent = totalBeforeTax.toFixed(2);
    document.getElementById('tax').textContent = taxAmount.toFixed(2);
    document.getElementById('orderTotal').textContent = orderTotal.toFixed(2);
}
calculateTotal(); // initial calculation

// event listeners for the buttons to add or remove items
document.getElementById('addItem').addEventListener('click', () => {
    quantity++;
    calculateTotal();
});

document.getElementById('removeItem').addEventListener('click', () => {
    if (quantity > 0) {
        quantity--;
        calculateTotal();
    }
});
return orderTotal;
}

// Example usage
let orderTotal = totalCost; // Assuming no items initially


console.log(calculateSalesTax(orderTotal, taxRate)); // Outputs the total cost including sales tax
console.log(calculateSalesTax(37, 0.07)); // 39.59



