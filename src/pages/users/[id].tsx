import getGroupsByuser from "frontend/api/requests/getGroupsByUser";
import Groups from "frontend/components/Groups";
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
    return (
        <>
            <Groups groups={groups}/>
        </>
    )
}