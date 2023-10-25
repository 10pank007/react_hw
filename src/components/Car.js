import React from 'react';
import {carService} from "../services/carService";

const Car = ({car, setCarForUpdate}) => {
    let {id, price, brand, year} = car;
    return (
        <div>
            <div>id: {id}</div>
            <div>price: {price}</div>
            <div>brand: {brand}</div>
            <div>year: {year}</div>
            <button onClick={()=> setCarForUpdate(car)}>update</button>
            <button onClick={() => carService.deliteCar(id)}>delete</button>
        </div>
    );
};

export {Car};