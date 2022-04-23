const readlineSync = require('readline-sync');
const strategy = require('./dist/a_strategy/strategy');


function start() {

    const ans = readlineSync.question('Which Design pattern : 1.Strategy ');

    if (ans === '1') {
        strategy.Strategy.start();
    } else {
        console.log('Invalid design pattern');
        start();
    }
}

start();