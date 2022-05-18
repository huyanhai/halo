import { series, parallel } from 'gulp';
import { spawn } from 'child_process';
import { buildModules } from './src/rollup';
import { resolve } from 'path';

const clean = () => {
  return spawn('pnpm', ['run', 'clean:dist'], {
    cwd: resolve('../'),
    stdio: 'inherit'
  });
};

export default series(clean, parallel(buildModules));
