'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var components = require('./components.js');
var index = require('./constants/index.js');

const install = (app) => {
  components["default"].forEach((component) => {
    app.component(component.name, component);
  });
};

exports.version = index.version;
exports.install = install;
//# sourceMappingURL=installer.js.map
