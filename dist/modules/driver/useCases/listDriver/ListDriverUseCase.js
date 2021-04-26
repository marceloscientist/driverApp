"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDriverUseCase = void 0;
var ListDriverUseCase = /** @class */ (function () {
    function ListDriverUseCase(iDriverRepository) {
        this.iDriverRepository = iDriverRepository;
    }
    ListDriverUseCase.prototype.execute = function () {
        return this.iDriverRepository.list();
    };
    return ListDriverUseCase;
}());
exports.ListDriverUseCase = ListDriverUseCase;
