import { IceCream } from "../interface/icecream";
import { IceCreamDecorator } from "../interface/icecream-decorator";

export class Vanilla extends IceCreamDecorator {

    constructor(iceCream: IceCream) {
        super(iceCream);
    }

    cost(): number {
        return 0.5 + super.cost();
    }
}