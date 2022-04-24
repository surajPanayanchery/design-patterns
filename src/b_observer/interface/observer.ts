import { Subject } from "./subject";

export interface Observer {
    update(): void;
    setSubject(subject: Subject): void
}