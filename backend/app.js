const express = require('express');

const app = express();
const axios = require("axios");


app.get("/api/products", async (req, res) => {
  const response = await axios.get("https://e-elan48.000webhostapp.com/products.php");
  res.send(response.data);
});

app.get("/api/users", async (req, res) => {
  const response = await axios.get("https://e-elan48.000webhostapp.com/users.php");
  res.send(response.data);
});

app.get("/api/categories", async (req, res) => {
  const response = await axios.get("https://e-elan48.000webhostapp.com/categories.php");
  res.send(response.data);
});

app.get("/api/cartTable", async (req, res) => {
  const response = await axios.get("https://e-elan48.000webhostapp.com/cart-table.php");
  res.send(response.data);
});

app.get("/api/cart", async (req, res) => {
  const response = await axios.get("https://e-elan48.000webhostapp.com/cart.php");
  res.send(response.data);
});

module.exports = app;