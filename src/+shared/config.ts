import {ENVDEV} from "../+shared/enviroment/env.dev";
import {ENVPROD} from "../+shared/enviroment/env.live"

export class AppConfig {
  public static get ENVIRONMENT(): any {
    let environment = "DEVELOPMENT";
    return environment == "PRODUCTION" ? ENVPROD : ENVDEV
  }

  public static get API_BASE(): any {
    return AppConfig.ENVIRONMENT.API_BASE;
  }

  public static get REST_API(): any {
    return this.API_BASE ;
  }

  public static get ONESIGNALAPP_ID(): any{
    return AppConfig.ENVIRONMENT.oneSignalAppId;
  }

  public static get ONESIGNALAPP_SENDER_ID(): any{
    return AppConfig.ENVIRONMENT.sender_id;
  }
}
