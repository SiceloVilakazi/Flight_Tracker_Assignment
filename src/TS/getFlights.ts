import {GetFlights} from '../API/ApiService'
import {setFlightCoordinates} from './leaftletmap'
let flightList = document.getElementById('flight-table');



export async function populateTable(){
    for(let i=0; i<4; i++){
        let lat:number=0, long:number=0;
   

        const allFlights = await GetFlights();

    const flightTable = document.createElement("tr");
    flightTable.style.borderBottom="double";
    const flightNumber = document.createElement("td");
    flightNumber.innerText = allFlights[i].flightNumber;
    flightNumber.style.color="blue";
    flightNumber.style.textAlign="center";
    const flightCountry = document.createElement("td");
    flightCountry.innerText = allFlights[i].flightCountry;
    flightCountry.style.textAlign="center";
    flightTable.appendChild(flightNumber);
    flightTable.appendChild(flightCountry);
    flightList?.appendChild(flightTable);
    lat = allFlights[i].latitude;
    long = allFlights[i].longitude;


    flightTable.addEventListener("click", () => setFlightCoordinates(lat,long));

    };
}
