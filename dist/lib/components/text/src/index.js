'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../../constants/index.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');

const __default__ = {
  name: `${index.prefix}Text`
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", null, [
        vue.renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
var Text = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/yhh/Documents/study/halo/packages/components/text/src/index.vue"]]);

exports["default"] = Text;
//# sourceMappingURL=index.js.map
