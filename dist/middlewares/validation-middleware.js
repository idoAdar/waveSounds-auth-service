"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationMiddleware = void 0;
var express_validator_1 = require("express-validator");
var request_validation_error_1 = require("../errors/request-validation-error");
var validationMiddleware = function (req, _res, next) {
    var errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        throw new request_validation_error_1.RequestValidationError(errors.array());
    }
    next();
};
exports.validationMiddleware = validationMiddleware;
