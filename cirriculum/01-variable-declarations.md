# ES2015 (ES6) Variables: `var`, `let`, and `const`

ES2015 (also known as ES6) introduced two new ways to create variables: `let` and `const`. Before diving into the differences among `var`, `let`, and `const`, we must first understand **variable declarations vs. initializations**, **scope**, and **hoisting**.

---

## 🧩 Variable Declaration vs Initialization

- **Declaration** introduces a new identifier.

```javascript
var declaration;
console.log(declaration); // undefined
```

When declared, variables in JavaScript are automatically initialized with the value `undefined`.

- **Initialization** happens when a value is first assigned to a variable.

```javascript
var declaration;
console.log(declaration); // undefined

declaration = 'This is an initialization';
```

Here, we assign (initialize) the variable with a string value.

---

## 🌐 Scope

**Scope** defines where variables and functions are accessible in a program. In JavaScript, there are two main kinds of scope:

1. **Global scope** — accessible everywhere.
2. **Function scope** — accessible only within the function and nested functions.

```javascript
function getDate() {
  var date = new Date();
  return date;
}

getDate();
console.log(date); // ❌ ReferenceError
```

The variable `date` is scoped to `getDate()` and cannot be accessed outside it.

Nested functions can still access it:

```javascript
function getDate() {
  var date = new Date();

  function formatDate() {
    return date.toDateString().slice(4); // ✅ Access allowed
  }

  return formatDate();
}
```

### 🧠 Function Scope vs Block Scope

Consider this example:

```javascript
function discountPrices(prices, discount) {
  var discounted = [];

  for (var i = 0; i < prices.length; i++) {
    var discountedPrice = prices[i] * (1 - discount);
    var finalPrice = Math.round(discountedPrice * 100) / 100;
    discounted.push(finalPrice);
  }

  console.log(i); // 3
  console.log(discountedPrice); // 150
  console.log(finalPrice); // 150
  return discounted;
}
```

Even though `i`, `discountedPrice`, and `finalPrice` were declared inside the loop, they are still accessible outside because `var` is **function-scoped**, not **block-scoped**.

---

## 🚀 Hoisting

**Hoisting** means JavaScript moves variable declarations to the top of their scope during compilation, initializing them as `undefined`.

```javascript
function discountPrices(prices, discount) {
  console.log(discounted); // undefined

  var discounted = [];
  for (var i = 0; i < prices.length; i++) {
    var discountedPrice = prices[i] * (1 - discount);
    var finalPrice = Math.round(discountedPrice * 100) / 100;
    discounted.push(finalPrice);
  }

  return discounted;
}
```

During execution, variables are **hoisted** to the top, meaning declarations exist before runtime, but initializations don’t happen until later.

---

## ⚔️ `var` vs `let` vs `const`

### 🔹 `var`
- Function-scoped
- Hoisted and initialized with `undefined`
- Can be redeclared and reassigned

### 🔹 `let`
- Block-scoped (limited to `{}`)
- Hoisted but not initialized (temporal dead zone)
- Cannot be accessed before declaration — results in `ReferenceError`

```javascript
function discountPrices(prices, discount) {
  let discounted = [];

  for (let i = 0; i < prices.length; i++) {
    let discountedPrice = prices[i] * (1 - discount);
    let finalPrice = Math.round(discountedPrice * 100) / 100;
    discounted.push(finalPrice);
  }

  console.log(i); // ❌ ReferenceError
}
```

**Summary:**
- `var`: Function-scoped, undefined before declaration
- `let`: Block-scoped, ReferenceError before declaration

---

## 🔒 `let` vs `const`

`const` behaves almost exactly like `let`, except it **cannot be reassigned** after initialization.

```javascript
let name = 'Tyler';
const handle = 'tylermcginnis';

name = 'Tyler McGinnis'; // ✅
handle = '@tylermcginnis'; // ❌ TypeError
```

However, **const objects are not immutable** — their properties can still change:

```javascript
const person = { name: 'Kim Kardashian' };

person.name = 'Kim Kardashian West'; // ✅
person = {}; // ❌ TypeError
```

---

## 💡 Best Practices

1. **Always use `const` by default.**
   - It signals that the variable should not change.
2. **Use `let` when reassignment is needed.**
   - Especially for loop counters or accumulators.
3. **Avoid using `var`.**
   - It introduces function scoping and hoisting issues.

---

## 🧭 Quick Reference Table

| Keyword | Scope Type | Hoisting Behavior | Reassignment | Redeclaration | Common Use |
|----------|-------------|------------------|---------------|----------------|--------------|
| `var` | Function | Hoisted (undefined) | ✅ | ✅ | Legacy code |
| `let` | Block | Hoisted (TDZ → ReferenceError) | ✅ | ❌ | Loops, variables that change |
| `const` | Block | Hoisted (TDZ → ReferenceError) | ❌ | ❌ | Constants, immutable references |

---

## 🧾 Recap

- `var`: Function scoped, initialized as `undefined`, can be redeclared.
- `let`: Block scoped, cannot be accessed before declaration, can be reassigned.
- `const`: Block scoped, cannot be reassigned, not fully immutable.

➡️ **Rule of thumb:** Use `const` whenever possible, `let` when necessary, and avoid `var` entirely.
