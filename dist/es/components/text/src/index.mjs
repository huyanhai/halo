import { defineComponent, openBlock, createElementBlock, renderSlot } from 'vue';
import { prefix } from '../../../constants/index.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';

const __default__ = {
  name: `${prefix}Text`
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
var Text = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/yhh/Documents/study/admin-cl/packages/components/text/src/index.vue"]]);

export { Text as default };
//# sourceMappingURL=index.mjs.map
