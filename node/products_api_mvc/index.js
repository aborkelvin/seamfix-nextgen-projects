const express = require("express");
const productsRoute = require("./routes/product.route");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use("/products", productsRoute);

app.get("/", (req, res) => {
  res.send("Welcome Message");
});

app.listen(PORT, () => {
  console.log("Products server is up and running");
});
