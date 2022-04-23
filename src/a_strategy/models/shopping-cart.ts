import { Payment } from "../base/Payment";
import { IProduct } from "./product";

export class ShoppingCart {

    products: Array<IProduct> = [];

    addProduct(name: string, price: number) {
        this.products.push({ name: name, price: price })
    }
    removeProduct(productName: string) {
        this.products.splice(this.products.findIndex((prd: IProduct) => prd.name === productName));
    }

    pay(payment: Payment) {
        payment.pay(this.getAmount())
    }

    getAmount(): number {
        return this.products.reduce((agg, prd) => agg + prd.price, 0)
    }

}