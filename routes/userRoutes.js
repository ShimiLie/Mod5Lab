const express = require("express");
const router = express.Router();




app.get("/", (req,res) => {
    res.send("All Users")
});

app.get("/new", (req,res) => {
    res.send("Add User")
});

app.post("/", (req,res) => {
    res.send("Create User")
});

module.exports = router