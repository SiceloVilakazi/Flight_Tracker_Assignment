import './CSS/style.scss'
import {populateTable} from  "./TS/getFlights";
import {setFlightCoordinates} from "./TS/leaftletmap";
import { GetFlights } from './API/ApiService';

async function startFlightTracking(){
    try{
        await populateTable();
              setFlightCoordinates(0,0);
        await GetFlights();
     
        }
    catch(err){
        console.error(err);
    }
}
startFlightTracking();
