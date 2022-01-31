import getRequest from "frontend/api/requests/getRequest";
import { useGlobalContext } from "frontend/context/GroupContext";
import { IMessage } from "frontend/models/message";
import * as React from "react"
import useSWR from "swr";
import Chat from "./Chat";


interface IProps {
    
}

const MainChat : React.FC<IProps> = () => {
    const { groupSelected } = useGlobalContext();

    const { data, error } = useSWR<IMessage[]>(groupSelected ? ["/messages/", groupSelected.id] : null, getRequest);

    return (
       <div>
           {
               data && groupSelected ?
                    <Chat group={groupSelected} messages={data}/>
                    :
                    null
           }
       </div>
    )
}

export default React.memo(MainChat);