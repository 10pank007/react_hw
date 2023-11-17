import React, {useEffect} from 'react';
import {Characters} from "../components";
import {useParams} from "react-router-dom";

const CharactersPage = () => {
    return (
        <div>
            <Characters/>
        </div>
    );
};

export {CharactersPage};