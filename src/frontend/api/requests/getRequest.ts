import axios from "../axios/axios"

const getRequest = async (url : string, arg : number | undefined)  => {
    try {
        return await (await axios.get(`${url}${arg}`)).data;
    } catch (error) {
        console.log(error);
    }
}

export default getRequest