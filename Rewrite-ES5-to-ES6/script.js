// Step 2: Convert var → let/const
const appName = "ES6 Demo";
let count = 0;

// Step 3: Arrow Function
const greet = (name = "User") => {
  return `Hello, ${name}! Welcome to ${appName}`;
};

// Step 3 & Step 4: Arrow & Template Literal
const sum = (a, b) => {
  return `${a} + ${b} = ${a + b}`;
};

// Step 5: Destructuring
const user = {
  name: "Hengky",
  age: 21,
  role: "Student"
};
// Step 5: Spread Operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

// Step 5: Default parameters
const showUser = ({ name, age, role = "Guest" }) => {
  return `Name: ${name}, Age: ${age}, Role: ${role}`;
};

// Output ke HTML
const output = document.getElementById("output");

output.innerHTML = `
  <p>${greet(user.name)}</p>
  <p>${showUser(user)}</p>
  <p>Numbers: ${numbers}</p>
  <p>New Numbers (Spread): ${newNumbers}</p>
  <p>${sum(5, 3)}</p>
`;
