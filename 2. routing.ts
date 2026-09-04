import express, { type Express, type Request, type Response } from "express";

const app: Express = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/about", (req: Request, res: Response) => {
  res.send("<h1>About Page</h1>");
});

app.get("/contact", (req: Request, res: Response) => {
  res.send("<h1>Contact Page</h1>");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});