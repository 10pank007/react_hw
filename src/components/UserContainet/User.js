import React from 'react';

const User = ({user}) => {
     let {id, name, username, email, phone, website,
         address:{street, suite, city, zipcode,
             geo: {lat, lng}},
         company: {name:companyName, catchPhrase, bs}} = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>street: {street}</div>
            <div>suite: {suite}</div>
            <div>city: {city}</div>
            <div>zipcode: {zipcode}</div>
            <div>lat: {lat}</div>
            <div>lng: {lng}</div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <div>companyName: {companyName}</div>
            <div>catchPhrase: {catchPhrase}</div>
            <div>bs: {bs}</div>
        </div>
    );
};


export {User};