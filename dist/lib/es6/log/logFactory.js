import { LogService } from "./logService";
var logService;
var LogFactory = /** @class */ (function () {
    function LogFactory() {
    }
    LogFactory.getInstance = function () {
        if (!logService) {
            logService = new LogService();
        }
        return logService;
    };
    return LogFactory;
}());
export { LogFactory };
