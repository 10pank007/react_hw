import React from 'react';
import {useNavigate} from "react-router-dom";

const PostDetailsContainer = ({iter}) => {
    let{userId, id, title , body} = iter;
    let navigate = useNavigate();
    return (
        <div>
            <div>userId : {userId}</div>
            <div>id : {id}</div>
            <div>title : {title}</div>
            <div>body : {body}</div>
            <button onClick={()=> {navigate(`comments-post-details`)}}>comments</button>
        </div>
    );
};

export {PostDetailsContainer};