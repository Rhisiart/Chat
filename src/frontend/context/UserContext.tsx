import { User } from ".prisma/client";
import React from "react";

export interface IUserContext {
    user: User | undefined,
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>
}

const UserContext = React.createContext({} as IUserContext);

export const UserContextProvider : React.FC = ({children}) => {
    const [user, setUser] = React.useState<User>();

    return(
        <UserContext.Provider value={{user : user, setUser : setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () : IUserContext => {
    return React.useContext(UserContext);
}