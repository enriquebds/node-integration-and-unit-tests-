import { prisma } from "../../prisma/client/client";
import { IUserBody } from "../interface/user.types";

const listUsersServices = (): Promise<IUserBody[]> => {
  const users = prisma.user.findMany();

  return users;
};

export default listUsersServices;
