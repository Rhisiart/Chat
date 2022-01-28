import { IMessage } from "frontend/models/message";
import * as React from "react"


interface IProps {
    messages : IMessage[]
}

const Chat : React.FC<IProps> = ({messages}) => {
    return (
        <div >
            {
                messages.map((message, index) => {
                    return <div key={index}>{message}</div>
                })
            }
        </div>
    )
}

export default React.memo(Chat);