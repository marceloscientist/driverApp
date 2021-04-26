"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSpecificationController = void 0;
var CreateSpecificationController = /** @class */ (function () {
    /**
     *
     */
    function CreateSpecificationController(createSpecificationUseCase) {
        this.createSpecificationUseCase = createSpecificationUseCase;
    }
    CreateSpecificationController.prototype.handle = function (request, response) {
        var _a = request.body, name = _a.name, description = _a.description;
        this.createSpecificationUseCase.execute({ name: name, description: description });
        return response.status(201).send();
    };
    return CreateSpecificationController;
}());
exports.CreateSpecificationController = CreateSpecificationController;
