import {Component} from "react";
import {apiService} from "./apiService";

class CommentsService extends Component {
    getAllComments() {
        return apiService.get("/comments");
    }
}

export const commentsService = new CommentsService();