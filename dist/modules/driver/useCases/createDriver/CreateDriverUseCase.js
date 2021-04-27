"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDriverUseCase = void 0;
var CreateDriverUseCase = /** @class */ (function () {
    function CreateDriverUseCase(driverRepository) {
        this.driverRepository = driverRepository;
    }
    CreateDriverUseCase.prototype.execute = function (_a) {
        var name = _a.name, age = _a.age, cpf = _a.cpf;
        var driverAlreadyExists = this.driverRepository.findByName(name);
        if (driverAlreadyExists) {
            throw new Error("Driver already Exists");
        }
        this.driverRepository.create({ name: name, age: age, cpf: cpf });
    };
    return CreateDriverUseCase;
}());
exports.CreateDriverUseCase = CreateDriverUseCase;
