import express, { type Express, type Request, type Response } from "express";

const app: Express = express();
const port = 3000;

app.get("/product", (req: Request, res: Response) => {
  const { category, id } = req.query;
  res.send(`Product - Category: ${category}, Product - ID: ${id}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Query parameters are optional values added to the URL after ?. They are commonly used to send filtering, searching, sorting, or other additional information to the server.
// Used to get the data from the client to the server.
