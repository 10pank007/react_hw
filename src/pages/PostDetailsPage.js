import React from 'react';
import {Outlet, useParams} from "react-router-dom";
import {PostsDetailsContainer} from "../components/PostsDetailsContainer/PostsDetailsContainer";

const PostDetailsPage = () => {
    let {postId} = useParams();

    return (
        <div>
            <PostsDetailsContainer id={postId}/>
            <Outlet/>
        </div>
    );
};

export {PostDetailsPage};