import { Groups } from ".prisma/client";
import React from "react";

export interface IGroupContext {
    setGroup: React.Dispatch<React.SetStateAction<Groups | undefined>>
    setGroups: React.Dispatch<React.SetStateAction<Groups[] | undefined>>,
    groups : Groups[] | undefined,
    group: Groups | undefined
}

const GroupContext = React.createContext({} as IGroupContext);

export const GroupContextProvider : React.FC = ({children}) => {
    const [groups, setGroups] = React.useState<Groups[]>();
    const [group, setGroup] = React.useState<Groups>();

    return(
        <GroupContext.Provider value={{groups : groups, setGroups : setGroups, group : group, setGroup : setGroup}}>
            {children}
        </GroupContext.Provider>
    )
}

export const useGroupContext = () : IGroupContext => {
    return React.useContext(GroupContext);
}