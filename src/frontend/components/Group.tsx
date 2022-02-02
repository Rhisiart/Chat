import { useGroupContext } from "frontend/context/GroupContext";
import { IGroup } from "frontend/models/group";
import { io } from "socket.io-client";
import * as React from "react";


interface IProps {
    group : IGroup,
}

const Group : React.FC<IProps> = ({group}) => {
    const { setGroupSelected } = useGroupContext();

    const handleOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setGroupSelected(group);
    }

    return (
        <div className="text-black" onClick={handleOnClick}>
            {group.name}
        </div>
    )
}

export default React.memo(Group);