import React, {useEffect, useState} from 'react';
import {axiosService} from "../../services/axiosService";
import {userService} from "../../services/userService";
import {UserDetailsContainer} from "./UserDetailsContainer";

const UsersDetailsContainer = ({id}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        userService.getUserById(id).then(value => setUser(value.data));
    }, [id]);

    return (
        <div>
            {user && <UserDetailsContainer user={user}/>}
        </div>
    );
};

export {UsersDetailsContainer};