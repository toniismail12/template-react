import axios from "axios";
import { GetCookies } from "@services"

const api_dev = process.env.REACT_APP_API_DEV
const api_prod = process.env.REACT_APP_API_PROD

export default axios.create({

    baseURL: process.env.REACT_APP_MODE === 'development' ? api_dev : api_prod,
    headers: {
        'Authorization': GetCookies("token"),
    },

});
