export class Welcome {
    heading: string = "Welcome to the Aurelia Simple Skeleton!";
    firstName: string = "John";
    lastName: string = "Doe";

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    welcome() {
        alert(`Welcome, ${this.fullName}!`);
    }
}
