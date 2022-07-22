import { App, Plugin } from 'vue';
import Text from './src/index.vue';

Text.install = (app: App): void => {
  app.component(Text.name, Text);
};

export default Text as typeof Text & Plugin;
