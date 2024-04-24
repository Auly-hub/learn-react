/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './card';

const Countries = () => {
    const [data, setData] = useState ([]);
    const [rangeValue, setRangeValue] = useState ([36]);
    const Radios = ["Africa", "Europe", "America", "Asia", "Oceania"];
    useEffect(() => {
            axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data));
    }, []);


    return (
        <div className='countries'>
            <ul className="radio-container">

                <input type="range" min="1" max="250" 
                defaultValue={rangeValue} 
                onChange={(e) => setRangeValue(e.target.value)}  
                />

                {Radios.map((continent) => (
                    <li>
                        <input type="radio" id={continent} name="continent"/>
                        <label className='abcde' htmlFor={continent}> {continent} </label>
                    </li>
                    
                ))}
            </ul>
            <ul>
                {data.slice(0, rangeValue) .map((country, index) => (
                        <Card key={index} country={country} />
                    ))}
            </ul>
        </div>
    )
}

export default Countries
