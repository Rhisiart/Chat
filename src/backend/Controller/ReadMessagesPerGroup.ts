import { UserStatus } from "@prisma/client";
import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class ReadMessagesPerGroupController {
  async handle(request: Request, response: Response) {
    const { groupId } = request.body;

    const user = await prismaClient.message.findMany({
      where: {
        chat : {
            some : {
                groupId : groupId
            }
        }
      },
    });

    return response.json(user);
  }
}