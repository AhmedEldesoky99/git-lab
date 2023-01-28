// import core module
const express = require("express");
const mongoose = require("mongoose");

// variables
const ports = 3000;
const app = express();

//middleware
app.use(express.json());

app.get("/eldesoky", (req, res) => {
  res.send("Ahmed youssf br");
});

app.get("/youssef", (req, res) => {
  res.send("youssf br");
});

// database server
mongoose
  .connect("mongodb://127.0.0.1:27017/todo_list")
  .then((_) => console.log("database connected successfully"));

app.listen(ports, () => console.log(`server is listening on port: ${ports}`));
