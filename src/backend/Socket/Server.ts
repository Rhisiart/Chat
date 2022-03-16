import { Groups, Message, User } from "@prisma/client";
import Room from "./Room"

class RoomServer
{
    private rooms : Room[] = [];

    constructor()
    {

    }

    getRoom(group : Groups)
    {
        if(this.rooms.length === 0) return undefined;

        return this.rooms.find(room => room.getGroup().id === group.id);
    }

    join(group : Groups, user : User)
    {
        const room = this.getRoom(group);

        !room ? this.rooms.push(new Room(group, user)) : room.addUser(user); 
    }

    disconnect(group : Groups, user : User) 
    {
        const room = this.getRoom(group);

        if(!room) return;

        room.removeUser(user);
    }

    sendMessage(message : Message, Group : Groups)
    {
        
    }
}


export default RoomServer