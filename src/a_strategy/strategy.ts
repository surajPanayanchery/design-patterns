import { question } from "readline-sync";
import { CardPayment } from "./models/card-payment";
import { PaypalPayment } from "./models/paypal-payment";
import { ShoppingCart } from "./models/shopping-cart";
export abstract class Strategy {

    static shoppingCart = new ShoppingCart();
    static start() {
        const value: string = question("Enter the product you want to purchase? Samsung(s) / Apple (a) ");
        if (value === 's') {
            this.shoppingCart.addProduct("Samsung", 1000);
        } else if (value === 'a') {
            this.shoppingCart.addProduct("Apple", 5000);
        } else {
            console.log("Wrong Product");
            Strategy.start();
        }
        const addMore = question("Add more items ? y/n ");
        if (addMore === 'y') {
            Strategy.start();
        } else {
            Strategy.startPayment();
        }
    }

    static startPayment() {
        const shoppingCart = Strategy.getShoppingCart();
        let payment: string = question(`Total Amount : ${shoppingCart.getAmount()}, \n How do you want to pay : Paypal(p) or Card(c) `);
        if (payment === 'p') {
            shoppingCart.pay(new PaypalPayment());
        } else if (payment === 'c') {
            shoppingCart.pay(new CardPayment());
        } else {
            console.log("Wrong Payment Type");
            Strategy.startPayment();
        }
    }

    static getShoppingCart() {
        return Strategy.shoppingCart;
    }

}