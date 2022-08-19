import { series, parallel } from 'gulp';
import { spawn } from 'child_process';
import { copySync } from 'fs-extra';
import { resolve } from 'path';

import { buildModules } from './task/buildModules';
import { buildFull } from './task/buildFull';
import { buildTypes } from './task/buildTypes';

import { distPath, packagesPath, projectsName } from '@halo/build-constants';

const clean = () => {
  return spawn('pnpm', ['run', 'clean:dist'], {
    cwd: resolve('../../'),
    stdio: 'inherit'
  });
};

// const moveFile = async () => {
//   const files = await glob(['*'], {
//     onlyFiles: true,
//     absolute: true,
//     cwd: resolve(distPath, 'types', 'admin-cl')
//   });
//   files.map((file) => {
//     moveSync(file, resolve(distPath, 'types', basename(file)));
//   });
//   return removeSync(resolve(distPath, 'types', 'admin-cl'));
// };

const copyTypes = async () => {
  // await moveFile();
  copySync(resolve(distPath, 'types'), resolve(distPath, 'es'));
  copySync(resolve(distPath, 'types'), resolve(distPath, 'lib'));
  copySync(
    resolve(packagesPath, projectsName, 'package.json'),
    resolve(distPath, 'package.json')
  );
};

export default series(
  clean,
  parallel(buildModules, buildFull, buildTypes),
  copyTypes
);
// export default series(clean, parallel(buildTypes));
