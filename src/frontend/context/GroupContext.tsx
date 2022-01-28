import { IGroup } from "frontend/models/group";
import React from "react";

export interface IGroupContext {
    setGroupSelected: React.Dispatch<React.SetStateAction<IGroup | undefined>>,
    groupSelected: IGroup | undefined
}

const GroupContext = React.createContext({} as IGroupContext);

export const GroupContextProvider : React.FC = ({children}) => {
    const [groupSelected, setGroupSelected] = React.useState<IGroup>();

    

    return(
        <GroupContext.Provider value={{groupSelected : groupSelected, setGroupSelected : setGroupSelected}}>
            {children}
        </GroupContext.Provider>
    )
}

export const useGlobalContext = () : IGroupContext => {
    return React.useContext(GroupContext);
}