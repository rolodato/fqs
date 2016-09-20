#! /usr/bin/env node

const fqs = require('./lib');
const minimist = require('minimist');
const input = minimist(process.argv.slice(2))._[0] || '';
const result = fqs(input.toString());
if (result) {
    console.log(result);
    process.exit(0);
} else {
    process.exit(1);
}
