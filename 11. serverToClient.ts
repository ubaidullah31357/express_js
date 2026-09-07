import express, { type Express, type Request, type Response } from "express";
import posts from "./posts";

const app: Express = express();
const port = 3000;

app.get("/posts", (req: Request, res: Response) => {
  res.json(posts);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
