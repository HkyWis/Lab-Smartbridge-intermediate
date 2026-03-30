const express = require("express");
const app = express();
const errorHandler = require("./middleware/errorHandler");

// Middleware
app.use(express.json()); 

// Routes
// Success route
app.get("/success", (req, res) => {
  res.json({
    success: true,
    message: "Request successful!"
  });
});

// Error route 
app.get("/error", (req, res, next) => {
  const err = new Error("This is a forced error!");
  err.status = 500;
  next(err); 
});

// Validation error
app.get("/validation", (req, res, next) => {
  const err = new Error("Invalid input data");
  err.status = 400;
  next(err);
});

// 404 Handler 
app.use((req, res, next) => {
  const err = new Error("Route not found");
  err.status = 404;
  next(err);
});

// Error Middleware 
app.use(errorHandler);

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
