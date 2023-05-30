//needs to be sorted
import { getAllFlights } from "../API/ApiService.js";
import {flightHandler} from "../JS/leafletmap.js";
var flightList = document.getElementById('flight-table');

const flights = await getAllFlights();
console.log(flights);

for (let i = 0; i < 20; i++) {
  let coordinates = {
    lat: 0,
    long: 0,
  };
  //Fix the dom manipulation
  const flightTable = document.createElement("tr");
  const flightNumber = document.createElement("td");
  flightNumber.innerText = flights[i][1];
  flightNumber.style.color="blue";
  const flightCountry = document.createElement("td");
  flightCountry.innerText = flights[i][2];
 

  flightTable.appendChild(flightNumber);
  flightTable.appendChild(flightCountry);

  flightList.appendChild(flightTable);
  coordinates.lat = flights[i][5];
  coordinates.long = flights[i][6];
  flightTable.addEventListener("click", () => flightHandler(coordinates));
}



