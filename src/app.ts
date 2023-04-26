import express, { Express } from "express";
import { userRouter } from "./users/users";

export class App {
  public app: Express;
  port: number;

  constructor() {
    this.app = express();
    this.port = 8000;
  }

  useRoutes() {
    this.app.use("/users", userRouter);
  }

  public async init() {
    this.useRoutes();
  }
}
