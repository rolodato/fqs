#! /usr/bin/env node

const fqs = require('./lib');
const input = process.argv.slice(2)[0] || '';
const result = fqs(input.toString());
if (result) {
    console.log(result);
    process.exit(0);
} else {
    process.exit(1);
}
