import {axiosService} from "./axiosService";

import {urls} from "../constants/urls";

const postService = {
    getPostById : (id) => axiosService.get(urls.postById(id))
}

export {postService}