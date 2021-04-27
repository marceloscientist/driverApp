"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDriverController = void 0;
var ListDriverController = /** @class */ (function () {
    function ListDriverController(listDriverUseCase) {
        this.listDriverUseCase = listDriverUseCase;
    }
    ListDriverController.prototype.handle = function (request, response) {
        return response.json(this.listDriverUseCase.execute());
    };
    return ListDriverController;
}());
exports.ListDriverController = ListDriverController;
