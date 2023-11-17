import React, {useEffect} from 'react';
import {EpisodePagination, Episodes} from "../components";
import {useSearchParams} from "react-router-dom";
import {episodeActions} from "../redux";
import {useDispatch} from "react-redux";

const EpisodesPage = () => {
    const [query, setQuery] = useSearchParams();
    const page = query.get("page");
    const dispatch = useDispatch();

    useEffect(() => {
        if (!page) {
            setQuery({page: '1'})
        }
        dispatch(episodeActions.setCurrent({currentEpisode: null}))

    }, []);


    return (
        <div>
            <Episodes page={page}/>
            <EpisodePagination/>
        </div>
    );
};

export {EpisodesPage};