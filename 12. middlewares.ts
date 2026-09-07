import express, { type Express, type Request, type Response } from "express";
import userAuthentication from "./middlewares/userAuthentication";

const app: Express = express();
const port = 3000;

// For a single route, you can also apply the middleware like this:
app.get("/protected", userAuthentication, (req: Request, res: Response) => {
  res.send("This is a protected route that requires user authentication!");
});

// Use the user authentication middleware for all routes
app.use(userAuthentication);

app.get("/", (req: Request, res: Response) => {
  res.send(
    "Welcome to the Express server with user authentication middleware!",
  );
});

app.get("/about", (req: Request, res: Response) => {
  res.send("About page with user authentication middleware!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
