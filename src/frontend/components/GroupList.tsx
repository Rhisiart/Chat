import { IGroup } from "frontend/models/group";
import * as React from "react"
import Group from "./Group";

interface IProps {
    groups : IGroup[]
}

export interface IGroupList {
    filterGroupList: (text: string | undefined) => void
} 

const GroupList = React.forwardRef<IGroupList, IProps>(({groups}, ref) => {
    const [groupsList, setGroupsList] = React.useState<IGroup[]>(groups);

    const filterGroupList = React.useCallback((text : string | undefined) => {
        setGroupsList(text ? groups.filter(group => group.name.toLocaleLowerCase().indexOf(text) > -1 || group.name.indexOf(text) > -1 || group.name.toLocaleUpperCase().indexOf(text) > -1) : groups);
    }, [groups])

    React.useImperativeHandle(ref, () => ({
        filterGroupList
    }), [filterGroupList])

    return (
        <div>
           {
               groupsList.map(group => {
                   return <Group key={group.id} group={group} />
               })
           }
        </div>
    )
})

GroupList.displayName = "GroupList"

export default React.memo(GroupList);