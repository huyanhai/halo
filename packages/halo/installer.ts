import type { App } from 'vue';
import Components from './components';
import { version } from '@halo/constants';

const install = (app: App): void => {
  Components.forEach((component) => {
    app.component(component.name, component);
  });
};

export { install, version };
