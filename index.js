const express =require("express")
const app = express();
const port = 3000;
const port2 = 8000;


app.get("/", (req, res) => { 
    res.send("Welcoome!")
});

app.get("/wishlist", (req, res) => { 
    res.send("My wishlist!")
});


app.use(express.static("public"));




app.listen(port, () => {
    console.log(`Local host ${port}`)
});

app.listen(port2, () => {
    console.log(`Local host ${port2}`)
});

