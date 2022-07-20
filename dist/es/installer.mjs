import Components from './components.mjs';
export { version } from './package.mjs';

const install = (app) => {
  Components.forEach((component) => {
    app.component(component.name, component);
  });
};

export { install };
//# sourceMappingURL=installer.mjs.map
