"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCarsService = void 0;
var ListCarsService = /** @class */ (function () {
    function ListCarsService(iCarRepository) {
        this.iCarRepository = iCarRepository;
    }
    ListCarsService.prototype.execute = function () {
        return this.iCarRepository.list();
    };
    return ListCarsService;
}());
exports.ListCarsService = ListCarsService;
