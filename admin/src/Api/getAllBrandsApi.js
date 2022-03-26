import axios from "axios"
import config from "../config.json"

export default async function getAllBrandApi() {

    let result = await axios.get(`${config.ApiUrl}/getBrands`)
    console.log("result api", result);
    if (result.status == 200 && result.data) {
        return result.data
    } else {
        return {status:false, message: "Oop's Something Went Wrong" }
    }

}