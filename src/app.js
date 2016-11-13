export class App {
  configureRouter(config, router) {
    config.title = 'Escape Velocity';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'content/views/welcome/welcome',      nav: true, title: 'Welcome' },
      { route: 'lesson-plans',  name: 'lesson-plans', moduleId: 'content/views/lesson-plans/lesson-plans', nav: true, title: 'Lesson Plans' }
      { route: 'lesson-plans/:category/:id',  name: 'lesson-plans', moduleId: 'content/views/lesson-plans/lesson', nav: true, title: 'Lesson Plans' }
    ]);

    this.router = router;
  }
}
