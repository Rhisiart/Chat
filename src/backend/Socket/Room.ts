import { Groups, User } from ".prisma/client";

export class Room
{
    private group : Groups;
    private users : User[] = [];
    
    constructor(group : Groups)
    {
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
}