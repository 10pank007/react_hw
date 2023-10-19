import css from "./Posts.module.css";
import {Post} from "../Post/Post";

import React, {useEffect, useState} from 'react';
import {postsService} from "../../services/PostsService";
import {PostDetails} from "../PostDatails/PostDetails";


const Posts = () => {
    let [posts, setPosts] = useState([]);
    let [postDetails, setPostDetails] = useState(null);
    let bool = true;
    const click = async (id) => {
        const {data} = await postsService.getById(id);
        if (bool) {
            setPostDetails(data);
        } else {
            let main = document.getElementsByClassName(".PostDatails_Main__r90N8")[0];
            main.innerText = "";
        }
        bool = !bool;
    }

    useEffect(() => {
        postsService.getAllPosts().then(({data}) => setPosts(data));
    }, [])

    return (
        <div>
            {postDetails && <PostDetails postDetails={postDetails}/>}
            <div className={css.Posts}>
                {
                    posts.map(value => <Post key={value.id} post={value} click={click}/>)
                }
            </div>

        </div>

    );
};

export {Posts};