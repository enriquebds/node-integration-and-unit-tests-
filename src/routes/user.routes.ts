import { Router } from "express";
import createUserController from "../controllers/user.controller";

const userController = new createUserController();
const route = Router();

route.post("/", userController.create);
route.get("/", userController.listUsers);

export default route;
