import express, { type Express, type Request, type Response } from "express";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  console.log("Get Request Received on /students");
  res.send("Hello, this is a GET request on /students!");
});

router.post("/", (req: Request, res: Response) => {
  console.log("Post Request Received on /students");
  res.send("Hello, this is a POST request on /students!");
});

router.put("/", (req: Request, res: Response) => {
  console.log("Put Request Received on /students");
  res.send("Hello, this is a PUT request on /students!");
});

router.delete("/", (req: Request, res: Response) => {
  console.log("Delete Request Received on /students");
  res.send("Hello, this is a DELETE request on /students!");
});

export default router;