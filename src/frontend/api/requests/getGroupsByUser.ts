
import { IGroup } from "frontend/models/group";
import axios from "../axios/axios"

const getGroupsByuser = async (userId : number) : Promise<IGroup[] | undefined> => {
    try {
        return await (await axios.get<IGroup[]>(`/groups/users/${userId}`)).data;
    } catch (error) {
        console.log(error);
    }
}

export default getGroupsByuser