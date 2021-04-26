"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Driver = void 0;
var uuid_1 = require("uuid");
var Driver = /** @class */ (function () {
    function Driver() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    return Driver;
}());
exports.Driver = Driver;
