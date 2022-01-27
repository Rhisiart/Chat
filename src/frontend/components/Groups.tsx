import getGroupsByuser from "frontend/api/requests/getGroupsByUser";
import { IGroups } from "frontend/models/groups";
import * as React from "react"
import { useQuery } from "react-query";
import GroupList, { IGroupList } from "./GroupList";
import SearchBar from "./SearchBar";


interface IProps {

}

const Groups : React.FC<IProps> = () => {
    const groups = useQuery<IGroups[] | undefined, Error>("userGroups", () => getGroupsByuser(1), {});

    const groupListRef = React.useRef<IGroupList>(null);

    return (
        <div>
            <div>
                <SearchBar groupListRef={groupListRef} />
            </div>
            <div>
                {
                    groups.data ? 
                       <GroupList ref={groupListRef} groups={ groups.data} />
                        :
                    <div>
                        0 Groups
                    </div>
                }
            </div>
        </div>
    )
}

export default React.memo(Groups);