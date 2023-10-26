import React, {useEffect, useState} from 'react';

import {albumService} from "../../services/albumService";
import {AlbumComponent} from "./AlbumComponent";
import css from "./Albums.module.css"

const AlbumsComponent = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        albumService.getAllAlbums().then(value => setAlbums(value.data))
    }, []);
    return (
        <div className={css.Albums}>
            {albums.map(value => <AlbumComponent key={value.id} item={value}/>)}
        </div>
    );
};

export {AlbumsComponent};