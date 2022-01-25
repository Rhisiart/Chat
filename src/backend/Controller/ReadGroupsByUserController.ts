import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class ReadGroupsByUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const groups = await prismaClient.groups.findMany({
      where: {
        users: {
          some: {
            userId : Number(id)
          }
        }
      },
    });

    return response.json(groups);
  }
}