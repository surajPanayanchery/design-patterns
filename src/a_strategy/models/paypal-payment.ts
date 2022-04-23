import { Payment } from "../base/Payment";

export class PaypalPayment extends Payment {
    public pay(amount: number) {
        console.log(amount + ' amount paid through Paypal !!!');
    }
}