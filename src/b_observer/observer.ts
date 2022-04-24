import { question } from "readline-sync";
import { EmailSubscriber } from "./model/email-subscriber";
import { EmailTopic } from "./model/email-topic";

export abstract class MainObserver {
    static start() {
        let emailTopic = new EmailTopic();
        const value: string = question("How Many Observers? ");
        for (let i = 0; i < +value; i++) {
            let observer = new EmailSubscriber(`${i+1} Consumer`);
            observer.setSubject(emailTopic);
            emailTopic.register(observer);
        }
        const msg: string = question("Message to notify: \n");
        emailTopic.postMessage(msg);        
    }
}