const { CityService } = require("../services");
const { SuccessCodes } = require("../utils/error-codes");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const response = await cityService.createCity(req.body);
    return res.status(SuccessCodes.CREATED).json({
      data: response,
      success: true,
      message: "Successfully Created a City",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a city",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      message: "Successfully deleted a City",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete a city",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      message: "Successfully fetched a City",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetched a city",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      message: "Successfully updated a City",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update a city",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await cityService.getAllCity(req.query);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      message: "Successfully fetch the cities",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the cities",
      err: error,
    });
  }
};

const createCities = async (req, res) => {
  try {
    const response = await cityService.createCities(req.body);
    return res.status(SuccessCodes.CREATED).json({
      data: response,
      success: true,
      message: "Successfully created the cities",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create the cities",
      err: error,
    });
  }
};

const getCityAirports = async (req,res) => {
  try {
    const response = await cityService.getCityAirports(req.params.id);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      message: "Successfully fetch the airport with cities",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to  fetch the airport with cities",
      err: error,
    });
  }
}
module.exports = {
  create,
  destroy,
  get,
  update,
  getAll,
  createCities,
  getCityAirports
};
