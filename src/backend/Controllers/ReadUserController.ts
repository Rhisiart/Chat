import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class ReadUserController {
  async handle(request: Request, response: Response) {

    const users = await prismaClient.user.findMany({
        take: 100
    });

    return response.json(users);
  }
}