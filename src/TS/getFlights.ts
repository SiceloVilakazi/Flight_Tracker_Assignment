import {GetFlights,polling} from '../API/ApiService'
import { FlightDetails } from '../Interfaces/FlightDetails';
import {setFlightCoordinates} from './leaftletmap'
let tableBody = document.getElementById('table-body') as HTMLTableElement;

let flights :FlightDetails[] = [];

GetFlights().subscribe((result)=>{
    flights=result;
    if(flights.length>0)
    {
        populateTable(flights);
    }
});

export  function populateTable(flights:FlightDetails[]){

// flights.forEach(element=>{

// }

// )
    // Insert a row at the end of table
    var newRow = tableBody?.insertRow();

    // Insert a cell at the end of the row
    var newCell = newRow?.insertCell();
    
    // Append a text node to the cell
    var newText = document.createTextNode('new row');
    newCell?.appendChild(newText);

    for(let i=0; i<=flights.length; i++){
    //     let lat:number=0, long:number=0;

    // const flightTable = document.createElement("tr");
    // flightTable.style.borderBottom="double";
    // const flightNumber = document.createElement("td");
    // flightNumber.innerText = flights[i].flightNumber? flights[i].flightNumber: undefined;
    // flightNumber.style.color="blue";
    // flightNumber.style.textAlign="center";
    // const flightCountry = document.createElement("td");
    // flightCountry.innerText = flights[i].flightCountry? flights[i].flightCountry:undefined;
    // flightCountry.style.textAlign="center";
    // flightTable.appendChild(flightNumber);
    // flightTable.appendChild(flightCountry);
    // flightList?.appendChild(flightTable);
    // lat = flights[i].latitude? flights[i].latitude: undefined;
    // long = flights[i].longitude? flights[i].longitude: undefined;

    let lat:number=0, long:number=0;

    // const flightTable = document.createElement("tr");
    // // flightTable.style.borderBottomWidth='1px';
    // // flightTable.style.borderColor='rgb(219 234 254)';
    // // flightTable.style.padding='1rem';
    // // flightTable.style.paddingLeft='2rem';
    // // flightTable.style.textDecorationColor='rgb(100 116 139)';
    
    // const flightNumber = document.createElement("td");
    // flightNumber.style.borderBottomWidth='1px';
    // flightNumber.style.borderColor='rgb(219 234 254)';
    // flightNumber.style.padding='1rem';``
    // flightNumber.style.paddingLeft='2rem';
    // flightNumber.style.textDecorationColor='rgb(100 116 139)';
    // flightNumber.innerText =" lights[i].fflightNumber? flights[i].flightNumber: undefined";
   
    // flightNumber.style.color="blue";
    // flightNumber.style.textAlign="center";
    // const flightCountry = document.createElement("td");
    // //flightCountry.innerText = flights[i].flightCountry? flights[i].flightCountry:undefined;
    // flightCountry.style.textAlign="center";
    // flightTable.appendChild(flightNumber);
    // flightTable.appendChild(flightCountry);


    const flightTable =document.createElement('tr') as HTMLTableRowElement;
    
   // tableBody?.appendChild(flightTable);
  //  lat = flights[i].latitude? flights[i].latitude: undefined;
  //  long = flights[i].longitude? flights[i].longitude: undefined;
console.log("wowowowowowowo");
   // flightTable.addEventListener("click", () => setFlightCoordinates(lat,long));
    };
}
