import express, { type Express, type Request, type Response } from "express";

const app: Express = express();
const port = 3000;

// 1. Multiple Callbacks
app.get(
  "/",
  (req: Request, res: Response, next: express.NextFunction) => {
    console.log("First Callback");
    next();
  },
  (req: Request, res: Response) => {
    res.send("Second Callback");
  },
);

// 2. Array of Callbacks
const cb1 = (req: Request, res: Response, next: express.NextFunction) => {
  console.log("First Callback.");
  next();
};
const cb2 = (req: Request, res: Response, next: express.NextFunction) => {
  console.log("Second Callback.");
  next();
};
const cb3 = (req: Request, res: Response) => {
  console.log("Third Callback.");
  res.send("This is the Array of Callbacks.");
};

app.get("/products", [cb1, cb2, cb3]);

// 3. Combination of Independent and Array of Callbacks
app.get(
  "/third",
  [cb1, cb2],
  (req: Request, res: Response, next: express.NextFunction) => {
    console.log("Third Callback.");
    next();
  },
  (req: Request, res: Response) => {
    console.log("Final Callback.");
    res.send("This is the Combination of Independent and Array of Callbacks.");
  },
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
