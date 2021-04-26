"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryController = void 0;
var CreateCategoryController = /** @class */ (function () {
    /**
     *
     */
    function CreateCategoryController(createCategoryUseCase) {
        this.createCategoryUseCase = createCategoryUseCase;
    }
    CreateCategoryController.prototype.handle = function (request, response) {
        var _a = request.body, name = _a.name, description = _a.description;
        this.createCategoryUseCase.execute({ name: name, description: description });
        return response.status(201).send();
    };
    return CreateCategoryController;
}());
exports.CreateCategoryController = CreateCategoryController;
