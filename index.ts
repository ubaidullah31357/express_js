import express, {
  type Request,
  type Response,
  type NextFunction,
  type Express,
} from "express";
import path from "path";

const app: Express = express();

app.use(express.static("./public"));

app.get("/", (req: Request, res: Response) => {
  console.log("Static Pages Loaded.");
  // res.sendFile(path.join(process.cwd(), "./public/index.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
