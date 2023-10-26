import React, {useEffect, useState} from 'react';

import {commentService} from "../../services/commentService";
import {CommentComponent} from "./CommentComponent";
import css from "./Comments.module.css"

const CommentsComponent = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        commentService.getAllComments().then(value => setComments(value.data));
    }, []);
    return (
        <div className={css.Comments}>
            {comments.map(value => <CommentComponent key={value.id} item={value}/>)}
        </div>
    );
};

export {CommentsComponent};