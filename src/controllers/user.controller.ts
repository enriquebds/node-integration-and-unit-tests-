import { Request, Response } from "express";
import createUserService from "../services/createUser.service";
import listUsersServices from "../services/listUser.service";

export class createUserController {
  async create(req: Request, res: Response) {
    const { id, name, email } = req.body;

    const createdUser = await createUserService({ id, name, email });

    return res.status(201).json({
      message: "User created",
      createdUser,
    });
  }

  async listUsers(req: Request, res: Response) {
    const users = await listUsersServices();

    return res.status(200).json({
      users,
    });
  }
}

export default createUserController;
