import { defineComponent, openBlock, createElementBlock, renderSlot } from 'vue';
import { clPrefixName } from '../../../constants/index2.js';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.js';

const _sfc_main = defineComponent({
  name: clPrefixName + "Button"
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var Button = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/yhh/Documents/study/admin-cl/packages/components/button/src/index.vue"]]);

export { Button as default };
//# sourceMappingURL=index2.js.map
