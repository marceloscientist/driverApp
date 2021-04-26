"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.driversRouters = void 0;
var express_1 = require("express");
var DriversRepository_1 = require("../modules/driver/repositories/DriversRepository");
var ListDriversService_1 = require("../modules/driver/service/ListDriversService");
var useCases_1 = require("../modules/driver/useCases");
var driversRouters = express_1.Router();
exports.driversRouters = driversRouters;
var driversRepository = new DriversRepository_1.DriversRepository();
driversRouters.post('/', function (request, response) {
    useCases_1.createDriverController.handle(request, response);
});
driversRouters.get('/', function (request, response) {
    var listDriversService = new ListDriversService_1.ListDriversService(driversRepository);
    return response.json(listDriversService);
});
