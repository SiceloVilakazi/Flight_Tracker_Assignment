import {FlightDetails} from '../Interfaces/FlightDetails';
import { Observable, from, timer } from 'rxjs';
import {switchMap } from 'rxjs/operators';

export  function GetFlights() :Observable<FlightDetails[]>
{
 
    let endpoint : string = "https://opensky-network.org/api/states/all";
    let flights : FlightDetails[];

        return from(
            fetch(endpoint).then((res)=> res.json())
            .then((responseJSON) =>{
                try{
                    flights = responseJSON.states.map((state:any) => {
                        return {
                             flightNumber: state[1],
                             flightCountry: state[2],
                             latitude: state[5],
                             longitude: state[6]
                             };
                    }).slice(0,5);
                    localStorage.setItem('flights',JSON.stringify(flights));
                    console.log(flights);
                    return flights;
                }
                catch{
                    flights = JSON.parse(localStorage.getItem('flights'));
                    return flights;
                } 
            }
        ) 
    );
}

export function polling(interval:5000): Observable<FlightDetails[]>{
    return timer(0,interval).pipe(
        switchMap(_=>GetFlights())
    );
}