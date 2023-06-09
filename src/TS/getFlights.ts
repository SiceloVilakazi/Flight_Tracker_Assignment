import {GetFlights,polling} from '../API/ApiService'
import { FlightDetails } from '../Interfaces/FlightDetails';
import {setFlightCoordinates} from './leaftletmap'
let flightList = document.getElementById('flight-table');

let flights :FlightDetails[] = [];

GetFlights().subscribe((result)=>{
    flights=result;
    if(flights.length>0)
    {
        populateTable(flights);
    }
});

export  function populateTable(flights:FlightDetails[]){

flights.forEach(element=>{

}

)

    for(let i=0; i<4; i++){
        let lat:number=0, long:number=0;

    const flightTable = document.createElement("tr");
    flightTable.style.borderBottom="double";
    const flightNumber = document.createElement("td");
    flightNumber.innerText = flights[i].flightNumber? flights[i].flightNumber: undefined;
    flightNumber.style.color="blue";
    flightNumber.style.textAlign="center";
    const flightCountry = document.createElement("td");
    flightCountry.innerText = flights[i].flightCountry? flights[i].flightCountry:undefined;
    flightCountry.style.textAlign="center";
    flightTable.appendChild(flightNumber);
    flightTable.appendChild(flightCountry);
    flightList?.appendChild(flightTable);
    lat = flights[i].latitude? flights[i].latitude: undefined;
    long = flights[i].longitude? flights[i].longitude: undefined;

    flightTable.addEventListener("click", () => setFlightCoordinates(lat,long));
    };
}
