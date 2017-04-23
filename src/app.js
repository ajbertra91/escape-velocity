export class App {
  configureRouter(config, router) {
    config.title = 'Escape Velocity';
    config.map([
      { route: ['', 'welcome'],         name: 'welcome',           moduleId: 'content/views/welcome/welcome',                           nav: true, title: 'Welcome' }
      ,{ route: 'lesson-plans',         name: 'lesson-plans',      moduleId: 'content/views/lesson-plans/lesson-plans',                 nav: true, title: 'Lesson Plans' }
      ,{ route: 'lesson-plans/:slug',   name: 'lesson',            moduleId: 'content/views/lesson-plans/lesson-detail/lesson-detail',            title: 'Lesson Plan Detail' }
      ,{ route: 'prayers',              name: 'prayers',           moduleId: 'content/views/prayers/prayers',                           nav: true, title: 'Prayers' }
      ,{ route: 'prayers/:slug',        name: 'prayer-detail',     moduleId: 'content/views/prayers/prayer-detail/prayer-detail',                title: 'Prayer Detail' }
      ,{ route: 'worldview-info',       name: 'worldview-info',    moduleId: 'content/views/worldview-info/worldview-info',             nav: true, title: 'Worldview Info' }
    ]);

    this.router = router;
  }
}
