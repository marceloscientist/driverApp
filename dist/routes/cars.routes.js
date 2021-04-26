"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carsRouters = void 0;
var express_1 = require("express");
var CarsRepository_1 = require("../modules/car/repositories/CarsRepository");
var ListCarsService_1 = require("../modules/car/service/ListCarsService");
var createCar_1 = require("../modules/car/useCases/createCar");
var carsRouters = express_1.Router();
exports.carsRouters = carsRouters;
var carsRepository = new CarsRepository_1.CarsRepository();
carsRouters.post('/', function (request, response) {
    return createCar_1.createCarController.handle(request, response);
});
carsRouters.get('/', function (request, response) {
    var listCarsService = new ListCarsService_1.ListCarsService(carsRepository);
    return response.json(listCarsService.execute());
});
