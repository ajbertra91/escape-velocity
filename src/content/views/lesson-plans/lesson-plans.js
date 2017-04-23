import {allLessonPlans} from 'content/config/lessonPlansConfig';

export class LessonPlans {
    constructor() {
        this.lessons = [];
    }
    bind() {
        this.lessons = this.getContent();
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