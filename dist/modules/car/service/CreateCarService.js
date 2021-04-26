"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCarService = void 0;
var CreateCarService = /** @class */ (function () {
    function CreateCarService(carsRepository) {
        this.carsRepository = carsRepository;
    }
    CreateCarService.prototype.execute = function (_a) {
        var name = _a.name, brand = _a.brand;
        var carAlreadyExist = this.carsRepository.findByName(name);
        if (carAlreadyExist) {
            throw new Error("Car Already Exist");
        }
        this.carsRepository.create({ name: name, brand: brand });
    };
    return CreateCarService;
}());
exports.CreateCarService = CreateCarService;
