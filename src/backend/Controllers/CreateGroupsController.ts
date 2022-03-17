import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateGroupsController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const group = await prismaClient.groups.create({
      data: {
          name : name
      },
    });

    return response.json(group);
  }
}