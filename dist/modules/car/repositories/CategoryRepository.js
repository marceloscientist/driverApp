"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRepository = void 0;
var Category_1 = require("../model/Category");
var CategoryRepository = /** @class */ (function () {
    function CategoryRepository() {
        this.categories = [];
    }
    CategoryRepository.getInstance = function () {
        if (!CategoryRepository.INSTANCE) {
            CategoryRepository.INSTANCE = new CategoryRepository();
        }
        return CategoryRepository.INSTANCE;
    };
    CategoryRepository.prototype.create = function (_a) {
        var name = _a.name, description = _a.description;
        var category = new Category_1.Category();
        Object.assign(category, {
            name: name,
            description: description,
        });
        this.categories.push(category);
    };
    CategoryRepository.prototype.list = function () {
        return this.categories;
    };
    CategoryRepository.prototype.findByName = function (name) {
        var category = this.categories.find(function (category) { return category.name === name; });
        return category;
    };
    return CategoryRepository;
}());
exports.CategoryRepository = CategoryRepository;
