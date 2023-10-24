import React from 'react';
import {useForm} from "react-hook-form";
import {commentsService} from "../services/commentsService";

const ComentForm = ({setComments}) => {
    let {handleSubmit, register, reset} = useForm();
    const save = async (comment) => {
        let date = await commentsService.creat(comment);
        console.log(date.data);
        setComments(prev => [...prev, date.data])
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type={"text"} placeholder={"postId"} {...register("postId")}/>
            <input type={"text"} placeholder={"id"} {...register("id")}/>
            <input type={"text"} placeholder={"name"} {...register("name")}/>
            <input type={"text"} placeholder={"email"} {...register("email")}/>
            <input type={"text"} placeholder={"body"} {...register("body")}/>
            <button>save</button>
        </form>
    );
};

export {ComentForm};