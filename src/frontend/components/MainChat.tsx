import getRequest from "frontend/api/requests/getRequest";
import { useGroupContext } from "frontend/context/GroupContext";
import { IMessage } from "frontend/models/message";
import * as React from "react"
import useSWR from "swr";
import Chat from "./Chat";


interface IProps {
    userId : number
}

const MainChat : React.FC<IProps> = ({userId}) => {
    const { groupSelected } = useGroupContext();

    const { data, error } = useSWR<IMessage[]>(groupSelected ? ["/messages/", groupSelected.id] : null, getRequest);

    return (
       <div>
           {
               data && groupSelected ?
                    <Chat group={groupSelected} messages={data} userId={userId}/>
                    :
                    null
           }
       </div>
    )
}

export default React.memo(MainChat);