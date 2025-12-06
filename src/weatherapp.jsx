import Searchbox from './searchbox'
import InfoBox from './infoBox'
import { useState } from 'react';
export default function Weatherapp(){
    const [weatherData, setWeatherData]=useState({
         city:"Delhi",
        temp:296.71,
        mintemp:294.82,
        maxtemp:298.15,
        humidity:78,
        pressure:1012,
        weatherType:"scattered clouds",
    });
    let updateinfo=(newInfo)=>{
        setWeatherData(newInfo);
    }
    return(
        <div className="weatherapp">
            <h2>Weather App by Krishna</h2>
             <Searchbox updateinfo={updateinfo}/>
             <br></br>
             <InfoBox info={weatherData} /> 

        </div>
    )
}