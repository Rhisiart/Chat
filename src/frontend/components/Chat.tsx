import { IMessage } from "frontend/models/Message";
import * as React from "react"


interface IProps {
    messages : IMessage[]
}

const Chat : React.FC<IProps> = ({messages}) => {
    



    return (
        <div >
            
        </div>
    )
}

export default React.memo(Chat);