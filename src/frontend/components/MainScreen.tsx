import { Groups, User } from ".prisma/client";
import { useGroupContext } from "frontend/context/GroupContext";
import { useUserContext } from "frontend/context/UserContext";
import * as React from "react"
import Rooms from "./Rooms";
import MainChat from "./MainChat";

interface IProps {
    groups : Groups[],
    user : User
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
                <Rooms />
            </div>
            <div>
                <MainChat />
            </div>
        </div>
    )
}

export default React.memo(MainScreen);