const express = require("express");
const bodyParser = require("body-parser");
const { get } = require("express/lib/response");
let result;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  result = num1 + num2;

  res.send("The result of the calculation is " + result);
});

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", (req, res) => {
  let height = parseFloat(req.body.height);
  let weight = parseFloat(req.body.weight);
  result = weight / Math.pow(height, 2);

  res.send("Your BMI is " + result);
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
