import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class ReadGroupsController {
  async handle(request: Request, response: Response) {
      
    const user = await prismaClient.groups.findMany({
        take : 100
    });

    return response.json(user);
  }
}