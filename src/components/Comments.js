import React from 'react';
import {Coment} from "./Coment";

const Comments = ({comments}) => {
    return (
        <div>
            {comments.map(comment => <Coment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};