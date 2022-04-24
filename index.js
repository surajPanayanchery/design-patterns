const readlineSync = require('readline-sync');
const strategy = require('./dist/a_strategy/strategy');
const observer = require('./dist/b_observer/observer');


function start() {

    const ans = readlineSync.question('Which Design pattern : \n 1.Strategy \n 2.Observer \n');

    if (ans === '1') {
        strategy.Strategy.start();
    } else if (ans === '2') {
        observer.MainObserver.start();
    } else {
        console.log('Invalid design pattern');
        start();
    }
}

start();