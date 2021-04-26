"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRouters = void 0;
var express_1 = require("express");
var CategoryRepository_1 = require("../modules/car/repositories/CategoryRepository");
var createCategory_1 = require("../modules/car/useCases/createCategory");
var ListCategoriesService_1 = require("../modules/car/service/ListCategoriesService");
var categoriesRouters = express_1.Router();
exports.categoriesRouters = categoriesRouters;
var categoryRepository = new CategoryRepository_1.CategoryRepository();
categoriesRouters.post('/', function (request, response) {
    return createCategory_1.createCategoryController.handle(request, response);
});
categoriesRouters.get('/', function (request, response) {
    var listCategoriesService = new ListCategoriesService_1.ListCategoriesService(categoryRepository);
    return response.json(listCategoriesService.execute());
});
