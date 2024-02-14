const { Op } = require("sequelize");
const { City, Airport } = require("../models");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
    } catch (error) {
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      //Does not return new updated object
      // const city = await City.update(data, {
      //   where: {
      //     id: cityId,
      //   },
      //   returning: true,
      //   plain: true
      // });
      // return city;

      //This method returns the updated object
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      throw { error };
    }
  }

  async getAllCity(filter) {
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.substring]: filter.name,
            },
          },
        });
        return cities;
      }
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      throw { error };
    }
  }

  async createCities(payload) {
    try {
      const cities = await City.bulkCreate(payload);
      return cities;
    } catch (error) {
      throw { error };
    }
  }

  async getCityAirports(cityId){
    try {
      let criteria = {id: cityId}
      let include = [
        {
          model: Airport,
          as: "Airports"
        }
      ]
      const city = await City.findOne({
        where: criteria,
        include: include
      });
      return city;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = CityRepository;
