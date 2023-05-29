//needs to be sorted
import { getAllFlights } from "../API/ApiService.js";
import {flightHandler} from "../JS/leafletmap.js";
var listContainer = document.getElementById('flight-table');

const flights = await getAllFlights();
console.log(flights);

for (let i = 0; i < 20; i++) {
  let coordinates = {
    lat: 0,
    long: 0,
  };
  //Fix the dom manipulation
  const flightTable = document.createElement("tr");
  const flightTableData = document.createElement("td");
  flightTableData.innerText = flights[i][1];
  flightTableData.style.color="blue";
  const flightTableData2 = document.createElement("td");
  flightTableData2.innerText = flights[i][2];
 

  flightTable.appendChild(flightTableData);
  flightTable.appendChild(flightTableData2);

  listContainer.appendChild(flightTable);
  coordinates.lat = flights[i][5];
  coordinates.long = flights[i][6];
  flightTable.addEventListener("click", () => flightHandler(coordinates));
}



