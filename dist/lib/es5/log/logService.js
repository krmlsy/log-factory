"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogService = void 0;
var tslog_1 = require("tslog");
var LogService = /** @class */ (function () {
    function LogService() {
        this.log = new tslog_1.Logger({
            prettyLogTimeZone: 'local',
            prettyLogTemplate: '{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}} {{logLevelName}} '
        });
    }
    return LogService;
}());
exports.LogService = LogService;
