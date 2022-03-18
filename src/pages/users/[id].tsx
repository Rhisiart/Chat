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

    const userRequest = getRequest(`users/${num}`);
    const groupsRequest = getRequest(`/groups/users/${num}`);

    const [user, groups] = await Promise.all([userRequest, groupsRequest]);

    return {
        props : { groups : groups, user : user }
    }
}

export default function User({groups, user} : InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <SWRConfig>
            <SocketContextProvider>
                <GroupContextProvider>
                    <UserContextProvider>
                        <MainScreen groups={groups} user={user}/>
                    </UserContextProvider>
                </GroupContextProvider>
            </SocketContextProvider>
        </SWRConfig>
    )
}