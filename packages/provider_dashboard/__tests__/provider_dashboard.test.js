'use strict';

const providerDashboard = require('..');
const assert = require('assert').strict;

assert.strictEqual(providerDashboard(), 'Hello from providerDashboard');
console.info('providerDashboard tests passed');
