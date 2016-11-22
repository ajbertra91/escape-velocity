import {serviceProxy} from 'serviceProxy';

export class Prayers {
  constructor() {
    this.page = {};
    this.prayers = null;
  }
  activate(params, navConfig) {
    this.page.title = navConfig.name;
    this.getPrayers();
  }

  getPrayers() {
    return serviceProxy({url:`https://api.cosmicjs.com/v1/escape-velocity/object-type/${this.page.title.toLowerCase()}?pretty=true`})
        .then(data => {
            console.log(data);
            this.prayers = data.objects;
        })
        .catch(err => new Error(err))
  }
}