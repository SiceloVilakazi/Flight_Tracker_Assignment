import * as L from "leaflet";
import icon from '../mediaContent/flight.png'


let map = L.map("map").setView([28.0473, 26.2041], 2);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  let flightIcon = L.icon({
    iconUrl: icon,
    iconSize: [25, 25],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });

  export function setFlightCoordinates(lat:number,long:number){

    let marker = L.marker([28.0473, 26.2041], { icon: flightIcon }).addTo(map);
                marker.setLatLng([long, lat]);
                map.flyTo([long, lat], 11);
  }