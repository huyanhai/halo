import { series, parallel } from 'gulp';
import { spawn } from 'child_process';
import { buildModules } from './src/buildModules';
import { buildFull } from './src/buildFull';
import { buildTypes } from './src/buildTypes';

import { resolve } from 'path';

const clean = () => {
  return spawn('pnpm', ['run', 'clean:dist'], {
    cwd: resolve('../'),
    stdio: 'inherit'
  });
};

export default series(clean, parallel(buildModules, buildFull, buildTypes));

// export default series(clean, parallel(buildModules, buildFull));
