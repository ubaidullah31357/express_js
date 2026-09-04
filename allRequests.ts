import express, { type Express, type Request, type Response } from "express";

const app: Express = express();
const port = 3000;

// Multiple HTTP Requests on a single route
app.get("/", (req: Request, res: Response) => {
  console.log("Get Request Received");
  res.send("Hello, this is a GET request!");
});

app.post("/", (req: Request, res: Response) => {
  console.log("Post Request Received");
  res.send("Hello, this is a POST request!");
});

app.put("/", (req: Request, res: Response) => {
  console.log("Put Request Received");
  res.send("Hello, this is a PUT request!");
});

app.delete("/", (req: Request, res: Response) => {
  console.log("Delete Request Received");
  res.send("Hello, this is a DELETE request!");
});

app
  .route("/route")
  .get((req: Request, res: Response) => {
    console.log("Get Request on /route");
    res.send("Get Request on /route");
  })
  .post((req: Request, res: Response) => {
    console.log("Post Request on /route");
    res.send("Post Request on /route");
  })
  .put((req: Request, res: Response) => {
    console.log("Put Request on /route");
    res.send("Put Request on /route");
  })
  .delete((req: Request, res: Response) => {
    console.log("Delete Request on /route");
    res.send("Delete Request on /route");
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
