import { IGroup } from "frontend/models/group";
import * as React from "react"
import GroupList, { IGroupList } from "./GroupList";
import SearchBar from "./SearchBar";


interface IProps {
    groups : IGroup[]
}

const Groups : React.FC<IProps> = ({groups}) => {
    const groupListRef = React.useRef<IGroupList>(null);

    return (
        <div>
            <div>
                <SearchBar groupListRef={groupListRef} />
            </div>
            <div>
                {
                    groups ? 
                       <GroupList ref={groupListRef} groups={groups} />
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