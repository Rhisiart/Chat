import { UserStatus } from ".prisma/client";
import getRequest from "frontend/api/requests/getRequest";
import MainScreen from "frontend/components/MainScreen";
import { GroupContextProvider } from "frontend/context/GroupContext";
import { SocketContextProvider } from "frontend/context/SocketContext";
import { UserContextProvider } from "frontend/context/UserContext";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import * as React from "react"
import { SWRConfig } from "swr";

export const getServerSideProps : GetServerSideProps = async (context) => {
    if(!context.params) return { props : { error : undefined }};

    const { id } = context.params;

    const num = Number(id);

    if(isNaN(num)) return { props : { error : undefined }};

    const groups = await getRequest(`/groups/users/${num}`);

    return {
        props : { groups : groups, userId : num }
    }
}

export default function User({groups, userId} : InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <SWRConfig>
            <SocketContextProvider>
                <GroupContextProvider>
                    <UserContextProvider>
                        <MainScreen groups={groups} user={{name : "for now", email : "for now", id : userId, status : UserStatus.Online}}/>
                    </UserContextProvider>
                </GroupContextProvider>
            </SocketContextProvider>
        </SWRConfig>
    )
}