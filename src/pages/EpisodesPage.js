import React, {useEffect} from 'react';
import {Episodes} from "../components";
import {useChapter} from "../hooks/useChapter";

const EpisodesPage = () => {
    let {setChapter} = useChapter();
    useEffect(() => {
        setChapter(null)
    }, []);
    return (
        <div>
            <Episodes/>
        </div>
    );
};

export {EpisodesPage};