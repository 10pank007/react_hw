import React, {useEffect, useState} from 'react';

import {postService} from "../../services/postService";
import {PostComponent} from "./PostComponent";

const PostsComponent = ({state}) => {
    console.log(state)
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        postService.getPostById(state).then(value => setPosts(value.data));
    }, [state]);

    return (
        <div>
            {posts && <PostComponent item={posts} setPosts={setPosts}/>}
        </div>
    );
};

export {PostsComponent};