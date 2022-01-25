import { UserStatus } from "@prisma/client";
import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email } = request.body;

    const user = await prismaClient.user.create({
      data: {
        email : email,
        name : name,
        status : UserStatus.Online
      },
    });

    return response.json(user);
  }
}