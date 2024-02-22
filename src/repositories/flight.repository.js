const { Op } = require("sequelize");
const { Flight } = require("../models");

class FlightRepository {
  #createFilter(query) {
    let filterQuery = {};
    if (query.arrivalAirportId) {
      filterQuery.arrivalAirportId = query.arrivalAirportId;
    }
    if (query.departureAirportId) {
      filterQuery.arrivalAirportId = query.arrivalAirportId;
    }
    // if (query.minPrice && query.maxPrice) {
    //   Object.assign(filterQuery, {
    //     price: { [Op.between]: [query.minPrice, query.maxPrice] },
    //   });
    // }
    let priceFilter = [];
    if (query.minPrice) {
      priceFilter.push({ price: { [Op.gte]: query.minPrice } });
    }

    if (query.maxPrice) {
      priceFilter.push({ price: { [Op.lte]: query.maxPrice } });
    }
    Object.assign(filterQuery, { [Op.and]: priceFilter });
    return filterQuery;
  }

  async createFlight(data) {
    try {
      const flight = await Flight.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await Flight.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw { error };
    }
  }

  async getAllFlights(query) {
    try {
      const filterQuery = this.#createFilter(query);
      console.log(filterQuery);
      const flight = await Flight.findAll({ where: filterQuery });
      return flight;
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw { error };
    }
  }

  async updateFlights(id , payload) {
    try{
    let criteria = {id:id};
    const flight = await Flight.update(payload, {
      where: criteria
    });
    return flight;
    }
    catch(error){
      console.log("Something went wrong in repository layer");
      throw { error };
    }
  }
}

module.exports = FlightRepository;
