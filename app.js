const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/home", (req, res) => {
    res.send("Estoy en home")
})

app.get("/productDetail", (req, res) => {
    res.send("Estoy en product detail")
})

app.get("/cart", (req, res) => {
    res.send("Estoy en el carrito de compras")
})

app.get("/login", (req, res) => {
    res.send("Estoy en el sitio de login")
})

app.get("/register", (req, res) => {
    res.send("Estoy en el sitio de registro")
})

app.listen(port, () => {
    console.log(`Server running on site http://localhost:${port}`)
})