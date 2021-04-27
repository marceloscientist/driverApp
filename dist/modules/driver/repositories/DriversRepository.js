"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriversRepository = void 0;
var Driver_1 = require("../model/Driver");
var DriversRepository = /** @class */ (function () {
    function DriversRepository() {
        this.drivers = [];
    }
    DriversRepository.getInstance = function () {
        if (!DriversRepository.INSTANCE) {
            DriversRepository.INSTANCE = new DriversRepository();
        }
        return DriversRepository.INSTANCE;
    };
    DriversRepository.prototype.create = function (_a) {
        var name = _a.name, age = _a.age, cpf = _a.cpf;
        var driver = new Driver_1.Driver();
        Object.assign(driver, {
            age: age,
            name: name,
            cpf: cpf
        });
        this.drivers.push(driver);
    };
    DriversRepository.prototype.list = function () {
        return this.drivers;
    };
    DriversRepository.prototype.findByName = function (name) {
        var driver = this.drivers.find(function (driver) { return driver.name === name; });
        return driver;
    };
    return DriversRepository;
}());
exports.DriversRepository = DriversRepository;
