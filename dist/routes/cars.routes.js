"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carsRouters = void 0;
var express_1 = require("express");
var CarsRepository_1 = require("../repositories/CarsRepository");
var CreateCarService_1 = require("../service/CreateCarService");
var ListCarsService_1 = require("../service/ListCarsService");
var carsRouters = express_1.Router();
exports.carsRouters = carsRouters;
var carsRepository = new CarsRepository_1.CarsRepository();
carsRouters.post('/', function (request, response) {
    var _a = request.body, name = _a.name, brand = _a.brand;
    var createCarService = new CreateCarService_1.CreateCarService(carsRepository);
    createCarService.execute(name, brand);
    return response.status(201).send();
});
carsRouters.get('/', function (request, response) {
    var listCarsService = new ListCarsService_1.ListCarsService(carsRepository);
    return response.json(listCarsService.execute());
});
