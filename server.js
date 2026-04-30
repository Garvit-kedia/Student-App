const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();


app.use(cors());
app.use(bodyParser.json());



mongoose.connect("mongodb://127.0.0.1:2/studentDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


app.use("/api/students", require("./routes/students"));


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});