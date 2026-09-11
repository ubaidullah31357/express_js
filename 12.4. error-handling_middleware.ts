import express, {
  type Request,
  type Response,
  type NextFunction,
  type Express,
} from "express";

const app: Express = express();

app.get("/users", (req, res, next) => {
  const error = new Error("Database failed");
  next(error);
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//
// Define error-handling middleware functions in the same way as other middleware functions, except with four arguments instead of three, specifically with the signature (err, req, res, next).

// You must provide four arguments to identify it as an error-handling middleware function. Even if you don’t need to use the next object, you must specify it to maintain the signature. Otherwise, the next object will be interpreted as regular middleware and will fail to handle errors.
