import axios from "../axios/axios"

const postRequest = async <T>(url : string, body : T)  => {
    try {
        return await axios.post(url, body);
    } catch (error) {
        console.log(error);
    }
}

export default postRequest