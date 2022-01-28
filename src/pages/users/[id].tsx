import getGroupsByuser from "frontend/api/requests/getGroupsByUser";
import Chat from "frontend/components/Chat";
import Groups from "frontend/components/Groups";
import { GroupContextProvider, useGlobalContext } from "frontend/context/GroupContext";
import { IMessage } from "frontend/models/Message";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import * as React from "react"

export const getServerSideProps : GetServerSideProps = async (context) => {
    if(!context.params) return { props : { error : undefined }};

    const { id } = context.params;

    const num = Number(id);

    if(isNaN(num)) return { props : { error : undefined }};

    const groups = await getGroupsByuser(num);

    return {
        props : { groups }
    }
}

export default function User({groups} : InferGetServerSidePropsType<typeof getServerSideProps>) {
    const { groupSelected } = useGlobalContext();

    const [messages, setMessages] = React.useState<IMessage[]>();

    const getMessagesPerGroup = React.useCallback(async () => {
        try {
            
        } catch (error) {
            console.log(error);
        }
    }, []);
    
    React.useEffect(() => {
        if(!groupSelected) return;

        getMessagesPerGroup()
    }, [getMessagesPerGroup, groupSelected])

    return (
        <GroupContextProvider>
            <div>
                <div>
                    <Groups groups={groups}/>
                </div>
                {
                    messages ? 
                        <div>
                            <Chat messages={messages}/>
                        </div> 
                    :
                        null
                }
            </div>
        </GroupContextProvider>
    )
}