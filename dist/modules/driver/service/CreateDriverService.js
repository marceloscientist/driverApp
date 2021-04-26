"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDriverService = void 0;
var CreateDriverService = /** @class */ (function () {
    function CreateDriverService(iDriverRepository) {
        this.iDriverRepository = iDriverRepository;
    }
    CreateDriverService.prototype.execute = function (_a) {
        var name = _a.name, age = _a.age, cpf = _a.cpf;
        var driverAlreadyExists = this.iDriverRepository.findByName(name);
        if (driverAlreadyExists) {
            throw new Error("Driver already Exists");
        }
        this.iDriverRepository.create({ name: name, age: age, cpf: cpf });
    };
    return CreateDriverService;
}());
exports.CreateDriverService = CreateDriverService;
