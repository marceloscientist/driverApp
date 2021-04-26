"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSpecificationUseCase = void 0;
var CreateSpecificationUseCase = /** @class */ (function () {
    function CreateSpecificationUseCase(iSpecificationRepository) {
        this.iSpecificationRepository = iSpecificationRepository;
    }
    CreateSpecificationUseCase.prototype.execute = function (_a) {
        var name = _a.name, description = _a.description;
        var specification = this.iSpecificationRepository.findByName(name);
        if (specification) {
            throw new Error("Specification Already Exist");
        }
        this.iSpecificationRepository.create({ name: name, description: description });
    };
    return CreateSpecificationUseCase;
}());
exports.CreateSpecificationUseCase = CreateSpecificationUseCase;
