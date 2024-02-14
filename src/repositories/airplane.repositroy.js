const { Airplane } = require('../models');

class AirplaneRepository{
    async getAirplane(id){
        try{
          const airplane = await Airplane.findByPk(id);
          return airplane;
        }
        catch(error){
            console.log("Error occured in repository layer");
            throw error;
        }
    }
}

module.exports = AirplaneRepository;