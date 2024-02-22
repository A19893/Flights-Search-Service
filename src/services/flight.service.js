const { FlightRepository, AirplaneRepository } = require("../repositories");
const { compare } = require("../utils/helper");

class FlightService {
  constructor() {
    this.flightRepository = new FlightRepository();
    this.airplaneRepository = new AirplaneRepository();
  }

  async createFlights(data) { 
    const { airplaneId } = data;
    try {
      const check = compare(data.arrivalTime, data.departureTime)
      if(!check) throw {error: 'Arrival Time cannot be less than departure!'}
      const Airplane = await this.airplaneRepository.getAirplane(airplaneId);
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: Airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }

  async getAllFlights(query){
    try {
      const flights = await this.flightRepository.getAllFlights(query);
      return flights;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }

  async getFlight(flightId){
    try {
      const flight = await this.flightRepository.getFlight(flightId);
      return flight;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }

  async updateFlight(flightId, body){
    try{
     const flight = await this.flightRepository.updateFlights(flightId , body);
     return flight;
    }
    catch(error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }
}

module.exports = FlightService;
