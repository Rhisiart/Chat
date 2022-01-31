import getRequest from "frontend/api/requests/getRequest";
import postRequest from "frontend/api/requests/postRequest";
import { useGlobalContext } from "frontend/context/GroupContext";
import { IGroup } from "frontend/models/group";
import { IMessage, IMessageGroup } from "frontend/models/message";
import * as React from "react"
import { FaLocationArrow } from "react-icons/fa";
import useSWR from "swr";


interface IProps {
    group : IGroup,
    messages : IMessage[]
}

const Chat : React.FC<IProps> = ({group, messages}) => {
    const [message, setMessage] = React.useState<string>();

    const handleOnClickSend = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        try {
            if(!message) return;

            const response = await postRequest<IMessageGroup>("/messages", {text : message, groupId : group.id});
        } catch (error) {
            console.log(error);
        }
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value);
    }

    return (
        <div>
            {
                messages ?
                    messages.map(message => {
                        return <div key={message.id}>{message.text}</div>
                    })
                    :
                    null
            }
            <div>
                <textarea spellCheck autoComplete="on" value={message} onChange={handleOnChange}/>
            </div>
            <div onClick={handleOnClickSend}>
                <FaLocationArrow/>
            </div>
        </div>
    )
}

export default React.memo(Chat);