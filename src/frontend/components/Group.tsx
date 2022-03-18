import { useGroupContext } from "frontend/context/GroupContext";
import * as React from "react";
import { Groups } from ".prisma/client";


interface IProps {
    group : Groups,
}

const Group : React.FC<IProps> = ({group}) => {
    const { setGroup } = useGroupContext();

    const handleOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setGroup(group);
    }

    return (
        <div className="text-black" onClick={handleOnClick}>
            {group.name}
        </div>
    )
}

export default React.memo(Group);