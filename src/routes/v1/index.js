const express = require("express");
const {
  CityController,
  FlightController,
  AirportController,
} = require("../../controllers");
const { flightMiddleware } = require("../../middlewares");

const router = express.Router();

// City Routes
router.post("/city", CityController.create);
router.post("/cities", CityController.createCities);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.patch("/city/:id", CityController.update);
router.get("/city", CityController.getAll);
router.get("/city-airports/:id", CityController.getCityAirports);

//  Flights Route
router.post(
  "/flight",
  flightMiddleware.validateCreateFlight,
  FlightController.create
);
router.get("/flights", FlightController.getAll);
router.get("/flights/:id", FlightController.get);

//Airport Route
router.post("/airports", AirportController.create);
module.exports = router;
