import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class AddUserToGroupController {
  async handle(request: Request, response: Response) {
    const { groupId, userId } = request.body;

    const group = await prismaClient.group.create({
      data: {
          groupId : groupId,
          userId : userId
      },
    });

    return response.json(group);
  }
}