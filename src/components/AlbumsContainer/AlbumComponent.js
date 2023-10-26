import React from 'react';

const AlbumComponent = ({item}) => {
    let {iserId, id, title} = item;
    return (
        <div>
            <div>iserId : {iserId}</div>
            <div>id : {id}</div>
            <div>title : {title}</div>
            <hr/>
        </div>
    );
};

export {AlbumComponent};