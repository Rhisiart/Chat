import { Groups, Message, User } from "@prisma/client"

export interface IData
{
    group: Groups,
    user: User
}

export interface IMessage
{
    user : User,
    text : string
}

export interface ServerToClientEvents {
    message : (message : IMessage) => void
}
  
export interface ClientToServerEvents {
    join: (data : IData) => void,
    sendMessage : (message : Message, group : Groups, user : User) => void,
}
  
export interface InterServerEvents {
}