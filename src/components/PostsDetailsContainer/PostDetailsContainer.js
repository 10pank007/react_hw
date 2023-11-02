import React from 'react';

import {CommentsPage} from "../../pages/CommentsPage";

const PostDetailsContainer = ({iter}) => {
    let{userId, id, title , body} = iter;

    return (
        <div>
            <div>userId : {userId}</div>
            <div>id : {id}</div>
            <div>title : {title}</div>
            <div>body : {body}</div>
            <hr/>
            <CommentsPage/>
        </div>
    );
};

export {PostDetailsContainer};