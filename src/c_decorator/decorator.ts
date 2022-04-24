import { question } from "readline-sync";
import { BasicIcecream } from "./models/basicicecream";
import { Chocolate } from "./models/chocolate";
import { Pista } from "./models/pista";
import { Vanilla } from "./models/vanilla";


export abstract class Decorator {
    static iceCream = new BasicIcecream();

    static start() {

        const value = question('What icecream do you want?\n 1. Vanilla Ice Cream\n 2.Chocolate Ice Cream\n 3. Pista Ice Cream\n');
        if (value === '1') {
            Decorator.iceCream = new Vanilla(Decorator.iceCream);
        } else if (value === '2') {
            Decorator.iceCream = new Chocolate(Decorator.iceCream);
        }
        else if (value === '3') {
            Decorator.iceCream = new Pista(Decorator.iceCream);
        }
        else {
            console.log('Please choose from menu');
        }
        console.log(`Your total Cost is : ${Decorator.iceCream.cost()}`);
        if (question('Do you want to add more? (y/n) \n') === 'y') {
            Decorator.start();
        }
        else {
            console.log(`Your total Cost is : ${Decorator.iceCream.cost()}`);
            console.log(`Thanks For Visiting : ${Decorator.iceCream.cost()}`);
        }

    }

}