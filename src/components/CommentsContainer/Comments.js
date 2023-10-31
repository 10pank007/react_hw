import React, {useEffect, useState} from 'react';
import {commentService} from "../../services/commentService";
import {CommentComponent} from "./CommentComponent";

const Comments = ({postId}) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        commentService.getCommentsByPostId(postId).then(value => setComments(value.data));
    }, [postId]);
    comments && console.log(comments);
    return (
        <div>
            {comments.map((value, index) => <CommentComponent  key={index} iter={value}/>)}
        </div>
    );
};

export {Comments};