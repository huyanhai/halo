/********AdminCl********/
import { defineComponent, openBlock, createElementBlock, renderSlot } from 'vue';

const version$1 = "0.0.1";
const prefix = "Admin";

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _hoisted_1 = { class: "cl-button" };
const __default__$1 = {
  name: `${prefix}Button`
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
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
var Button = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "index.vue"]]);

Button.install = (app) => {
  app.component(Button.name, Button);
};

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
var Text = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "index.vue"]]);

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
