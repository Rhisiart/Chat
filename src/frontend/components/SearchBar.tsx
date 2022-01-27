import * as React from "react"
import { FaSearch } from "react-icons/fa"
import { IGroupList } from "./GroupList";


interface IProps {
    groupListRef: React.RefObject<IGroupList>
}


const SearchBar : React.FC<IProps> = ({groupListRef})=> {
    const [text, setText] = React.useState<string>();

    const handleOnchange = (e :  React.ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value);
    }

    React.useEffect(() => {
        if(!groupListRef.current) return;

        groupListRef.current.filterGroupList(text);
    }, [groupListRef, text])

    return (
        <div>
           <FaSearch />
           <input placeholder="Search" type="text" value={text} onChange={handleOnchange}/>
        </div>
    )
}

export default React.memo(SearchBar);