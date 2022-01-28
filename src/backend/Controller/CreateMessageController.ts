import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateMessagePerGroupController {
  async handle(request: Request, response: Response) {
    const { text, groupId } = request.body;

    const user = await prismaClient.message.create({
      data : {
        text : text,
        chat : {
          create : {
              group : {
                connect : {
                  id : groupId
                }
              }
          }
        }
      }
    });

    return response.json(user);
  }
}