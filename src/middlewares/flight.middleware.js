const { ClientErrors } = require("../utils/error-codes");

const validateCreateFlight = (req,res,next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.price ||
        !req.body.arrivalTime ||
        !req.body.departureTime 
    ){
        return res.status(ClientErrors.BAD_REQUEST).json({
            data: {},
            success: false,
            message: "Invalid request body for create flights",
            err : "Missing madatory properties for creating a flight"
        })
    }
    next();
}

module.exports ={
    validateCreateFlight
}