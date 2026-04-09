const mongoose = require("mongoose");

// CONNECT TO DATABASE
mongoose.connect("mongodb://127.0.0.1:27017/query_analysis_demo")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// SCHEMA & MODEL
const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  stock: Number
});

productSchema.index({ category: 1 });
productSchema.index({ category: 1, price: 1 });

const Product = mongoose.model("Product", productSchema);

// MAIN FUNCTION
async function runLab() {
  try {
    // INSERT SAMPLE DATA
    const sampleProducts = [];

    for (let i = 1; i <= 30; i++) {
      sampleProducts.push({
        name: "Product " + i,
        category: i % 2 === 0 ? "Electronics" : "Clothing",
        price: Math.floor(Math.random() * 1000),
        stock: Math.floor(Math.random() * 100)
      });
    }

    await Product.insertMany(sampleProducts);

    // STEP 3: QUERY WITHOUT INDEX
    console.log("\nQUERY WITHOUT INDEX")
    let result1 = await Product.find({ category: "Electronics" })
      .explain("executionStats");

    console.log({
      stage: result1.executionStats.executionStages.stage,
      totalDocsExamined: result1.executionStats.totalDocsExamined,
      executionTimeMillis: result1.executionStats.executionTimeMillis
    });

    // CREATE SINGLE INDEX
    await Product.collection.createIndex({ category: 1 });

    // QUERY WITH SINGLE INDEX
    console.log("\nQUERY WITH SINGLE INDEX")
    let result2 = await Product.find({ category: "Electronics" })
      .explain("executionStats");

    console.log({
      stage: result2.executionStats.executionStages.stage,
      totalDocsExamined: result2.executionStats.totalDocsExamined,
      executionTimeMillis: result2.executionStats.executionTimeMillis
    });

    // SORT QUERY WITHOUT COMPOUND INDEX
    console.log("\nSORT QUERY WITHOUT COMPOUND INDEX")
    let result3 = await Product.find({ category: "Electronics" })
      .sort({ price: 1 })
      .explain("executionStats");

    console.log({
      stage: result3.executionStats.executionStages.stage,
      totalDocsExamined: result3.executionStats.totalDocsExamined,
      executionTimeMillis: result3.executionStats.executionTimeMillis
    });

    // CREATE COMPOUND INDEX
    await Product.collection.createIndex({ category: 1, price: 1 });

    // SORT QUERY WITH COMPOUND INDEX
    console.log("\nSORT QUERY WITH COMPOUND INDEX")
    let result4 = await Product.find({ category: "Electronics" })
      .sort({ price: 1 })
      .explain("executionStats");

    console.log({
      stage: result4.executionStats.executionStages.stage,
      totalDocsExamined: result4.executionStats.totalDocsExamined,
      executionTimeMillis: result4.executionStats.executionTimeMillis
    });

  } catch (error) {
    console.error(error);
  } finally {
    mongoose.connection.close();
  }
}

// RUN
runLab();
