// Subtask 2.1 Connect to MongoDB
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/aggregation_demo")
.then(() => console.log("Database connected successfully"))
.catch(err => console.log(err));

// Subtask 2.2 Create Schema & Insert Data

const salesSchema = new mongoose.Schema({
  productName: String,
  category: String,
  price: Number,
  quantity: Number
});

const Sale = mongoose.model("Sale", salesSchema);

async function insertData() {
  await Sale.insertMany([
    { productName: "Laptop", category: "Electronics", price: 1000, quantity: 2 },
    { productName: "Phone", category: "Electronics", price: 500, quantity: 5 },
    { productName: "TV", category: "Electronics", price: 800, quantity: 1 },
    { productName: "Shirt", category: "Clothing", price: 50, quantity: 10 },
    { productName: "Jeans", category: "Clothing", price: 70, quantity: 6 },
    { productName: "Shoes", category: "Clothing", price: 100, quantity: 4 }
  ]);
  console.log("Sample data inserted");
}

// Step 3: Basic Aggregation
// Subtask 3.1 – $match
async function matchStage() {
  const result = await Sale.aggregate([
    { $match: { category: "Electronics" } }
  ]);
  console.log("Match Result:", result);
}

// Subtask 3.2 – $group
async function groupStage() {
  const result = await Sale.aggregate([
    {
      $group: {
        _id: "$category",
        totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } },
        totalProducts: { $sum: 1 }
      }
    }
  ]);
  console.log("Group Result:", result);
}

// Step 4: Advanced Aggregation
// Subtask 4.1 – $project

async function projectStage() {
  const result = await Sale.aggregate([
    {
      $project: {
        productName: 1,
        totalAmount: { $multiply: ["$price", "$quantity"] }
      }
    }
  ]);
  console.log("Project Result:", result);
}

// Subtask 4.2 – $sort
async function sortStage() {
  const result = await Sale.aggregate([
    {
      $project: {
        productName: 1,
        totalAmount: { $multiply: ["$price", "$quantity"] }
      }
    },
    { $sort: { totalAmount: -1 } }
  ]);
  console.log("Sorted Result:", result);
}

// Step 5: Complete Aggregation Pipeline
async function fullPipeline() {
  const result = await Sale.aggregate([
    { $match: { category: "Electronics" } },
    {
      $group: {
        _id: "$category",
        totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } }
      }
    },
    {
      $project: {
        category: "$_id",
        totalRevenue: 1,
        _id: 0
      }
    },
    { $sort: { totalRevenue: -1 } }
  ]);

  console.log("Full Pipeline Result:", result);
}

// Step 6: Run Application
async function run() {
  await insertData();
  await matchStage();
  await groupStage();
  await projectStage();
  await sortStage();
  await fullPipeline();
}

run();

