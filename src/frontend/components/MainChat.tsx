import { Message } from ".prisma/client";
import getRequest from "frontend/api/requests/getRequest";
import { useGroupContext } from "frontend/context/GroupContext";
import * as React from "react"
import useSWR from "swr";
import Chat from "./Chat";


interface IProps {

}

const MainChat : React.FC<IProps> = () => {
    const { group } = useGroupContext();

    const { data, error } = useSWR<Message[]>(group ? [`/messages/${group.id}`] : null, getRequest);

    return (
       <div>
           {
               data && group ?
                    <Chat messages={data} />
                    :
                    null
           }
       </div>
    )
}

export default React.memo(MainChat);