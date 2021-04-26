"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecificationRepository = void 0;
var Specification_1 = require("../model/Specification");
var SpecificationRepository = /** @class */ (function () {
    function SpecificationRepository() {
        this.specifications = [];
    }
    SpecificationRepository.prototype.create = function (_a) {
        var name = _a.name, description = _a.description;
        var specification = new Specification_1.Specification();
        Object.assign(specification, {
            name: name,
            description: description,
        });
        this.specifications.push(specification);
    };
    SpecificationRepository.prototype.list = function () {
        return this.specifications;
    };
    SpecificationRepository.prototype.findByName = function (name) {
        var specification = this.specifications.find(function (specification) { return specification.name === name; });
        return specification;
    };
    return SpecificationRepository;
}());
exports.SpecificationRepository = SpecificationRepository;
