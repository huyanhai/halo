/**xxx_v1**/
import { defineComponent, openBlock, createElementBlock, renderSlot } from 'vue';

const clPrefixName = "Admin";
const version$1 = "1.0.0";

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$1 = defineComponent({
  name: clPrefixName + "Button"
});
const _hoisted_1 = { class: "cl-button" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", _hoisted_1, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var Button = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "index.vue"]]);

Button.install = (app) => {
  app.component(Button.name, Button);
};

const _sfc_main = defineComponent({
  name: clPrefixName + "Text"
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var Text = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.vue"]]);

Text.install = (app) => {
  app.component(Text.name, Text);
};

var Components = [Button, Text];

const install$1 = (app) => {
  Components.forEach((component) => {
    app.component(component.name, component);
  });
};

var installer = /*#__PURE__*/Object.freeze({
  __proto__: null,
  install: install$1,
  version: version$1
});

const install = install$1;
const version = version$1;

export { installer as default, install, version };
