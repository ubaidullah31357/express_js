import express, {
  NextFunction,
  type Express,
  type Request,
  type Response,
} from "express";

const app: Express = express();
const port = 3000;

app.param("id", (req: Request, res: Response, next: NextFunction, id) => {
  console.log(`User Id: ${id}`);
  next();
});

app.get("/user/:id", (req: Request, res: Response) => {
  console.log("User Id Accessed.");
  res.send("Request Received.");
});

app.get("/student/:id", (req: Request, res: Response) => {
  console.log("Student Id Accessed.");
  res.send("Request Received.");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
