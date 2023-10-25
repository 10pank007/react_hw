import axios from "axios";
import {baseURL} from "../constance/urls";

const axiosCar = axios.create({
    baseURL
});

export {axiosCar}