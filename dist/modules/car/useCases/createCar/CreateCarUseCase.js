"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCarUseCase = void 0;
var CreateCarUseCase = /** @class */ (function () {
    function CreateCarUseCase(carsRepository) {
        this.carsRepository = carsRepository;
    }
    CreateCarUseCase.prototype.execute = function (_a) {
        var name = _a.name, brand = _a.brand;
        var carAlreadyExist = this.carsRepository.findByName(name);
        if (carAlreadyExist) {
            throw new Error("Car Already Exist");
        }
        this.carsRepository.create({ name: name, brand: brand });
    };
    return CreateCarUseCase;
}());
exports.CreateCarUseCase = CreateCarUseCase;
