const { FlightService } = require("../services");
const { SuccessCodes } = require("../utils/error-codes");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const { flightNumber,  airplaneId, departureAirportId, arrivalAirportId, price, arrivalTime, departureTime} = req.body
    let new_payload = { flightNumber, airplaneId, departureAirportId, arrivalAirportId, price, arrivalTime, departureTime}
    const response = await flightService.createFlights(new_payload);
    return res.status(SuccessCodes.CREATED).json({
        data: response,
        success: true,
        message: "Successfully Created a Flight",
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a Flight", 
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await flightService.getAllFlights(req.query);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      message: "Successfully fetch the Flights",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the Flights",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await flightService.getFlight(req.params.id);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      message: "Successfully fetched a Flight",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetched a Flight",
      err: error,
    });
  }
};

const update = async(req,res) => {
  try{
    const response = await flightService.updateFlight(req.params.id, req.body);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      message: "Successfully updated a Flight",
    });
  }
  catch(error){
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update a Flight",
      err: error,
    });
  }
}

module.exports ={
    create,
    getAll,
    get,
    update
}