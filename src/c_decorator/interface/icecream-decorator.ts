import { IceCream } from "./icecream";

export class IceCreamDecorator implements IceCream {

    private icecream: IceCream;

    constructor(iceCream: IceCream) {
        this.icecream = iceCream;
    }
    cost() {
        return this.icecream.cost() || 0;
    }

}