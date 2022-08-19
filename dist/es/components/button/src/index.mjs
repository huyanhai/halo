import { defineComponent, openBlock, createElementBlock, renderSlot } from 'vue';
import { prefix } from '../../../constants/index.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';

const _hoisted_1 = { class: "ha-button" };
const __default__ = {
  name: `${prefix}Button`
};
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createElementBlock("button", _hoisted_1, [
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
var Button = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/yhh/Documents/study/halo/packages/components/button/src/index.vue"]]);

export { Button as default };
//# sourceMappingURL=index.mjs.map
