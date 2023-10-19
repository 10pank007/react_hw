import React from 'react';

import css from "./Flight.module.css"

const Flight = ({iter}) => {
    let {launch_year, mission_name, links} = iter;
    let {mission_patch_small: img} = links;
    return (
        <div className={css.Flight}>
            <h2>{launch_year} {mission_name} </h2>
            <img src={img}/>
            <hr/>
        </div>
    );
};

export {Flight};