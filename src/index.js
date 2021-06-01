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
    let resObj = {
        status: null,
        message: null,
        sum: null,
    };
    let total = num1 + num2;
    if (typeof num1 === "string" || typeof num2 === "string") {
        resObj.status = "error";
        resObj.message = "Invalid data types";
        resObj.sum = "";
    } else if (num1 < -value || num2 < -value || total < -value) {
        resObj.status = "error";
        resObj.message = "Underflow";
        resObj.sum = "";
    } else if (num1 > value || num2 > value || total > value) {
        resObj.status = "error";
        resObj.message = "Overflow";
        resObj.sum = "";
    } else {
        resObj.status = "success";
        resObj.message = "the sum of given two numbers";
        resObj.sum = total;
    }
    res.send(resObj);
});
app.post("/sub", (req, res) => {
    let { num1, num2 } = req.body;
    let resObj = {
        status: null,
        message: null,
        sum: null,
    };
    let total = num1 - num2;
    if (typeof num1 === "string" || typeof num2 === "string") {
        resObj.status = "error";
        resObj.message = "Invalid data types";
        resObj.sum = "";
    } else if (num1 < -value || num2 < -value || total < -value) {
        resObj.status = "error";
        resObj.message = "Underflow";
        resObj.sum = "";
    } else if (num1 > value || num2 > value || total > value) {
        resObj.status = "error";
        resObj.message = "Overflow";
        resObj.sum = "";
    } else {
        resObj.status = "success";
        resObj.message = "the difference of given two numbers";
        resObj.sum = total;
    }
    res.send(resObj);
});
app.post("/multiply", (req, res) => {
    let { num1, num2 } = req.body;
    let resObj = {
        status: null,
        message: null,
        sum: null,
    };
    let total = num1 * num2;
    if (typeof num1 === "string" || typeof num2 === "string") {
        resObj.status = "error";
        resObj.message = "Invalid data types";
        resObj.sum = "";
    } else if (num1 < -value || num2 < -value || total < -value) {
        resObj.status = "error";
        resObj.message = "Underflow";
        resObj.sum = "";
    } else if (num1 > value || num2 > value || total > value) {
        resObj.status = "error";
        resObj.message = "Overflow";
        resObj.sum = "";
    } else {
        resObj.status = "success";
        resObj.message = "The product of given numbers";
        resObj.sum = total;
    }
    res.send(resObj);
});
app.post("/divide", (req, res) => {
    let { num1, num2 } = req.body;
    let resObj = {
        status: null,
        message: null,
        sum: null,
    };
    let total = num1 / num2;
    if (num2 === 0) {
        resObj.status = "error";
        resObj.message = "Cannot divide by zero";
        resObj.sum = "";
    } else if (typeof num1 === "string" || typeof num2 === "string") {
        resObj.status = "error";
        resObj.message = "Invalid data types";
        resObj.sum = "";
    } else if (num1 < -value || num2 < -value || total < -value) {
        resObj.status = "error";
        resObj.message = "Underflow";
        resObj.sum = "";
    } else if (num1 > value || num2 > value || total > value) {
        resObj.status = "error";
        resObj.message = "Overflow";
        resObj.sum = "";
    } else {
        resObj.status = "success";
        resObj.message = "The division of given numbers";
        resObj.sum = total;
    }
    res.send(resObj);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
