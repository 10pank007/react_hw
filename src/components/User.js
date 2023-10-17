import React from 'react';

const User = ({simpsons}) => {

    return (
        <div>
            <h1>{simpsons.name} {simpsons.surname}</h1>
            <h2>{simpsons.age}</h2>
            <p>{simpsons.info}</p>
            <img src={simpsons.photo}/>
            <hr/>
        </div>
    );
};

export {User};