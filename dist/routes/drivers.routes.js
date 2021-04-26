"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.driversRouters = void 0;
var express_1 = require("express");
var createDriver_1 = require("../modules/driver/useCases/createDriver");
var listDriver_1 = require("../modules/driver/useCases/listDriver");
var driversRouters = express_1.Router();
exports.driversRouters = driversRouters;
driversRouters.post('/', function (request, response) {
    createDriver_1.createDriverController.handle(request, response);
});
driversRouters.get('/', function (request, response) {
    listDriver_1.listDriverController.handle(request, response);
});
