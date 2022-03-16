import { Group, User } from "@prisma/client"

export interface IData
{
    group: Group,
    user: User
}

export interface ServerToClientEvents {
    
}
  
export interface ClientToServerEvents {
    join: (data : IData) => void
}
  
export interface InterServerEvents {
}