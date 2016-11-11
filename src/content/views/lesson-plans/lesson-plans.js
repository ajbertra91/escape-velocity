//import {computedFrom} from 'aurelia-framework';

export class LessonPlans {
  

  canDeactivate() {
    if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }
}