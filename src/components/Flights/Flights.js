import React, {useEffect, useState} from 'react';

import {Flight} from "../Flight/Flight";
import {shipService} from "../../service/shipService";
import css from "./Flights.module.css"

const Flights = () => {
    let[flight, setFlight] = useState([]);

    useEffect(()=>{
        shipService.getAllFlights().then(value => setFlight(value.data));
    }, []);

     let arr = flight.filter(value => value.launch_year !== "2020");
    return (
        <div className={css.Flights}>
            {
                arr.map((value, index) => <Flight key={index} iter={value}/>)
            }
        </div>
    );
};

export {Flights};