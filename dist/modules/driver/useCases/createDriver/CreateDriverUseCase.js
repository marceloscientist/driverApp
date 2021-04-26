"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDriverUseCase = void 0;
var CreateDriverUseCase = /** @class */ (function () {
    function CreateDriverUseCase(iDriverRepository) {
        this.iDriverRepository = iDriverRepository;
    }
    CreateDriverUseCase.prototype.execute = function (_a) {
        var name = _a.name, age = _a.age, cpf = _a.cpf;
        var driverAlreadyExists = this.iDriverRepository.findByName(name);
        if (driverAlreadyExists) {
            throw new Error("Driver already Exists");
        }
        this.iDriverRepository.create({ name: name, age: age, cpf: cpf });
    };
    return CreateDriverUseCase;
}());
exports.CreateDriverUseCase = CreateDriverUseCase;
