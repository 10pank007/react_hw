import React from 'react';

const Coment = ({comment}) => {
    let {id, postId, name, email, body} = comment
    return (
        <div>
            <div>id : {id}</div>
            <div>postId : {postId}</div>
            <div>name : {name}</div>
            <div>email : {email}</div>
            <div>body : {body}</div>
        </div>
    );
};

export {Coment};