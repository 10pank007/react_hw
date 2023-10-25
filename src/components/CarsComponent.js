import React, {useEffect, useState} from 'react';
import {carService} from "../services/carService";
import {CarsForm} from "./CarsForm";
import {Cars} from "./Cars";

const CarsComponent = () => {
    let [cars, setCars] = useState([]);
    let [trigger, setTrigger] = useState(null);
    let [carForUpdate, setCarForUpdate] = useState(null)

    useEffect(() => {
        carService.getAll().then(value => setCars(value.data))
    }, [trigger])
    return (
        <div>
            <CarsForm setTrigger={setTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate}/>
            
        </div>
    );
};

export {CarsComponent};