import getMessagePerGroup from "frontend/api/requests/getGroupMessages";
import getGroupsByuser from "frontend/api/requests/getGroupsByUser";
import Chat from "frontend/components/Chat";
import Groups from "frontend/components/Groups";
import { GroupContextProvider, useGlobalContext } from "frontend/context/GroupContext";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import * as React from "react"
import useSWR from "swr";

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

    const { data, error } = useSWR(groupSelected ? ["/messages", groupSelected.id] : null, getMessagePerGroup);

    return (
        <GroupContextProvider>
            <div>
                <div>
                    <Groups groups={groups}/>
                </div>
                {
                    data ? 
                        <div>
                            <Chat messages={data} />
                        </div> 
                    :
                        null
                }
            </div>
        </GroupContextProvider>
    )
}