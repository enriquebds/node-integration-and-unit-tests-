import express from "express";

// let cors = require("cors");

const app = express();

// app.use(cors);
app.use(express.json());

export default app;
