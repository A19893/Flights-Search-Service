const { CityRepository } = require("../repositories");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const result = await this.cityRepository.createCity(data);
      return result;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      const response = await this.cityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }

  async getAllCity(query){
    try{
      const cities = await this.cityRepository.getAllCity(query);
      return cities;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }

  async createCities(payload){
    try {
      const result = await this.cityRepository.createCities(payload);
      return result;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }

  async getCityAirports(cityId){
    try{
      const result = await this.cityRepository.getCityAirports(cityId);
      return result;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }
}

module.exports = CityService;
