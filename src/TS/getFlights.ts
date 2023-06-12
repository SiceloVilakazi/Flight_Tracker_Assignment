import { FlightDetails } from '../Interfaces/FlightDetails';
import {setFlightCoordinates} from './leaftletmap'
let flightList = document.getElementById('flight-table');


export  function populateTable(flights:FlightDetails[]){
    for(let i=0; i<4; i++){
        let lat:number=0, long:number=0;

    const flightTable = document.createElement("tr");
    flightTable.style.borderBottomWidth='1px';
    flightTable.style.borderColor='rgb(219 234 254)';
    flightTable.style.padding='1rem';
    flightTable.style.marginLeft='2rem';
    flightTable.style.textDecorationColor='rgb(100 116 139)';
    const flightNumber = document.createElement("td");
    flightNumber.innerText = flights[i].flightNumber? flights[i].flightNumber: undefined;
    flightNumber.style.paddingLeft='2rem';
    flightNumber.style.color="blue";
    const flightCountry = document.createElement("td");
    flightCountry.innerText = flights[i].flightCountry? flights[i].flightCountry:undefined;
    flightTable.appendChild(flightNumber);
    flightTable.appendChild(flightCountry);
    flightList?.appendChild(flightTable);
    lat = flights[i].latitude? flights[i].latitude: undefined;
    long = flights[i].longitude? flights[i].longitude: undefined;

    flightTable.addEventListener("click", () => setFlightCoordinates(lat,long));
    };
}
