"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carsRouters = void 0;
var express_1 = require("express");
var Car_1 = require("../model/Car");
var carsRouters = express_1.Router();
exports.carsRouters = carsRouters;
var cars = [];
carsRouters.post('/', function (request, response) {
    var _a = request.body, name = _a.name, brand = _a.brand;
    var car = new Car_1.Car();
    Object.assign(car, {
        name: name,
        brand: brand,
        created_at: new Date()
    });
    cars.push(car);
    return response.status(201).json(cars);
});
