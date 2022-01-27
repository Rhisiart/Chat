import { IUser } from "frontend/models/User";
import axios from "../axios/axios"

const getUsers = async () : Promise<IUser[] | undefined> => {
    try {
        return await (await axios.get<IUser[]>(`/users`)).data;
    } catch (error) {
        console.log(error);
    }
}

export default getUsers