// import {serviceProxy} from 'serviceProxy';
import {getCurrentSlug} from 'content/utilities/helpers';
import {prayersConfig} from 'content/config/prayersConfigArray';

export class Prayers {
    constructor() {
        this.page = {};
        this.prayer = null;
        this.slug = getCurrentSlug();
    }
    activate(params, navConfig) {
        this.page.title = navConfig.name;
    }

    bind() {
        this.prayer = this.getContent().filter(prayer => prayer.slug === this.slug)[0];
    }

    getContent() {
        return prayersConfig();
        // return serviceProxy({url:`https://api.cosmicjs.com/v1/escape-velocity/object/${this.slug}?pretty=true`})
        //     .then(data => {
        //         console.log(data);
        //         this.prayer = data.object;
        //     })
        //     .catch(err => new Error(err))
    }
}