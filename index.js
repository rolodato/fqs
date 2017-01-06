#! /usr/bin/env node

const fqs = require('./lib');
var input = '';
if (process.stdin.isTTY) {
    pretty(process.argv[2] || '');
} else {
    process.stdin.setEncoding('utf-8');
    process.stdin.on('readable', () => {
        var chunk = process.stdin.read();
        if (chunk !== null) {
            input += chunk;
        }
    });
    process.stdin.on('end', () => {
        pretty(input);
    });
}

function pretty (input) {
    const result = fqs(input);
    if (result) {
        console.log(result);
        process.exit(0);
    } else {
        process.exit(1);
    }
}
