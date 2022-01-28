import { IMessage } from "frontend/models/message";
import axios from "../axios/axios"

const getMessagePerGroup = async (groupId : number) : Promise<IMessage[] | undefined> => {
    try {
        return await (await axios.get<IMessage[]>(`/messages/${groupId}`)).data;
    } catch (error) {
        console.log(error);
    }
}

export default getMessagePerGroup