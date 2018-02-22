describe('operate', function() {
  const { JSDOM } = require('jsdom');
  const jsdom = new JSDOM(`<!doctype html><html><body></body></html>`);
  const { window } = jsdom;
  function copyProps(src, target) {
    const props = Object.getOwnPropertyNames(src)
      .filter(prop => typeof target[prop] === 'undefined')
      .reduce((result, prop) => ({
        ...result,
        [prop]: Object.getOwnPropertyDescriptor(src, prop),
      }), {});
    Object.defineProperties(target, props);
  }

  global.window = window;
  global.document = window.document;
  global.navigator = {
    userAgent: 'node.js',
  };
  copyProps(window, global);

  $ = require('jquery');
  global.$ = $;
  var Cal = require('../cal');
  const cal = new Cal();

  var input = [[1, 1, '+'], [1, 5, '*'], [7, 2, '-'], [16, 4, '/']];
  var output = [2, 5, 5, 4];
  it('should be true', function() {
    for(var i = 0; i < input.length; i++) {
      expect(cal.operate(input[i][0], input[i][1], input[i][2])).toEqual(output[i]);
    }
  });

});