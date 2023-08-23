import { LogService } from "./logService"
let logService : LogService

export class LogFactory {
  public static getInstance () {
    if (!logService) {
      logService = new LogService()
    }
    return logService
  }
}
