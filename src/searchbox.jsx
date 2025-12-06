import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { use, useState } from 'react';
import { set } from 'mongoose';

export default function Searchbox({updateinfo}){
     let [city, setcity]=useState("");
    const API_URl=" https://api.openweathermap.org/data/2.5/weather";
   //?q=delhi&appid=YOUR_KEY

    const API_Key="b7f56b501fb6712f3db250afd10a45ce";
    let getweatherinfo=async()=>{
       let response = await fetch(`${API_URl}?q=${city}&appid=${API_Key}`);
      let jsonResponse = await response.json();
     // console.log(jsonResponse);
      let result={
        city:city,
        temp:jsonResponse.main.temp,
        mintemp:jsonResponse.main.temp_min,
        maxtemp:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        pressure:jsonResponse.main.pressure,
        weatherType:jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;

    }
    //?q={city name}&appid={API key}
   
    let handleChange=(event)=>{
        setcity(event.target.value);
    }
    let handleSubmit=async(event)=>{
        event.preventDefault();
        console.log("Form Submitted", city);
        setcity("");
        let info=await getweatherinfo();
        updateinfo(info);
    }   
    return(
    <div>
        
        <form onSubmit={handleSubmit}>
             <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
             <br></br>
             <br></br>
             <Button variant="contained" type='submit'>Search</Button>
            
        </form>
    </div>    
    )
}