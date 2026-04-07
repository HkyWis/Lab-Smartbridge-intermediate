// STEP 2: Array Destructuring
console.log("=== Array Destructuring ===");

const numbers = [10, 20, 30, 40];

// basic
const [a, b] = numbers;
console.log("a:", a); 
console.log("b:", b); 

// skip element
const [first, , third] = numbers;
console.log("first:", first); 
console.log("third:", third); 

// STEP 3: Object Destructuring
console.log("=== Object Destructuring ===");

const user = {
  name: "John",
  age: 25,
  city: "Jakarta"
};

const { name, age } = user;
console.log("name:", name);
console.log("age:", age);

// STEP 4: Advanced Destructuring
console.log("=== Advanced Destructuring ===");

const person = {
  id: 1,
  info: {
    fullName: "Alice",
    address: {
      city: "Bandung"
    }
  }
};

// nested destructuring
const {
  info: {
    fullName,
    address: { city }
  }
} = person;

console.log("fullName:", fullName);
console.log("city:", city);

// default value
const { country = "Indonesia" } = person;
console.log("country:", country);

// renaming variable
const { name: userName = "Guest" } = user;
console.log("userName:", userName);

// STEP 5: Destructuring in Function
console.log("=== Function Destructuring ===");

function displayUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

displayUser(user);

// array destructuring in function
function getCoordinates([x, y]) {
  console.log(`X: ${x}, Y: ${y}`);
}

getCoordinates([100, 200]);