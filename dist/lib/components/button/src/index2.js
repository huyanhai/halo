'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../../constants/index2.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');

const _sfc_main = vue.defineComponent({
  name: index.clPrefixName + "Button"
});
const _hoisted_1 = { class: "cl-button" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("button", _hoisted_1, [
    vue.renderSlot(_ctx.$slots, "default")
  ]);
}
var Button = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/Users/yhh/Documents/study/admin-cl/packages/components/button/src/index.vue"]]);

exports["default"] = Button;
//# sourceMappingURL=index2.js.map
