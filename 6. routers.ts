import express, { type Express } from "express";
import studentRoutes from "./routes/students.ts";

const app: Express = express();
const port = 3000;

app.use("/students", studentRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
