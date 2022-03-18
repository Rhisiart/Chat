import { Groups, User } from ".prisma/client";

class Room
{
    private group : Groups;
    private users : User[] = [];
    
    constructor(group : Groups, user? : User)
    {
        this.group = group;
        if(user) this.users.push(user);
    }

    addUser(user : User)
    {
        const isUserInRoom = this.users.some(u => u.id === user.id);

        if(isUserInRoom) return;

        this.users.push(user);
    }

    getUsers(user : User)
    {
        return this.users.filter(u => u.id !== user.id);
    }

    removeUser(user : User)
    {
        this.users = this.users.filter(u => u.id !== user.id);
    }

    getGroup()
    {
        return this.group;
    }
}

export default Room