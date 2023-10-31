import {axiosService} from "./axiosService";

import {urls} from "../constants/urls";

const userService = {
    getAllUsers: () => axiosService.get(urls.users.base),
    getUserById: (id) => axiosService.get(urls.users.byId(id))
}

export {userService}