import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.send(`hello ${req.query.name}`);
});

test("Test Expressjs", async () => {
  const response = await request(app).get("/").query({ name: "rizkon" });
  expect(response.text).toBe("hello rizkon");
});
