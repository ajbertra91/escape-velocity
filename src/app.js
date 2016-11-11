export class App {
  configureRouter(config, router) {
    config.title = 'Escape Velocity';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'lesson-plans',  name: 'lesson-plans', moduleId: 'lesson-plans', nav: true, title: 'Lesson Plans' }
    ]);

    this.router = router;
  }
}
