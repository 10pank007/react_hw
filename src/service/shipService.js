
import {baseURL, launches} from "../const/const";

import axios from "axios";


const axiosApi = axios.create({
    baseURL
})
const shipService = {
    getAllFlights: () => axiosApi.get(launches)
}

export {shipService}