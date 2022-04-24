import { Observer } from "./observer";

export interface Subject {
    register(observer: Observer): void;
    unregister(observer: Observer): void;
    notifyObservers(): void;

    getUpdate(observer: Observer): string;
}