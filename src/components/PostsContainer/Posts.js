import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../../services/postService";
import {urls} from "../../constants/urls";
import {Post} from "./Post";

const Posts = () => {
    let {id} = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getByUserId(id).then(value => setPosts(value.data))
    }, [id]);

    return (
        <div>
            {posts.map(value => <Post key={value.id} iter={value}/>)}
        </div>
    );
};

export {Posts};