"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDriversService = void 0;
var ListDriversService = /** @class */ (function () {
    function ListDriversService(iDriverRepository) {
        this.iDriverRepository = iDriverRepository;
    }
    ListDriversService.prototype.execute = function () {
        return this.iDriverRepository.list();
    };
    return ListDriversService;
}());
exports.ListDriversService = ListDriversService;
