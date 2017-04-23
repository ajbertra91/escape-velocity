// import {serviceProxy} from 'serviceProxy';
// import {getCurrentSlug} from 'content/utilities/helpers';
import {prayersConfig} from 'content/config/prayersConfigArray';

export class Prayers {
  constructor() {
    this.page = {};
    this.prayers = null;
  }
  activate(params, navConfig) {
    this.page.title = navConfig.name;
    this.prayers = this.getContent();
    // console.log('getCurrentSlug: ', getCurrentSlug());
  }

  getContent() {
    return prayersConfig();
    // return serviceProxy({url:`https://api.cosmicjs.com/v1/escape-velocity/object-type/${this.page.title.toLowerCase()}?pretty=true`})
    //     .then(data => {
    //         console.log(data);
    //         this.prayers = data.objects;
    //     })
    //     .catch(err => new Error(err))
  }
}