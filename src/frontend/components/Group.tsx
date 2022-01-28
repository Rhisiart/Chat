import { useGlobalContext } from "frontend/context/GroupContext";
import { IGroup } from "frontend/models/group";
import * as React from "react"


interface IProps {
    group : IGroup,
}

const Group : React.FC<IProps> = ({group}) => {
    const { setGroupSelected } = useGlobalContext();

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