import postRequest from "frontend/api/requests/postRequest";
import { useSocketContext } from "frontend/context/SocketContext";
import { IGroup } from "frontend/models/group";
import { IMessage, IMessageGroup } from "frontend/models/message";
import * as React from "react"
import { FaLocationArrow } from "react-icons/fa";

interface IProps {
    group : IGroup,
    messages : IMessage[],
    userId : number
}

const Chat : React.FC<IProps> = ({group, messages, userId}) => {
    const { socket } = useSocketContext();

    const [message, setMessage] = React.useState<string>();

    React.useEffect(() => {
        socket.emit("join", {groupId : group.id, userId :  userId});
    }, [group, userId, socket])

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