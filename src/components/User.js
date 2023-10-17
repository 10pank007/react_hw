import React from 'react';

const User = ({user}) => {
    let {id,name,status,species,gender,image} = user;
    return (
        <div>
            <h1>{id}) {name}</h1>
            <h2>{status}</h2>
            <h3>{species} {gender}</h3>
            <img src={image}/>
            <hr/>
        </div>
    );
};

export {User};