import React from "react";
import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export interface ISocketContext {
    socket: Socket<DefaultEventsMap, DefaultEventsMap>
}

const SocketContext = React.createContext({} as ISocketContext);


export const SocketContextProvider : React.FC = ({children}) => {
    const socket = io("http://localhost:4000", {transports : ["websocket", "polling"]});

    return(
        <SocketContext.Provider value={{socket : socket}}>
            {children}
        </SocketContext.Provider>
    )
}

export const useSocketContext = () : ISocketContext => {
    return React.useContext(SocketContext);
}