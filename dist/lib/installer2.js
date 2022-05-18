import Components from './components2.js';
export { version } from './constants/index2.js';

const install = (app) => {
  Components.forEach((component) => {
    app.component(component.name, component);
  });
};

export { install };
//# sourceMappingURL=installer2.js.map
