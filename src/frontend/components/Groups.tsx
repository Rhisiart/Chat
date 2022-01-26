import getGroupsByuser from "frontend/api/requests/getGroupsByUser";
import { IGroups } from "frontend/models/groups";
import * as React from "react"
import { useQuery } from "react-query";


interface IProps {

}

const Global : React.FC<IProps> = () => {
    const groups = useQuery<IGroups[] | undefined, Error>("userGroups", () => getGroupsByuser(1), {});

    

    return (
        <div className="text-3xl font-bold underline text-red-600">
            {
                groups.data ? 
                    groups.data.map(group => {
                        <div className="">
                            {group.name}
                        </div>
                    })
                    :
                <div>
                    0 Groups
                </div>
            }
        </div>
    )
}

export default Global;