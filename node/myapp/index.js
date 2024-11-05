const express = require("express");

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello world for getting");
});
app.post("/", (req, res) => {
  res.send("This is your post");
});
app.put("/", (req, res) => {
  res.send("This is your put");
});
app.patch("/", (req, res) => {
  res.send("Patch this data");
});
app.delete("/", (req, res) => {
  res.send("This is your delete");
});

app.use("*", (req, res) => {
  res.status(404);
  res.send("Not Found");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
