import React from 'react';
import {useNavigate} from "react-router-dom";

const User = ({iter}) => {
    let navigate = useNavigate();
    return (
        <div>
            {iter.id} - {iter.name}
            <button onClick={()=> {navigate(`user-details/${iter.id}`)}}>user details</button>
        </div>
    );
};

export {User};