import React, {useEffect, useState} from 'react';
import {UserForm} from "./UserForm";
import {userService} from "../../services/userService";
import {Users} from "./Users";

const UsersContainer = () => {
    let [users, setUsers] = useState([]);
    useEffect(()=>{
        userService.getAll().then(value => setUsers(value.data));
    }, []);
    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export {UsersContainer};