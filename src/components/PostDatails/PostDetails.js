import React from 'react';

import css from "./PostDatails.module.css"

const PostDetails = ({postDetails}) => {
    let {userId, id, title, body} = postDetails;
    return (
        <div className={css.Main}>
            <h3>userId: {userId}</h3>
            <h3>id: {id}</h3>
            <h3>title: {title}</h3>
            <h3>body: {body}</h3>
        </div>
    );
};

export {PostDetails};