const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const PORT = 5000;

// API Endpoint
app.get("/api/greet", (req, res) => {

  const name = req.query.name;
 
  
  if (!name) {
    return res.status(400).json({ error: "Name is required." });
  }
  res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});


app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running",
  });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


