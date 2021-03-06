'use strict';

/**
 * module dependencies
 */

const curly = require('../');
const esformatter = require('esformatter');
esformatter.register(curly);
const fs = require('fs');

describe('It works', function() {
  it('import-declaration', function*() {
    const src = fs.readFileSync(__dirname + '/fixtures/import-in.js', 'utf8');
    const out = esformatter.format(src);
    out.should.equal(src);
  });

  it('inline-object-declaration', function*() {
    const src = fs.readFileSync(__dirname + '/fixtures/object-in.js', 'utf8');
    const out = esformatter.format(src);
    out.should.equal(src);
  });
});