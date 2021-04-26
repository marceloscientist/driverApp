"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSpecificationService = void 0;
var ListSpecificationService = /** @class */ (function () {
    function ListSpecificationService(iSpecificationRepository) {
        this.iSpecificationRepository = iSpecificationRepository;
    }
    ListSpecificationService.prototype.execute = function () {
        return this.iSpecificationRepository.list();
    };
    return ListSpecificationService;
}());
exports.ListSpecificationService = ListSpecificationService;
