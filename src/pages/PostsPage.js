import React from 'react';

import {Posts} from "../components/PostsContainer/Posts";
import {Outlet, useParams} from "react-router-dom";

const PostsPage = () => {
    return (
        <div>
            <Posts/>
            <hr/>

        </div>
    );
};

export {PostsPage};