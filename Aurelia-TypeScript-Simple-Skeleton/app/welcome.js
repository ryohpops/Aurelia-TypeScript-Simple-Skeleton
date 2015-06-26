export class Welcome {
    constructor() {
        this.heading = "Welcome to the Aurelia Simple Skeleton!";
        this.firstName = "John";
        this.lastName = "Doe";
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    welcome() {
        alert(`Welcome, ${this.fullName}!`);
    }
}
//# sourceMappingURL=welcome.js.map