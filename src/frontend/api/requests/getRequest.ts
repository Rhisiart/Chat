import axios from "../axios/axios"

const getRequest = async <T>(url : string) : Promise<T | undefined> => {
    try {
        return await (await axios.get(url)).data;
    } catch (error) {
        console.log(error);
    }
}

export default getRequest