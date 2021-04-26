"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDriverController = void 0;
var CreateDriverController = /** @class */ (function () {
    function CreateDriverController(createDriverUseCase) {
        this.createDriverUseCase = createDriverUseCase;
    }
    CreateDriverController.prototype.handle = function (request, response) {
        var _a = request.body, name = _a.name, age = _a.age, cpf = _a.cpf;
        this.createDriverUseCase.execute({ name: name, age: age, cpf: cpf });
        return response.status(201).send();
    };
    return CreateDriverController;
}());
exports.CreateDriverController = CreateDriverController;
