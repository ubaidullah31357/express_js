import express, {
  type Request,
  type Response,
  type NextFunction,
  type Express,
} from "express";

// Example of Application-level Middleware (instance of app object):

const app: Express = express();

app.get(
  "/user/:id",
  (req: Request, res: Response, next: NextFunction) => {
    // if the user ID is 0, skip to the next route
    if (req.params.id === "0") next("route");
    // otherwise pass the control to the next middleware function in this stack
    else next();
  },
  (req: Request, res: Response) => {
    // send a regular response
    res.send("regular");
  },
);

// handler for the /user/:id path, which sends a special response
app.get("/user/:id", (req: Request, res: Response) => {
  res.send("special");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//
// Call next('route') to skip the remaining middleware functions in a router middleware stack and pass control to the next route.

// It will cause the app to Skip the remaining middleware/handlers for the current route and move to the next matching route.

// next('route') will work only in middleware functions that were loaded by using the app.METHOD() or router.METHOD() functions.
