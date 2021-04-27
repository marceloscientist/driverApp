"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carsRouters = void 0;
var express_1 = require("express");
var createCar_1 = require("../modules/car/useCases/createCar");
var ListCar_1 = require("../modules/car/useCases/ListCar");
var carsRouters = express_1.Router();
exports.carsRouters = carsRouters;
carsRouters.post('/', function (request, response) {
    createCar_1.createCarController.handle(request, response);
});
carsRouters.get('/', function (request, response) {
    ListCar_1.listCarController.handle(request, response);
});
