import express, {
  type Express,
  type Request,
  type Response,
  type NextFunction,
} from "express";

const app: Express = express();
const router = express.Router();

function logOriginalUrl(req: Request, res: Response, next: NextFunction) {
  console.log("Request URL:", req.originalUrl);
  next();
}

function currentTime(req: Request, res: Response, next: NextFunction) {
  const time = Date.now();
  console.log("Time: ", time);
  next();
}

// handler for the /user/:id path, which sends a special response
router.get(
  "/user/:id",
  [logOriginalUrl, currentTime],
  (req: Request, res: Response) => {
    console.log(req.params.id);
    res.send("special");
  },
);

// mount the router on the app
app.use("/", router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//
// Router-level middleware is middleware that is bound to an instance of express.Router(). It works in the same way as application-level middleware, except it is only applied to the router instance. This allows you to modularize your middleware and route handlers, making your code more organized and easier to maintain.
