const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var sum = num1 + num2;
  res.send("The sum is " + sum);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
