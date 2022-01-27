import * as React from "react"


interface IProps {
    name : string
}

const Group : React.FC<IProps> = ({name}) => {

    return (
        <div className="text-black">
            {name}
        </div>
    )
}

export default React.memo(Group);