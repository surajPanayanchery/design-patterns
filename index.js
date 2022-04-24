const readlineSync = require('readline-sync');
const strategy = require('./dist/a_strategy/strategy');
const observer = require('./dist/b_observer/observer');
const decorator = require('./dist/c_decorator/decorator');


function start() {

    const ans = readlineSync.question('Which Design pattern : \n 1.Strategy \n 2.Observer \n 3.Decorator\n');

    if (ans === '1') {
        strategy.Strategy.start();
    } else if (ans === '2') {
        observer.MainObserver.start();
    }
    else if (ans === '3') {
        decorator.Decorator.start();
    } else {
        console.log('Invalid design pattern');
        start();
    }
}

start();