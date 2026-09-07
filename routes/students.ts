import express, { type Express, type Request, type Response } from "express";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/students.ts";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.put("/", updateUser);
router.delete("/", deleteUser);

export default router;
