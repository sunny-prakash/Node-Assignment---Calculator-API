const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here

app.get("/", (req, res) => {
    res.send("Hello World");
});

var value = 1000000;
app.post("/add", (req, res) => {
    let { num1, num2 } = req.body;
    // console.log(req.body);
    let resObj = {
        status: null,
        message: null,
        sum: null,
    };
    if (typeof num1 === "string" || typeof num2 === "string") {
        resObj.status = "error";
        resObj.message = "Invalid data types";
        resObj.sum = "";
    } else if (num1 < -value || num2 < -value) {
        resObj.status = "error";
        resObj.message = "Underflow";
        resObj.sum = "";
    } else if (num1 > value || num2 > value) {
        resObj.status = "error";
        resObj.message = "Overflow";
        resObj.sum = "";
    } else {
        resObj.status = "success";
        resObj.message = "the sum of given two numbers";
        resObj.sum = num1 + num2;
    }
    res.send(resObj);
});
app.post("/sub", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});
app.post("/multiply", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});
app.post("/divide", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
