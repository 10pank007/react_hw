import React, {useEffect, useState} from 'react';
import {axiosService} from "../../services/axiosService";
import {postService} from "../../services/postService";
import {PostDetailsContainer} from "./PostDetailsContainer";

const PostsDetailsContainer = ({id}) => {
    const [post, setPost] = useState(null);
    useEffect(() => {
        postService.getById(id).then(value => setPost(value.data));
    }, [id]);
    return (
        <div>
            {post && <PostDetailsContainer iter={post}/>}
        </div>
    );
};

export {PostsDetailsContainer};