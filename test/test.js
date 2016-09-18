const assert = require('assert');
const fqs = require('../lib');

const expected = [
    'https://example.com/foo',
    '?c=2',
    'd=3',
    '#a=0',
    'b=1'
].join('\n');

assert.equal(fqs('https://example.com/foo?d=3&c=2#b=1&a=0'), expected);
