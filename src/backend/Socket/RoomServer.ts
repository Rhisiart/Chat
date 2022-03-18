import { Groups, Message, User } from "@prisma/client";
import Room from "./Room";
import { Server } from "socket.io";
import { ClientToServerEvents, IData, InterServerEvents, ServerToClientEvents } from "../model/Socket";

class RoomServer
{
    private static instance : RoomServer;
    private rooms : Room[] = [];

    constructor() {}

    static getInstance() : RoomServer {

        if(!this.instance)
            this.instance = new RoomServer();

        return this.instance;
    }

    getRoom(group : Groups)
    {
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

    sendMessage(io: Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, IData>, message : Message, group : Groups, user : User)
    {
        io.to(group.id.toString()).emit("message", {user : user, message : message});
    }
}


export default RoomServer