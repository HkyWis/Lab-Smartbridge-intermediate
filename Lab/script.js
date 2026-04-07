// Step 2: Conditional Statements

let score = 85;

// If, else if, else logic
if (score >= 90) {
    console.log("Excellent! You scored an A.");
} else if (score >= 75) {
    console.log("Good job! You scored a B.");
} else if (score >= 60) {
    console.log("You passed with a C.");
} else {
    console.log("Sorry, you failed.");
}

// Step 3: Loops

// For loop example
console.log("\nFor loop example:");
for (let i = 1; i <= 5; i++) {
    console.log("Iteration number " + i);
}

// While loop example
console.log("\nWhile loop example:");
let count = 1;
while (count <= 5) {
    console.log("Count is " + count);
    count++;
}

// Step 4: Functions
// Function to add two numbers
function addNumbers(a, b) {
    return a + b;
}

// Function to greet user
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Using functions
let sum = addNumbers(10, 20);
console.log("\nSum of 10 and 20 is: " + sum);

greet("Student");