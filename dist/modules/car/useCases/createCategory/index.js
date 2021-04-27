"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategoryController = void 0;
var CategoryRepository_1 = require("../../repositories/Implementations/CategoryRepository");
var CreateCategoryController_1 = require("./CreateCategoryController");
var CreateCategoryUseCase_1 = require("./CreateCategoryUseCase");
var categoryRepository = CategoryRepository_1.CategoryRepository.getInstance(); // Singleton
var createCategoryUseCase = new CreateCategoryUseCase_1.CreateCategoryUseCase(categoryRepository);
var createCategoryController = new CreateCategoryController_1.CreateCategoryController(createCategoryUseCase);
exports.createCategoryController = createCategoryController;
