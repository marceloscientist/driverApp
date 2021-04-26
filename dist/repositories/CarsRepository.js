"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsRepository = void 0;
var Car_1 = require("../model/Car");
var CarsRepository = /** @class */ (function () {
    function CarsRepository() {
        this.cars = [];
    }
    CarsRepository.prototype.create = function (_a) {
        var name = _a.name, brand = _a.brand;
        var car = new Car_1.Car();
        Object.assign(car, {
            name: name,
            brand: brand,
        });
        this.cars.push(car);
    };
    CarsRepository.prototype.list = function () {
        return this.cars;
    };
    CarsRepository.prototype.findByName = function (name) {
        var car = this.cars.find(function (car) { return car.name === name; });
        return car;
    };
    return CarsRepository;
}());
exports.CarsRepository = CarsRepository;
