import { series, parallel } from 'gulp';
import { spawn } from 'child_process';
import { copySync, moveSync, removeSync } from 'fs-extra';
import { basename } from 'path';
import { resolve } from 'path';
import glob from 'fast-glob';

import { buildModules } from './src/buildModules';
import { buildFull } from './src/buildFull';
import { buildTypes } from './src/buildTypes';

import { distPath } from './src/constants';

const clean = () => {
  return spawn('pnpm', ['run', 'clean:dist'], {
    cwd: resolve('../../'),
    stdio: 'inherit'
  });
};

const moveFile = async () => {
  const files = await glob(['*'], {
    onlyFiles: true,
    absolute: true,
    cwd: resolve(distPath, 'types/admin-cl')
  });
  files.map((file) => {
    moveSync(file, resolve(distPath, 'types', basename(file)));
  });
  return removeSync(resolve(distPath, 'types', 'admin-cl'));
};

const copyTypes = async () => {
  await moveFile();
  copySync(resolve(distPath, 'types'), resolve(distPath, 'es'));
  copySync(resolve(distPath, 'types'), resolve(distPath, 'lib'));
};

export default series(
  clean,
  parallel(buildModules, buildFull, buildTypes),
  copyTypes
);
// export default series(clean, parallel(buildModules));
