// import core module
const express = require("express");
const mongoose = require("mongoose");

// variables
const port = 3001;
const app = express();

//middleware
app.use(express.json());

app.get("/eldesoky", (req, res) => {
  res.send("Ahmed youssf br");
});

app.get("/youssef Said Galad", (req, res) => {
  res.send("youssef br");
});
app.get("/youssef Said Youssef", (req, res) => {
  res.send("youssef br");
});
app.get("/Zien", (req, res) => {
  res.send("this is response come from Zien branch");
});

// database server
mongoose
  .connect("mongodb://127.0.0.1:27017/todo_list")
  .then((_) => console.log("database connected successfully"));

app.listen(port, () => console.log(`server is listening on port: ${port}`));
