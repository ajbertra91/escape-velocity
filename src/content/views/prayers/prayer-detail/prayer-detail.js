import {serviceProxy} from 'serviceProxy';
import {getCurrentSlug} from 'content/utilities/helpers';

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
    this.getContent();
  }

  getContent() {
    return serviceProxy({url:`https://api.cosmicjs.com/v1/escape-velocity/object/${this.slug}?pretty=true`})
        .then(data => {
            console.log(data);
            this.prayer = data.object;
        })
        .catch(err => new Error(err))
  }
}