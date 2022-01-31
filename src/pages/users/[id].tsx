import getRequest from "frontend/api/requests/getRequest";
import Chat from "frontend/components/Chat";
import Groups from "frontend/components/Groups";
import MainChat from "frontend/components/MainChat";
import { GroupContextProvider } from "frontend/context/GroupContext";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import * as React from "react"
import { SWRConfig } from "swr";

export const getServerSideProps : GetServerSideProps = async (context) => {
    if(!context.params) return { props : { error : undefined }};

    const { id } = context.params;

    const num = Number(id);

    if(isNaN(num)) return { props : { error : undefined }};

    const groups = await getRequest("/groups/users/", num);

    return {
        props : { groups }
    }
}

export default function User({groups} : InferGetServerSidePropsType<typeof getServerSideProps>) {

    return (
        <SWRConfig>
            <GroupContextProvider>
                <div>
                    <div>
                        <Groups groups={groups}/>
                    </div>
                    <div>
                        <MainChat />
                    </div>
                </div>
            </GroupContextProvider>
        </SWRConfig>
    )
}