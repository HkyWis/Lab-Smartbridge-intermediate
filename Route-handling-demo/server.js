const express = require("express");
const app = express();

// Middleware 
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

// Basic Routes
// Root route
app.get("/", (req, res) => {
  res.send("Welcome to Route Handling!");
});

// About route
app.get("/about", (req, res) => {
  res.send("<h1>About Us</h1>");
});

// Dynamic Routes
// Route parameter
app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Viewing Product ID: ${id}`);
});

// Query string
app.get("/search", (req, res) => {
  const term = req.query.q;
  res.send(`Searching for: ${term}`);
});

// 404 Handler
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
