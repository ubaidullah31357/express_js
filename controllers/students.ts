import express, { type Request, type Response } from "express";

const getUsers = (req: Request, res: Response) => {
  console.log("Student Id Accessed.");
  res.send("Request Received.");
};

const createUser = (req: Request, res: Response) => {
  console.log("Creating a new student.");
  res.send("Student Created.");
};

const updateUser = (req: Request, res: Response) => {
  console.log("Updating student information.");
  res.send("Student Updated.");
};

function deleteUser(req: Request, res: Response) {
  console.log("Deleting student.");
  res.send("Student Deleted.");
}

export { getUsers, createUser, updateUser, deleteUser };
