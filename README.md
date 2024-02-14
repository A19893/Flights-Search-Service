# Welcome to Flights Service

# Project Setup

- npm install
- Create a .env file and add PORT variable in it with value 3000
- Inside the src/config create a config.json file and add development credentials for database

```
  "development": {
    "username": <YOUR_DB_USERNAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "FLIGHTS_SEARCH_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },

```

- Once you have added config file and then move to src folder and execute npx sequelize db:create
- After setting up everything run a command npx sequelize-cli db:migrate or npm run up throught which it will also run the same command

# Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
    RelationShip -> City has many airport but airport has one city
### Airplane -> id, model_number, capacity 
### Flight -> id, flightNumber,  airplaneId, departureAirportId,arrivalAirportId, price, arrivalTime, departureTime, boardingGate, totalSeats
# Dependencies

- express
- dotnev
- sequelize
- sequelize-cli
- mysql2
