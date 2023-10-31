import React from 'react';

const CommentComponent = ({iter}) => {
    let {postId, id, name, email, body} = iter;
    return (
        <div>
            <div>postId : {postId}</div>
            <div>id : {id}</div>
            <div>name : {name}</div>
            <div>email : {email}</div>
            <div>body : {body}</div>
        </div>
    );
};

export {CommentComponent};