import express, { NextFunction, Request, Response } from "express";
import { userRouter } from "./users/users";

const port = 8000;
const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("Время: ", Date.now());
  next();
});

app.use("/users", userRouter);

// app.get("/user", (req, res) => {
//   res.send({ success: true });
// });

app.get("/hello", (req: Request, res: Response) => {
  res.send("GET");
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
