import { defineComponent, openBlock, createElementBlock, renderSlot } from 'vue';
import { prefix } from '../../../constants/index.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';

const _sfc_main = defineComponent({
  name: prefix + "Text"
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var Text = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/yhh/Documents/study/admin-cl/packages/components/text/src/index.vue"]]);

export { Text as default };
//# sourceMappingURL=index.mjs.map
