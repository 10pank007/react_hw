import React from 'react';
import {Outlet, useParams} from "react-router-dom";
import {UsersDetailsContainer} from "../components/UserDetailsContainter/UsersDetailsContainer";

const UserDetailsPage = () => {
    let {id} = useParams();
    return (
        <div>
            <UsersDetailsContainer id={id}/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};