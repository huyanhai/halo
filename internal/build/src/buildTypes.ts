import { Project } from 'ts-morph';
import { resolve, dirname, basename } from 'path';
import { mkdirSync, writeFileSync } from 'fs';
import glob from 'fast-glob';

const TSCONFIG_PATH = resolve('../../', 'tsconfig.json');

export const buildTypes = async () => {
  const project = new Project({
    tsConfigFilePath: TSCONFIG_PATH,
    skipAddingFilesFromTsConfig: true
  });

  console.log(
    '===',
    await glob(resolve('../../', 'packages/**/*.ts'), {
      ignore: ['**/node_modules/**', '**/__tests__/**']
    })
  );

  console.log(project, mkdirSync, writeFileSync, dirname, basename);

  //   const files = [
  //     project.addSourceFilesAtPaths(
  //       await glob(resolve('../../', 'packages/**/*{.ts}'))
  //     )
  //   ];

  //   mkdirSync(resolve('../../', `dist`));

  //   files.map((item) => {
  //     console.log(item);

  // const emitOutput = item.getEmitOutput();
  // const emitFiles = emitOutput.getOutputFiles();

  // const subTasks = emitFiles.map(async (outputFile) => {
  //   const filepath = outputFile.getFilePath();

  //   console.log(filepath);

  //   //   mkdirSync(resolve('../../', `dist/${basename(filepath)}`));
  //   if (filepath.endsWith('.ts')) {
  //     writeFileSync(
  //       resolve('../../', `dist/${basename(filepath)}`),
  //       outputFile.getText(),
  //       'utf8'
  //     );
  //   }
  // });
  //   });
};
