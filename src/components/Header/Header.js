import React from 'react';

import css from './Header.module.css';
import {useChapter} from "../../hooks/useChapter";

const Header = () => {
    let {chapter} = useChapter();
    return (
        <div className={css.Header}>
            {chapter ? <h1>{chapter}</h1> : <h1>Rick and Morty</h1>
            }
        </div>
    );
};

export {Header};