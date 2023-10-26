import React from 'react';

import css from "./Post.module.css"

const PostComponent = ({item, setPosts}) => {
    let {userId, id, title, body} = item;
    return (
        <div className={css.Post}>
            <h2>all about post</h2>
            <div>userId : {userId}</div>
            <div>id : {id}</div>
            <div>title : {title}</div>
            <div>body : {body}</div>
            <hr/>
            <hr/>
            <hr/>
        </div>
    );
};

export {PostComponent};