"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specificationsRouters = void 0;
var express_1 = require("express");
var SpecificationRepository_1 = require("../modules/car/repositories/SpecificationRepository");
var ListSpecificationService_1 = require("../modules/car/service/ListSpecificationService");
var createSpecification_1 = require("../modules/car/useCases/createSpecification");
var specificationsRouters = express_1.Router();
exports.specificationsRouters = specificationsRouters;
var specificationRepository = new SpecificationRepository_1.SpecificationRepository();
specificationsRouters.post('/', function (request, response) {
    createSpecification_1.createSpecificationController.handle(request, response);
});
specificationsRouters.get('/', function (request, response) {
    var listSpecificationService = new ListSpecificationService_1.ListSpecificationService(specificationRepository);
    return response.json(listSpecificationService.execute());
});
