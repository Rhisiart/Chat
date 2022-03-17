import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class ReadMessagesPerGroupController {
  async handle(request: Request, response: Response) {
    const { groupId } = request.params;

    const user = await prismaClient.message.findMany({
      where: {
        chat : {
            some : {
                groupId : Number(groupId)
            }
        }
      },
    });

    return response.json(user);
  }
}