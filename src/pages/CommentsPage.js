import React from 'react';
import {Comments} from "../components/CommentsContainer/Comments";
import {userService} from "../services/userService";
import {useParams} from "react-router-dom";

const CommentsPage = () => {
    let {postId} = useParams();
    console.log(postId)
    return (
        <div>
            <Comments postId={postId}/>
        </div>
    );
};

export {CommentsPage};