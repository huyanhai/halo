'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var components = require('./components2.js');
var index = require('./constants/index2.js');

const install = (app) => {
  components["default"].forEach((component) => {
    app.component(component.name, component);
  });
};

exports.version = index.version;
exports.install = install;
//# sourceMappingURL=installer2.js.map
