// Arrays
let numbers = [1, 2, 3, 4];
let fruits = ["Apple", "Banana", "Orange"];

console.log("Initial numbers:", numbers);
console.log("Initial fruits:", fruits);

// Array methods
numbers.push(5);        
numbers.pop();          
numbers.unshift(0);     
numbers.shift();        

console.log("Updated numbers:", numbers);
console.log("Length of numbers:", numbers.length);

// Oobject
let person = {
  name: "Hengky",
  age: 21,
  isStudent: true
};

console.log("Person object:", person);
console.log("Name:", person.name);
console.log("Age:", person["age"]);

person.age = 22;
person["name"] = "Budi";

console.log("Updated person:", person);

// BUILT-IN METHODS

// Array 
let nums = [1, 2, 3, 4, 5];

// map 
let mapped = nums.map(n => n * 2);
console.log("Mapped:", mapped);

// filter 
let filtered = nums.filter(n => n % 2 === 0);
console.log("Filtered:", filtered);

// forEach 
console.log("forEach output:");
nums.forEach(n => console.log(n));


// Combine objects and arrays
let students = [
  { name: "A", score: 80 },
  { name: "B", score: 60 },
  { name: "C", score: 90 }
];

let passedStudents = students.filter(s => s.score > 70);
let studentNames = students.map(s => s.name);

console.log("Students:", students);
console.log("Passed Students:", passedStudents);
console.log("Student Names:", studentNames);

// TESTING

console.log("All operations executed successfully!");
