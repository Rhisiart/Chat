import { IAddUsersToGroup } from "../model/Prisma";

export class PrismaQuery {
    static getConnectElements(ids : number[]) {
        const groups : IAddUsersToGroup[] = [];

        ids.map(id => {
            groups.push({user : { connect : {id : id}}})
        });

        return groups;
    }

}