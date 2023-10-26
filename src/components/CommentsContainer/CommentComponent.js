import React from 'react';
import {Link} from "react-router-dom";

const CommentComponent = ({item}) => {
    let {postId, id, name, email, body} = item;
    return (
        <div>
            <div>postId : {postId}</div>
            <div>id : {id}</div>
            <div>name : {name}</div>
            <div>email : {email}</div>
            <Link to={'post'} state={postId}>body : {body}</Link>
            <hr/>
        </div>
    );
};

export {CommentComponent};