import { IGroups } from "frontend/models/groups";
import axios from "../axios/axios"

const getGroupsByuser = async (userId : number) : Promise<IGroups[] | undefined> => {
    try {
        return await (await axios.get<IGroups[]>(`/groups/users/${userId}`)).data;
    } catch (error) {
        console.log(error);
    }
}

export default getGroupsByuser