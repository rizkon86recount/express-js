import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello ${req.query.firstName} ${req.query.lastName}`);
});

test("Test Expressjs", async () => {
  const response = await request(app)
    .get("/")
    .query({ firstName: "rizkon", lastName: "recount" });
  expect(response.text).toBe("Hello rizkon recount");
});
