import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  const type = req.get("accept");
  res.send(`Hello ${type}`);
});

test("Test Expressjs", async () => {
  const response = await request(app).get("/").set("accept", "text/plain");
  expect(response.text).toBe("Hello text/plain");
});
