import { Observer } from "../interface/observer";
import { Subject } from "../interface/subject";

export class EmailTopic implements Subject {
    message: string;
    private observers: Observer[] = [];

    register(observer: Observer): void {
        if (observer) {
            if (this.observers.indexOf(observer) === -1) {
                this.observers.push(observer);
            }
        }
        else {
            console.log('Invalid Observer');
        }
    }
    unregister(observer: Observer): void {
        this.observers.splice(this.observers.indexOf(observer));
    }
    notifyObservers(): void {
        this.observers.forEach(obs => obs.update());
    }
    getUpdate(observer: Observer): string {
        return this.message;
    }

    postMessage(msg: string) {
        console.log(msg + ' posted to topic');
        this.message = msg;
        this.notifyObservers();
    }
}