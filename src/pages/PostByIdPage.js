import React from 'react';
import {useLocation} from "react-router-dom";

import {PostsComponent} from "../components/PostsContainer/PostsComponent";

const PostByIdPage = () => {
    let {state} = useLocation();
    return (
        <div>
            <PostsComponent state={state}/>
        </div>
    );
};

export {PostByIdPage};