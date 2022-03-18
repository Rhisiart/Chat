import { Message } from ".prisma/client";
import getRequest from "frontend/api/requests/getRequest";
import { useGroupContext } from "frontend/context/GroupContext";
import * as React from "react"
import useSWR from "swr";
import Chat from "./Chat";


interface IProps {}

const MainChat : React.FC<IProps> = () => {
    const { group } = useGroupContext();

    const [data, setData] = React.useState<Message[]>();

    const getMessages = React.useCallback(async (grp) => {
        try {
            const messages = await getRequest<Message[]>(`/messages/${grp.id}`);

            if(messages) messages.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));

            setData(messages);
        } catch (error) {
            console.log(error);
        }
    }, [])

    React.useEffect(() => {
        if(!group) return;

        getMessages(group);
    }, [group])

    //const { data, error } = useSWR<Message[]>(group ? [`/messages/${group.id}`] : null, getRequest);

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