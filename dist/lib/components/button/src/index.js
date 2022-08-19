'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../../constants/index.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');

const _hoisted_1 = { class: "ha-button" };
const __default__ = {
  name: `${index.prefix}Button`
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: {
    type: {
      type: String,
      default: "default"
    },
    success: {
      type: Boolean,
      default: false
    },
    warning: {
      type: Boolean,
      default: false
    },
    info: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", _hoisted_1, [
        vue.renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
var Button = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/yhh/Documents/study/halo/packages/components/button/src/index.vue"]]);

exports["default"] = Button;
//# sourceMappingURL=index.js.map
