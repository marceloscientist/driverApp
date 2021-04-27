"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRouters = void 0;
var express_1 = require("express");
var createCategory_1 = require("../modules/car/useCases/createCategory");
var ListCategory_1 = require("../modules/car/useCases/ListCategory");
var categoriesRouters = express_1.Router();
exports.categoriesRouters = categoriesRouters;
categoriesRouters.post('/', function (request, response) {
    createCategory_1.createCategoryController.handle(request, response);
});
categoriesRouters.get('/', function (request, response) {
    ListCategory_1.listCategoryController.handle(request, response);
});
