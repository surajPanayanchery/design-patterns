import { Observer } from "../interface/observer";
import { Subject } from "../interface/subject";

export class EmailSubscriber implements Observer {

    name: string;
    topic: Subject;

    setSubject(subject: Subject) {
        this.topic = subject;
    }

    constructor(name: string) {
        this.name = name;
    }

    update(): void {
        let msg = this.topic.getUpdate(this);
        if (!msg) {
            console.log("No new Message on this topic");
        } else {
            console.log(`${this.name} retrieving message: ${msg}`);
        }
    }



}