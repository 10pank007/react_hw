import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services/userService";

const UserForm = ({setUsers}) => {
    let {reset, register, handleSubmit}
        = useForm();
    const save = async (post) => {
        let {data} = await userService.create(post);
        console.log(data)
        setUsers(prev => [...prev, data])
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type={"text"} placeholder={"id"} name={"id"} {...register("id")}/>
            <input type={"text"} placeholder={"name"} name={"name"} {...register("name")}/>
            <input type={"text"} placeholder={"username"} {...register("username")}/>
            <input type={"text"} placeholder={"email"} {...register("email")}/>
            <input type={"text"} placeholder={"street"} {...register("address.street")}/>
            <input type={"text"} placeholder={"suite"} {...register("address.suite")}/>
            <input type={"text"} placeholder={"city"} {...register("address.city")}/>
            <input type={"text"} placeholder={"zipcode"} {...register("address.zipcode")}/>
            <input type={"text"} placeholder={"lat"} {...register("address.geo.lat")}/>
            <input type={"text"} placeholder={"lng"} {...register("address.geo.lng")}/>
            <input type={"text"} placeholder={"phone"} {...register("phone")}/>
            <input type={"text"} placeholder={"website"} {...register("website")}/>
            <input type={"text"} placeholder={"companyName"} {...register("company.name")}/>
            <input type={"text"} placeholder={"catchPhrase"} {...register("company.catchPhrase")}/>
            <input type={"text"} placeholder={"bs"} {...register("company.bs")}/>
            <button>save</button>
        </form>
    );
};

export {UserForm};