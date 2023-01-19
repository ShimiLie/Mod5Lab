const express = require("express");
const router = express.Router();




router.get("/", (req, res) => {
    res.send("All Users")
});

router.get("/new", (req, res) => {
    res.send("Add User")
});

router.post("/", (req, res) => {
    res.send("Create User")
});


 // router.get("/:id")

module.exports = router