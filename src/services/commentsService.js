import {axiosComments} from "./axios.comments";
import {urls} from "../constants/urls";

const commentsService = {
    getAll: () => axiosComments.get(urls.comments.base),
    creat: (comment) => axiosComments.post(urls.comments.base, comment)
}

export {commentsService}