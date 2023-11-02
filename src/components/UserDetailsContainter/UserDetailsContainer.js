import React from 'react';

import {PostsPage} from "../../pages/PostsPage";

const UserDetailsContainer = ({user}) => {
    let {id, name, username, email, phone, website }= user;

    return (
        <div>
            <div>id : {id}</div>
            <div>name : {name}</div>
            <div>username : {username}</div>
            <div>email : {email}</div>
            <div>phone : {phone}</div>
            <div>website : {website}</div>
            <hr/>
            <PostsPage/>
        </div>
    );
};

export {UserDetailsContainer};