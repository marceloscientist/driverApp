"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryUseCase = void 0;
var CreateCategoryUseCase = /** @class */ (function () {
    function CreateCategoryUseCase(iCategoryRepository) {
        this.iCategoryRepository = iCategoryRepository;
    }
    CreateCategoryUseCase.prototype.execute = function (_a) {
        var name = _a.name, description = _a.description;
        var category = this.iCategoryRepository.findByName(name);
        if (category) {
            throw new Error("Category Already Exist");
        }
        this.iCategoryRepository.create({ name: name, description: description });
    };
    return CreateCategoryUseCase;
}());
exports.CreateCategoryUseCase = CreateCategoryUseCase;
