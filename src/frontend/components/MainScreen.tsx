import { useGroupContext } from "frontend/context/GroupContext";
import { useUserContext } from "frontend/context/UserContext";
import { IGroup } from "frontend/models/group";
import { IUser } from "frontend/models/user";
import * as React from "react"
import Groups from "./Groups";
import MainChat from "./MainChat";

interface IProps {
    groups : IGroup[],
    user : IUser
}

const MainScreen : React.FC<IProps> = ({groups, user}) => {
    const { setGroups } = useGroupContext();
    const { setUser }   = useUserContext();

    React.useEffect(() => {
        setGroups(groups);
    }, [groups]);

    React.useEffect(() => {
        setUser(user);
    }, [user])

    return (
        <div>
            <div>
                <Groups />
            </div>
            <div>
                <MainChat />
            </div>
        </div>
    )
}

export default React.memo(MainScreen);