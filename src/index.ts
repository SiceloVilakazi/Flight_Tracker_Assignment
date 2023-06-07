import './CSS/style.scss'
import {populateTable} from  "./TS/getFlights";
import {setFlightCoordinates} from "./TS/leaftletmap";

async function startFlightTracking(){
    try{
        await populateTable([]);
              setFlightCoordinates(0,0);

        }
    catch(err){
        console.error(err);
    }
}
startFlightTracking();
