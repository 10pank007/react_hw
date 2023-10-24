import axios from "axios";
import {baseURL} from "../constants/urls";

const axiosComments = axios.create({
    baseURL
})

export {axiosComments}