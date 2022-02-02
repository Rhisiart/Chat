import { IUser } from "frontend/models/user";
import React from "react";

export interface IUserContext {
    user: IUser | undefined,
    setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>
}

const UserContext = React.createContext({} as IUserContext);

export const UserContextProvider : React.FC = ({children}) => {
    const [user, setUser] = React.useState<IUser>()

    return(
        <UserContext.Provider value={{user : user, setUser : setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () : IUserContext => {
    return React.useContext(UserContext);
}