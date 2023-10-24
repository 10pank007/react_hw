import React from 'react';
import {buildTimeValue} from "@testing-library/user-event/dist/utils";
import {User} from "./User";

const Users = ({users}) => {
    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};