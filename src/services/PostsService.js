import {axiosService} from "./AxiosService";
import {baseURL, posts, urls} from "../constants/url";

const postsService = {
    getAllPosts: () => axiosService.get(urls.post.base)
    ,
    getById: (id) => axiosService.get(urls.post.byId(id))
}

export {postsService}