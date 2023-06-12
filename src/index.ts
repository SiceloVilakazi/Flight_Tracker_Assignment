import {populateTable} from  "./TS/getFlights";
import {setFlightCoordinates} from "./TS/leaftletmap";
import {GetFlights} from './API/ApiService';
import { FlightDetails } from './Interfaces/FlightDetails';

async function startFlightTracking(){
    try{
        let flights:FlightDetails[] = [];

        GetFlights().subscribe((result)=>{
            flights=result;
             populateTable(flights);
        });
              setFlightCoordinates(0,0);

        }
    catch(err){
        console.error(err);
    }
}
startFlightTracking();
