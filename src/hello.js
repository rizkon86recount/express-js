import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/rizkon", (req, res) => {
  res.send("hello rizkon");
});

app.listen(3000, () => {
  console.info("server started on port 3000");
});
