import {apiService} from "./apiService";

class PostService {
    getAll() {
        return apiService.get("/posts")
    }
}

export const userService = new PostService();