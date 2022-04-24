import { IceCream } from "../interface/icecream";
import { IceCreamDecorator } from "../interface/icecream-decorator";

export class Chocolate extends IceCreamDecorator {

    constructor(iceCream: IceCream) {
        super(iceCream);
    }

    cost(): number {
        return 1 + super.cost();
    }
}