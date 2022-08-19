import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

// import halo from '../../packages/halo';
import halo from '../../dist';
import '../../packages/theme/src/index.scss';

createApp(App).use(halo).mount('#app');
