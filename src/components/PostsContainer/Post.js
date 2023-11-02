import React from 'react';
import {useNavigate} from "react-router-dom";

const Post = ({iter}) => {
    let {title, id} = iter;
    let navigate = useNavigate();
    return (
        <div>
            <div>{title}</div>
            <button onClick={()=> navigate(`/posts-details/${id}`)}>details about post</button>
        </div>
    );
};

export {Post};