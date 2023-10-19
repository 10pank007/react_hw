import React from 'react';

import css from "./Post.module.css"

const Post = ({post, click}) => {
    let {id, title, body}  = post;


    return (
            <div className={css.Post}>
                {id} {title}
                <button onClick={()=> click(id)}>Info</button>
            </div>
            );
};

export {Post};