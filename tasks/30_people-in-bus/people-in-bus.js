

export function peopleInBus(data) {

    return data.reduce( (acc, station) => acc + station[0] - station[1], 0 );

}