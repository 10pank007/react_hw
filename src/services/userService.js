import {axiosUsersService} from "./axios.users.service";
import {urls} from "../contstants/urls";

const userService = {
    getAll: ()=> axiosUsersService.get(urls.users.base),
    create: (user) => axiosUsersService.post(urls.users.base, user)
}

export {userService};