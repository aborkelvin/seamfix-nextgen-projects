const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const BlogRouter = require("./routes/blog.route");

const app = express();
const CONNECTION_URL = process.env.CONNECTION_URL;

/* Middlewares */
app.use(express.json());
app.use("/blog", BlogRouter);

mongoose
  .connect(
    `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@ac-c4pr2pd-shard-00-00.bfdeg7e.mongodb.net:27017,ac-c4pr2pd-shard-00-01.bfdeg7e.mongodb.net:27017,ac-c4pr2pd-shard-00-02.bfdeg7e.mongodb.net:27017/?ssl=true&replicaSet=atlas-9bj3ob-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => console.log("Successfully connected to Mongodb Atlas"))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("Server started");
});
