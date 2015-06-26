export class App {
    configureRouter(config: any, router: any) {
        config.title = "Aurelia";
        config.map([
            { route: ["", "welcome"], name: "welcome", moduleId: "app/welcome", nav: true, title: "Welcome" }
        ]);
    }
}
