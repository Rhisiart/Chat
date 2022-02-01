import { Groups, User } from ".prisma/client";
import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export class Room
{
    io : Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>;
    group : Groups;
    users : User[] = [];
    
    constructor(io : Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>, group : Groups)
    {
        this.io = io;
        this.group = group;
    }

    addUser(user : User)
    {
        this.users.push(user);
    }

    getUsers()
    {
        return this.users;
    }

    deleteUser(user : User)
    {
        this.users = this.users.filter(user => user.id !== user.id);
    }

    create()
    {
        
    }
}