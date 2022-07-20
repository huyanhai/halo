/********AdminCl********/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.AdminCl = {}, global.Vue));
})(this, (function (exports, vue) { 'use strict';

  var version$1 = "0.0.2";

  const prefix = "Admin";

  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  const _hoisted_1 = { class: "cl-button" };
  const __default__ = vue.defineComponent({
    name: prefix + "Button"
  });
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
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
  var Button = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "index.vue"]]);

  Button.install = (app) => {
    app.component(Button.name, Button);
  };

  const _sfc_main = vue.defineComponent({
    name: prefix + "Text"
  });
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", null, [
      vue.renderSlot(_ctx.$slots, "default")
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

  exports["default"] = installer;
  exports.install = install;
  exports.version = version;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.full.js.map
