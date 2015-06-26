export class App {
    configureRouter(config, router) {
        config.title = "Aurelia";
        config.map([
            { route: ["", "welcome"], name: "welcome", moduleId: "app/welcome", nav: true, title: "Welcome" }
        ]);
    }
}
//# sourceMappingURL=app.js.map