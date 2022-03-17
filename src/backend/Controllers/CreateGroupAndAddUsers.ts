import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";
import { PrismaQuery } from "../helper/prismaQuey";
import { isArrayOfNumberAndHaveElemets } from "../helper/Validation";

export class CreateGroupAndAddUsersController {
    async handle(request: Request, response: Response) {
        try {
            const { groupName, users } = request.body;

            if(!(isArrayOfNumberAndHaveElemets(users))) return response.status(404).json({error : "validation"});;

            const prismaUser = PrismaQuery.getConnectElements(users);

            const group = await prismaClient.groups.create({
                data: {
                name : groupName,
                users : {
                    create : prismaUser
                }
                },
            });

            return response.status(200).json(group);
        } catch (error) {
            return response.status(404).json(error);
        }
    }
}