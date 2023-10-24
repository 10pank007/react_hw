import axios from "axios";
import {baseURL} from "../contstants/urls";

const axiosUsersService = axios.create({
    baseURL
});

export {axiosUsersService}