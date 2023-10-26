import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import css from "./Header.module.css"

const Header = () => {
    let navigate = useNavigate();
    return (
        <div>
            <div className={css.Header}>
                <NavLink to={"todos"}>todos</NavLink>
                <NavLink to={"albums"}>albums</NavLink>
                <NavLink to={"comments"}>comments</NavLink>
            </div>
            <div className={css.Button}>
                <button onClick={()=> navigate(-1)}>prevPage</button>
                <button onClick={() => navigate(1)}>nextPage</button>
            </div>

        </div>

    );
};

export {Header};