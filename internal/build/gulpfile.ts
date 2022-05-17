import { series, parallel } from 'gulp';
import { buildModules } from './src/rollup';

const test = (cb) => {
  cb();
};

export default series(test, parallel(buildModules));
