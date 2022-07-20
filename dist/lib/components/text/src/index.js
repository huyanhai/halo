'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../../constants/index.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');

const _sfc_main = vue.defineComponent({
  name: index.prefix + "Text"
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", null, [
    vue.renderSlot(_ctx.$slots, "default")
  ]);
}
var Text = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/Users/yhh/Documents/study/admin-cl/packages/components/text/src/index.vue"]]);

exports["default"] = Text;
//# sourceMappingURL=index.js.map
