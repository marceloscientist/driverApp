"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cars_routes_1 = require("./routes/cars.routes");
var app = express_1.default();
app.use(express_1.default.json());
app.use('/cars', cars_routes_1.carsRouters);
app.listen(3333, function () {
    console.log('listening to you!');
});
