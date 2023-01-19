const express = require("express");
var calculatorController= require("../controllers/calculatorController")

var router = express.Router();

router.get("/add", (req, res) => {
    calculatorController.addNumbers(req,res)
})


/* router.get("/add", (req, res) => {
    res.send("Add");
}) */


router.get("/add", (req, res) => {
    const {num1, num2} = req.query;
    let sum = parseInt(num1) + parseInt(num2);
    console.log(sum);
    res.status(200);
    res.json({result:sum});
});



module.exports = router