import express, { type Express } from "express";
import studentsRouter from "./routes/students";

const app: Express = express();
const port = 3000;

app.use("/students", studentsRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// A controller is a function that contains the main logic for handling a request.
// Controllers make your application:
// >> More organized
// >> Easier to maintain
// >> Easier to test
// >> Easier to scale
// >> Less cluttered in route files
