import React from 'react';
import {useNavigate} from "react-router-dom";

const UserDetailsContainer = ({user}) => {
    let {id, name, username, email, phone, website }= user;
    let navigate = useNavigate();
    return (
        <div>
            <div>id : {id}</div>
            <div>name : {name}</div>
            <div>username : {username}</div>
            <div>email : {email}</div>
            <div>phone : {phone}</div>
            <div>website : {website}</div>
            <button onClick={()=> navigate(`posts`)}>post of current user</button>
        </div>
    );
};

export {UserDetailsContainer};