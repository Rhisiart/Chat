import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class ReadUserByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const user = await prismaClient.user.findUnique({
      where : {
        id : Number(id)
      },
    });

    return response.json(user);
  }
}