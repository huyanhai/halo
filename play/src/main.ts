import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import Admin from '../../packages/admin-cl/index';
import '../../packages/theme/src/index.scss';

createApp(App).use(Admin).mount('#app');
