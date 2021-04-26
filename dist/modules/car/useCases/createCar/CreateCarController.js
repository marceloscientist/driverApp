"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCarController = void 0;
var CreateCarController = /** @class */ (function () {
    function CreateCarController(createCarUseCase) {
        this.createCarUseCase = createCarUseCase;
    }
    CreateCarController.prototype.handle = function (request, response) {
        var _a = request.body, name = _a.name, brand = _a.brand;
        this.createCarUseCase.execute({ name: name, brand: brand });
        return response.status(201).send();
    };
    return CreateCarController;
}());
exports.CreateCarController = CreateCarController;
