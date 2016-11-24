import {solas} from './solas'
import appConfig from 'content/config/app-config'

export class AppFooter {
    constructor() {
        this.solas = solas();
        this.copyright = appConfig.APPTITLE;
    }
}
