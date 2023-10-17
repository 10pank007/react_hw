import React, {useEffect, useState} from 'react';
import {User} from "./User";

const Users = () => {
    let  [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/[1,2,3,4,5,6]").then(value => value.json())
            .then(value => setUsers(value));
    }, [])

    return (
            <div>
                {users.map((value, index) => <User key={index} user={value}/>)}
            </div>
    );
};

export {Users};