import {Student} from "./student";

export class Mentor {
    subscription: string;
    student: Student;
    constructor() {
        this.subscription = '';
        this.student = new Student();
    }
}
