'use strict';

const publicShop = require('..');
const assert = require('assert').strict;

assert.strictEqual(publicShop(), 'Hello from publicShop');
console.info('publicShop tests passed');
