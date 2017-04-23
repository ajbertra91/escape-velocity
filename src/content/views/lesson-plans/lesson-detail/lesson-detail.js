// import {serviceProxy} from 'serviceProxy';
import {getCurrentSlug} from 'content/utilities/helpers';
import {allLessonPlans} from 'content/config/lessonPlansConfig';

export class Lesson {
    constructor() {
        this.page = {};
        this.lesson;
        this.slug = getCurrentSlug();
    }
    activate(params, navConfig) {
        this.page.title = navConfig.name;
    }
    bind() {
        this.lesson = this.getContent().filter(lesson => lesson.slug === this.slug)[0];
    }

    getContent() {
        return allLessonPlans();
        // return serviceProxy({url:`https://api.cosmicjs.com/v1/escape-velocity/object/${this.slug}?pretty=true`})
        //     .then(data => {
        //         console.log(data);
        //         this.prayer = data.object;
        //     })
        //     .catch(err => new Error(err))
    }
}