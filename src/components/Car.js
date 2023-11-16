import React from 'react';
import {useDispatch} from "react-redux";
import {carAction} from "../redux";
import {carService} from "../services";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch();

    const deleteById = async () => {
        await carService.deleteById(id);
        dispatch(carAction.trigger());
    }
    return (
        <div>
            <div>id : {id}</div>
            <div>brand : {brand}</div>
            <div>price : {price}</div>
            <div>year : {year}</div>
            <button onClick={()=> dispatch(carAction.setCarForUpdate(car))}>update</button>
            <button onClick={deleteById}>delete</button>
        </div>
    );
};

export {Car};