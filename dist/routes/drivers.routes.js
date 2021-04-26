"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.driversRouters = void 0;
var express_1 = require("express");
var DriversRepository_1 = require("../repositories/DriversRepository");
var CreateDriverService_1 = require("../service/CreateDriverService");
var ListDriversService_1 = require("../service/ListDriversService");
var driversRouters = express_1.Router();
exports.driversRouters = driversRouters;
var driversRepository = new DriversRepository_1.DriversRepository();
driversRouters.post('/', function (request, response) {
    var _a = request.body, name = _a.name, age = _a.age, cpf = _a.cpf;
    var createDriverService = new CreateDriverService_1.CreateDriverService(driversRepository);
    createDriverService.execute({ name: name, age: age, cpf: cpf });
    return response.status(201).send();
});
driversRouters.get('/', function (request, response) {
    var listDriversService = new ListDriversService_1.ListDriversService(driversRepository);
    return response.json(listDriversService);
});
