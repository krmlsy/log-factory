import { Logger } from 'tslog';
var LogService = /** @class */ (function () {
    function LogService() {
        this.log = new Logger({
            prettyLogTimeZone: 'local',
            prettyLogTemplate: '{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}} {{logLevelName}} '
        });
    }
    return LogService;
}());
export { LogService };
