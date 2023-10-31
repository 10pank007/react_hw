import React, {useEffect, useState} from 'react';
import {axiosService} from "../../services/axiosService";
import {userService} from "../../services/userService";
import {User} from "./User";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAllUsers().then(value => setUsers(value.data));
    }, []);
    return (
        <div>
            {users.map(value => <User key={value.id} iter={value}/>)}
        </div>
    );
};

export {Users};