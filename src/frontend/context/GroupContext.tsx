import { IGroup } from "frontend/models/group";
import React from "react";

export interface IGroupContext {
    setGroup: React.Dispatch<React.SetStateAction<IGroup | undefined>>
    setGroups: React.Dispatch<React.SetStateAction<IGroup[] | undefined>>,
    groups : IGroup[] | undefined,
    group: IGroup | undefined
}

const GroupContext = React.createContext({} as IGroupContext);

export const GroupContextProvider : React.FC = ({children}) => {
    const [groups, setGroups] = React.useState<IGroup[]>();
    const [group, setGroup] = React.useState<IGroup>();

    return(
        <GroupContext.Provider value={{groups : groups, setGroups : setGroups, group : group, setGroup : setGroup}}>
            {children}
        </GroupContext.Provider>
    )
}

export const useGroupContext = () : IGroupContext => {
    return React.useContext(GroupContext);
}