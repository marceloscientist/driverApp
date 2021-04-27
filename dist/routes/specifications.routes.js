"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specificationsRouters = void 0;
var express_1 = require("express");
var createSpecification_1 = require("../modules/car/useCases/createSpecification");
var ListSpecification_1 = require("../modules/car/useCases/ListSpecification");
var specificationsRouters = express_1.Router();
exports.specificationsRouters = specificationsRouters;
specificationsRouters.post('/', function (request, response) {
    createSpecification_1.createSpecificationController.handle(request, response);
});
specificationsRouters.get('/', function (request, response) {
    var all = ListSpecification_1.listSpecificationController.handle(request, response);
    return response.json(all);
});
