"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogFactory = void 0;
var logService_1 = require("./logService");
var logService;
var LogFactory = /** @class */ (function () {
    function LogFactory() {
    }
    LogFactory.getInstance = function () {
        if (!logService) {
            logService = new logService_1.LogService();
        }
        return logService;
    };
    return LogFactory;
}());
exports.LogFactory = LogFactory;
