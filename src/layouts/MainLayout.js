import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../components";
import {useDispatch} from "react-redux";
import {episodeActions} from "../redux";

const MainLayout = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};