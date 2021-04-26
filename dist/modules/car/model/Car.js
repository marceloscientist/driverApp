"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var uuid_1 = require("uuid");
var Car = /** @class */ (function () {
    function Car() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    return Car;
}());
exports.Car = Car;
