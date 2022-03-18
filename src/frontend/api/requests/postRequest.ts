import axios from "../axios/axios"

const postRequest = async <T, Y>(url : string, body : Y) : Promise<T | undefined>  => {
    try {
        return await (await axios.post(url, body)).data;
    } catch (error) {
        console.log(error);
    }
}

export default postRequest