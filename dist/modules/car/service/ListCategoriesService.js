"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCategoriesService = void 0;
var ListCategoriesService = /** @class */ (function () {
    function ListCategoriesService(iCategoryRepository) {
        this.iCategoryRepository = iCategoryRepository;
    }
    ListCategoriesService.prototype.execute = function () {
        return this.iCategoryRepository.list();
    };
    return ListCategoriesService;
}());
exports.ListCategoriesService = ListCategoriesService;
