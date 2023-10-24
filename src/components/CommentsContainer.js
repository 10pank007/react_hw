import React, {useEffect, useState} from 'react';
import {Comments} from "./Comments";
import {ComentForm} from "./ComentForm";
import {axiosComments} from "../services/axios.comments";
import {commentsService} from "../services/commentsService";

const CommentsContainer = () => {
    let [comments, setComments] = useState([]);
    useEffect(()=> {
        commentsService.getAll().then(value => setComments(value.data));
    }, [])
    return (
        <div>
            <ComentForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentsContainer};