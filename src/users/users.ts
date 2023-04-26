import express, { Request, Response } from "express";

export const userRouter = express.Router();

userRouter.post("/login", (req: Request, res: Response) => {
  res.send("Login");
});

userRouter.post("/register", (req, res) => {
  res.send("Register");
});
