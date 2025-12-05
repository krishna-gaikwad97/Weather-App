import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { use, useState } from 'react';
import { set } from 'mongoose';

export default function Searchbox(){
     let [city, setcity]=useState("");
    const API_URl=" https://api.openweathermap.org/data/2.5/weather";
   //?q=delhi&appid=YOUR_KEY

    const API_Key="b7f56b501fb6712f3db250afd10a45ce";
    let getweatherinfo=async()=>{
       let response = await fetch(`${API_URl}?q=${city}&appid=${API_Key}`);
      let jsonResponse = await response.json();
     // console.log(jsonResponse);
      let result={
        temp:jsonResponse.main.temp,
        mintemp:jsonResponse.main.temp_min,
        maxtemp:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        pressure:jsonResponse.main.pressure,
        weatherType:jsonResponse.weather[0].description,
      };
      console.log(result);

    }
    //?q={city name}&appid={API key}
   
    let handleChange=(event)=>{
        setcity(event.target.value);
    }
    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log("Form Submitted", city);
        setcity("");
        getweatherinfo();
    }   
    return(
    <div>
        <h3>Search for Weather</h3>
        <form onSubmit={handleSubmit}>
             <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
             <br></br>
             <br></br>
             <Button variant="outlined" type='submit'>Search</Button>
        </form>
    </div>    
    )
}