import { Message } from ".prisma/client";
import postRequest from "frontend/api/requests/postRequest";
import { useGroupContext } from "frontend/context/GroupContext";
import { useSocketContext } from "frontend/context/SocketContext";
import { useUserContext } from "frontend/context/UserContext";
import { IMessage } from "frontend/Model/Request";
import * as React from "react"
import { FaLocationArrow } from "react-icons/fa";

interface IProps {
    messages : Message[]
}

const Chat : React.FC<IProps> = ({messages}) => {
    const { socket }    =  useSocketContext();
    const { user }      =  useUserContext();
    const { group }     =  useGroupContext();

    const [message, setMessage] = React.useState<string>();
    const [messageList, setMessageList] = React.useState<Message[]>(messages);

    React.useEffect(() => {
        if(!group || !user) return;

        socket.emit("join", group, user);
    }, [group, socket, user])

    React.useEffect(() => {
        socket.on("message", message => {
            setMessageList(msg => [...msg, message.message]);
        });
    }, [socket])

    const handleOnClickSend = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        try {
            if(!message || !group || !user) return;

            const response = await postRequest<Message,IMessage>("/messages", {text : message, groupId : group.id});
            
            if(!response) return;

            socket.emit("sendMessage", response, group, user);
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
                messageList ?
                    messageList.map(message => {
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