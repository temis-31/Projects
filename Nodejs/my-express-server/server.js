//jshint esversion

const express = require("express");

const app = express();

app.get("/", function (req, resp) {
  resp.send("<h1>Hello, world</h1>");
  console.log(req);
});

app.get("/contact", function (req, res) {
  res.send("Contact me at: pool@gmail.com");
});

app.get("/about", function (req, res) {
  res.send("I'm a web developer");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
