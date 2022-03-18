import axios from "../axios/axios"

const getRequest = async (url : string)  => {
    try {
        return await (await axios.get(url)).data;
    } catch (error) {
        console.log(error);
    }
}

export default getRequest