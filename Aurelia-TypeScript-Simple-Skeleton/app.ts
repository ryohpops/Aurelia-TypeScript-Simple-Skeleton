import {Router, RouterConfiguration} from "aurelia-router";

export class App {
    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = "Aurelia";
        config.map([
            { route: ["", "welcome"], name: "welcome", moduleId: "app/welcome", nav: true, title: "Welcome" }
        ]);
    }
}
