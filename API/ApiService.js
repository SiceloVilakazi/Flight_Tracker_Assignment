
export async function getAllFlights()
{
    const allFlights = await fetch("https://opensky-network.org/api/states/all")
                             .then((res)=> res.json())
                             .then((responseJSON) => {
                              console.log(responseJSON);
                              return responseJSON.states.slice(0,5);
                            }).catch((error) => console.error(error));
        return allFlights;
}