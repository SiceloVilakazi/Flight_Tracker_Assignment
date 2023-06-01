let map = L.map("map").setView([28.0473, 26.2041], 2);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

let flightIcon = L.icon({
    iconUrl: "flight.png",
    iconSize: [25, 25],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });

export function flightHandler(coordinates) {
  
  console.log(coordinates);
  let marker = L.marker([28.0473, 26.2041], { icon: flightIcon }).addTo(map);
  marker.setLatLng([coordinates.long, coordinates.lat]);

  map.flyTo([coordinates.long, coordinates.lat], 11);
}

export function resetMapLocationView() {
    map.flyTo([-35, 23], 2);
  }
  
  export function setFlightLocation(lat = 0, lon = 0) {
    console.log(lat, long);
    map.flyTo([lat, lon], 10);
    marker.setLatLng([lat, lon]);
  }