import { ClientToServerEvents, ServerToClientEvents } from "backend/model/Socket";
import React from "react";
import { io, Socket } from "socket.io-client";

export interface ISocketContext {
    socket: Socket<ServerToClientEvents, ClientToServerEvents>
}

const SocketContext = React.createContext({} as ISocketContext);


export const SocketContextProvider : React.FC = ({children}) => {
    const socket : Socket<ServerToClientEvents, ClientToServerEvents> = io("http://localhost:4000", {transports : ["websocket", "polling"]});

    return(
        <SocketContext.Provider value={{socket : socket}}>
            {children}
        </SocketContext.Provider>
    )
}

export const useSocketContext = () : ISocketContext => {
    return React.useContext(SocketContext);
}