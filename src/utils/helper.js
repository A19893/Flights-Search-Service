function compare (arrivalTimeString, departureTimeString){
 let arrivalDate = new Date(arrivalTimeString);
 let departureDate = new Date(departureTimeString);
 return arrivalDate.getTime() >  departureDate.getTime();
}

module.exports= {
    compare
}