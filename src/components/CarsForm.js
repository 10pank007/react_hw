import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../services/carService";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../validators/carValidator";

const CarsForm = ({setTrigger, carForUpdate, setCarForUpdate}) => {
    let {register, reset
        , handleSubmit, formState: {isValid, errors}
    , setValue}
        = useForm({mode:"all", resolver: joiResolver(carValidator)});
    useEffect(()=> {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true});
            setValue("price", carForUpdate.price, {shouldValidate: true});
            setValue("year", carForUpdate.year, {shouldValidate: true});
        }
    }, [carForUpdate])

    const save = async (car) => {
         await carService.createCar(car);
         setTrigger(prev => !prev);
         reset();
    }

    const update = async (car) => {
        await carService.updateById(car, carForUpdate.id);
        setTrigger(prev => !prev);
        setCarForUpdate(null)
        reset()
    }
    return (
        <>
            <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
                <input type={"text"} placeholder={"brand"} {...register("brand", )}
                />
                <input type={"text"} placeholder={"price"} {...register("price", {valueAsNumber:true})}/>
                <input type={"text"} placeholder={"year"} {...register("year", {valueAsNumber:true})}/>
                <button disabled={!isValid}>{carForUpdate ? "update" : "save"}</button>
            </form>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </>


    );
};

export {CarsForm};