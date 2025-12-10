import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function InfoBox({info}){
    const init_img="https://images.unsplash.com/photo-1653562969472-db4c9218278b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRodW5kZXJzdHJvbWV8ZW58MHx8MHx8fDA%3D";
    const hot_img="https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.webp?a=1&b=1&s=612x612&w=0&k=20&c=JfCdjP7brx9oUlLT6TIx9OTtEgvEGNpxDcDFqEz0Fo0=";
    const cold_img="https://plus.unsplash.com/premium_photo-1669990950563-8b31d8ed237b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D";
    const rainy_img="https://plus.unsplash.com/premium_photo-1670002347718-de1091111728?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbnklMjBkYXl8ZW58MHx8MHx8fDA%3D";
    return(
        <div className="infoBox">
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.temp>303?hot_img:(info.temp<293?cold_img:(info.weatherType.includes("rain")?rainy_img:init_img))}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <p>{info.city}</p>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
            <p>Temperature: {info.temp}&deg; C</p>
            <p>Weather Type: {info.weatherType}</p>
            <p>Min Temperature: {info.mintemp}&deg; C</p>
            <p>Max Temperature: {info.maxtemp}&deg; C</p>
            <p>Humidity: {info.humidity} %</p>
            <p>Pressure: {info.pressure} hPa</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
         
        </div>
    )
}