const express =require("express")
const app = express();
const swaggerUi= require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const port = 3000;
const port2 = 8000;



/* app.get("/", (req, res) => { 
    res.send("Welcoome!")
}); */

app.get("/wishlist", (req, res) => { 
    res.send("My wishlist!")
});


app.use(express.static("public"));


const userRouter = require("./routes/userRoutes")

app.use("/users", userRouter)


const calculatorRouter = require("./routes/calculatorRoute");

app.use("", calculatorRouter);


app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
    );

app.listen(port, () => {
    console.log(`Local host ${port}`)
});

app.listen(port2, () => {
    console.log(`Local host ${port2}`)
});

