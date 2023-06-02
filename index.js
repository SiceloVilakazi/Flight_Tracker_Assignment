import './CSS/style.scss'
import flightpng from './mediaContent/flight.png';
import {flightHandler} from "./JS/leafletmap.js";
import { getFlights } from  "./JS/getFlights.js";

async function startFlightTracking(){
    try{
       
        await getFlights();
        flightHandler();
     
        }
    catch(err){
        console.error(err);
    }
}
startFlightTracking();