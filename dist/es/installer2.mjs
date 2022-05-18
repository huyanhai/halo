import Components from './components2.mjs';
export { version } from './constants/index2.mjs';

const install = (app) => {
  Components.forEach((component) => {
    app.component(component.name, component);
  });
};

export { install };
//# sourceMappingURL=installer2.mjs.map
