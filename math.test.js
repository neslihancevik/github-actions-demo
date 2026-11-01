const { test } = require('node:test');
const assert = require('node:assert/strict');
const { double } = require('./math');

test('Sayıyı ikiyle çarpar', () => {
  assert.equal(double(5), 10);
});
