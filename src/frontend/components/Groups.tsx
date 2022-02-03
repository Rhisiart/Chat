import * as React from "react"
import GroupList, { IGroupList } from "./GroupList";
import SearchBar from "./SearchBar";


interface IProps {
    
}

const Groups : React.FC<IProps> = () => {
    const groupListRef = React.useRef<IGroupList>(null);

    return (
        <div>
            <div>
                <SearchBar groupListRef={groupListRef} />
            </div>
            <div>
                <GroupList ref={groupListRef} />
            </div>
        </div>
    )
}

export default React.memo(Groups);