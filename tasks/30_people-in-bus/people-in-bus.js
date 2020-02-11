export function peopleInBus(arr){
    return arr.reduce((res,curr) => res+curr[0]-curr[1], 0);
}