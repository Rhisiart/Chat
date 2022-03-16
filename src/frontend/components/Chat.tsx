import postRequest from "frontend/api/requests/postRequest";
import { useGroupContext } from "frontend/context/GroupContext";
import { useSocketContext } from "frontend/context/SocketContext";
import { useUserContext } from "frontend/context/UserContext";
import { IMessage, IMessageGroup } from "frontend/models/message";
import * as React from "react"
import { FaLocationArrow } from "react-icons/fa";

interface IProps {
    messages : IMessage[]
}

const Chat : React.FC<IProps> = ({messages}) => {
    const { socket }    =  useSocketContext();
    const { user }      =  useUserContext();
    const { group }     =  useGroupContext();

    const [message, setMessage] = React.useState<string>();

    React.useEffect(() => {
        if(!group || !user) return;

        socket.emit("join", {group : group, user :  user});
    }, [group, socket, user])

    const handleOnClickSend = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        try {
            if(!message || ! group) return;

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