import {FlightDetails} from '../Interfaces/FlightDetails';

export async function GetFlights() {
 
    let endpoint : string = "https://opensky-network.org/api/states/all";
    let flights : FlightDetails[];

    return  await fetch(endpoint).then((res)=> res.json())
                          .then((responseJSON) =>{
                            flights = responseJSON.states.map((state:any) => {
                                return {
                                     flightNumber: state[1],
                                     flightCountry: state[2],
                                     latitude: state[5],
                                     longitude: state[6]
                                     };
                            }).slice(0,5);
                            return flights;
                          });
}