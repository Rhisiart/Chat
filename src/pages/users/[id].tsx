import getRequest from "frontend/api/requests/getRequest";
import Groups from "frontend/components/Groups";
import MainChat from "frontend/components/MainChat";
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

    const groups = await getRequest("/groups/users/", num);

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
                        <div>
                            <div>
                                <Groups groups={groups}/>
                            </div>
                            <div>
                                <MainChat userId={userId}/>
                            </div>
                        </div>
                    </UserContextProvider>
                </GroupContextProvider>
            </SocketContextProvider>
        </SWRConfig>
    )
}