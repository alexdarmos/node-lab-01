//import express
const express = require("express");
//add router for students - splits routes into separate modules
const cartItems = express.Router();


class CartAPI {
    constructor() {
        this.items = require(`./cartData`);
    }
}

let api = new CartAPI();

// respond with "Hello Class!" at URI: /students
cartItems.get("/", (req, res) => {
    console.log("Here are items in cart...")
    res.send(api);
});

// accept POST request at URI: /students
cartItems.post("/", (req, res) => {
    console.log(req.body); 
    res.send("Add item to cart...");
});
// accept PUT request at URI: /students
cartItems.put("/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.send("Updating cart item...");
});
// accept DELETE request at URI: /students
cartItems.delete("/:id", (req, res) => {
    console.log(req.params.id);
});

module.exports = cartItems;