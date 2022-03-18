import { Groups } from ".prisma/client";
import { useGroupContext } from "frontend/context/GroupContext";
import * as React from "react"
import Group from "./Group";

interface IProps {}

export interface IGroupList {
    filterGroupList: (text: string | undefined) => void
} 

const GroupList = React.forwardRef<IGroupList, IProps>(({}, ref) => {
    const { groups } = useGroupContext();
    const [groupsList, setGroupsList] = React.useState<Groups[]>();

    const filterGroupList = React.useCallback((text : string | undefined) => {
        setGroupsList(text && groups ? groups.filter(group => group.name.toLocaleLowerCase().indexOf(text) > -1 || group.name.indexOf(text) > -1 || group.name.toLocaleUpperCase().indexOf(text) > -1) : groups);
    }, [groups])

    React.useImperativeHandle(ref, () => ({
        filterGroupList
    }), [filterGroupList])

    React.useEffect(() => {
        setGroupsList(groups);
    }, [groups]);

    return (
        <div>
           {
               groupsList ? 
                    groupsList.map(group => {
                        return <Group key={group.id} group={group} />
                    })
                    :
                    "0"
           }
        </div>
    )
})

GroupList.displayName = "GroupList"

export default React.memo(GroupList);