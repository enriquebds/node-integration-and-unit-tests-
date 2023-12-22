import { prisma } from "../../prisma/client/client";
import { IUserBody } from "../interface/user.types";

const createUserService = async ({
  id,
  name,
  email,
}: IUserBody): Promise<IUserBody> => {
  const user = await prisma.user.create({
    data: {
      id: id,
      email: email,
      name: name,
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  return user;
};

export default createUserService;
