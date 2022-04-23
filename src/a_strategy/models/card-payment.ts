import { Payment } from "../base/Payment";

export class CardPayment extends Payment {
    public pay(amount: number): void {
        console.log(amount + " paid using Card !!!");
    }
}