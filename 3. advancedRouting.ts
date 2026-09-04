import express, { type Express, type Request, type Response } from "express";

const app: Express = express();
const port = 3000;

app.get(["/abcd", "/abd"], (req, res) => {
  res.send("Request URL must be '/abcd' or '/abd'");
});

app.get(/java/, (req, res) => {
  res.send("Request URL must contains 'java'");
});

app.get(/^\/users\/[0-9]{4}$/, (req, res) => {
  res.send(
    "Request URL must match the pattern '/users/XXXX' where X is a digit between 0 and 9",
  );
});

app.get("/products/shoes/bata", (req, res) => {
  res.send("Request URL must be '/products/shoes/bata'");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
