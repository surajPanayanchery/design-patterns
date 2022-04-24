import { IceCream } from "../interface/icecream";
import { IceCreamDecorator } from "../interface/icecream-decorator";

export class Pista extends IceCreamDecorator {
    constructor(iceCream: IceCream) {
        super(iceCream);
    }
    cost(): number {
        return 2 + super.cost();
    }
}