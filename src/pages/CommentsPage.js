import React from 'react';
import {Outlet} from "react-router-dom";


import {CommentsComponent} from "../components/CommentsContainer/CommentsComponent";
import css from './Comments.module.css'

const CommentsPage = () => {
    return (
        <div className={css.Comments}>
            <Outlet/>
            <h2>all comments</h2>
            <CommentsComponent/>
        </div>
    );
};

export {CommentsPage};