import { ILogObj, Logger } from 'tslog'

export class LogService {
  public log: Logger<ILogObj> = new Logger({
    prettyLogTimeZone: 'local',
    prettyLogTemplate: '{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}} {{logLevelName}} '
  })
}
