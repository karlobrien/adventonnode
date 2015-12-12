console.log("Advent of Code on Node");

import {createServer} from 'http';

const headers = Object.freeze({ 'Content-Type': 'text/plain'});

const server = createServer((req, res) => {
    res.writeHead(200, headers);

    let message = `ES6 - AAAAAgain!\n`;
    res.end(message);
});

let test = [1,2,3].map(x => x * 2);
console.log(test);

import * as module from '../src/puzzle';






server.listen(8888);