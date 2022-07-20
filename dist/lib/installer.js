'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var components = require('./components.js');
var _package = require('./package.js');

const install = (app) => {
  components["default"].forEach((component) => {
    app.component(component.name, component);
  });
};

exports.version = _package.version;
exports.install = install;
//# sourceMappingURL=installer.js.map
