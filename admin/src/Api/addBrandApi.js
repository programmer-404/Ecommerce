import axios from "axios"
import config from "../config.json"

export default async function addBrandApi(params) {
   
    let result = await axios.post(`${config.ApiUrl}/addBrand`, params)
    console.log("result api", result);
    if (result.status == 200 && result.data) {
        return result.data
    } else {
        return {status:false, message: "Oop's Something Went Wrong" }
    }

}
