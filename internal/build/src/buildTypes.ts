import type { SourceFile } from 'ts-morph';
import { Project } from 'ts-morph';
import { cwd } from 'process';
import { resolve, dirname, relative } from 'path';
import { mkdirSync, writeFileSync, readFileSync } from 'fs';
import glob from 'fast-glob';
import { parse, compileScript } from 'vue/compiler-sfc';

import { rootPath, distPath } from './constants';

const tsconfigPath = resolve(rootPath, 'tsconfig.json');

export const buildTypes = async () => {
  const project = new Project({
    tsConfigFilePath: tsconfigPath,
    compilerOptions: {
      preserveSymlinks: false,
      outDir: resolve(distPath, 'types')
    }
  });

  const filePaths = await glob(['packages/**/*.{ts?(x),vue}'], {
    ignore: ['**/node_modules/**', '**/__tests__/**', 'gulpfile'],
    onlyFiles: true,
    absolute: true,
    cwd: rootPath
  });
  const sourceFiles: SourceFile[] = [];

  filePaths.map((filepath) => {
    if (filepath.endsWith('.vue')) {
      const fileCtx = readFileSync(filepath, 'utf-8');
      const sfc = parse(fileCtx);
      const { script, scriptSetup } = sfc.descriptor;

      if (script || scriptSetup) {
        let content = script?.content || '';

        if (scriptSetup) {
          const ctx = compileScript(sfc.descriptor, {
            id: 'xxx'
          });
          content += ctx.content || '';
        }

        const file = `${relative(cwd(), filepath)}.${
          scriptSetup?.lang || script?.lang || 'js'
        }`;

        const source = project.createSourceFile(file, content);
        sourceFiles.push(source);
      }
    } else {
      const source = project.addSourceFileAtPath(filepath);
      sourceFiles.push(source);
    }
  });

  sourceFiles.map((sourceFile) => {
    const emitOutput = sourceFile.getEmitOutput();
    const emitFiles = emitOutput.getOutputFiles();

    console.log(emitOutput, emitFiles);

    if (emitFiles.length === 0) {
      console.log('没有可写的上下文');
    }

    emitFiles.map((output) => {
      const ctx = output.getText();
      const filePath = output.getFilePath();

      mkdirSync(dirname(filePath), {
        recursive: true
      });

      if (filePath.endsWith('.ts')) {
        writeFileSync(filePath, ctx);
      }
    });
  });
};
