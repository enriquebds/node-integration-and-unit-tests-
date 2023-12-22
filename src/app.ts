import express from "express";
import userRouter from "./routes/user.routes";

// let cors = require("cors");

const app = express();

// app.use(cors);
app.use(express.json());
app.use("/user", userRouter);

export default app;
