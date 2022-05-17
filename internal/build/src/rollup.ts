import type { OutputOptions } from 'rollup';

import { rollup } from 'rollup';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import DefineOptions from 'unplugin-vue-define-options/rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import esbuild from 'rollup-plugin-esbuild';
import glob from 'fast-glob';

export const excludeFiles = (files: string[]) => {
  const excludes = ['node_modules', 'test', 'mock', 'gulpfile', 'dist'];
  return files.filter(
    (path) => !excludes.some((exclude) => path.includes(exclude))
  );
};

export const buildConfig = {
  esm: {
    module: 'ESNext',
    format: 'esm',
    ext: 'mjs',
    output: {
      name: 'es',
      path: resolve('../dist', 'es')
    },
    bundle: {
      path: `admin-cl/es`
    }
  },
  cjs: {
    module: 'CommonJS',
    format: 'cjs',
    ext: 'js',
    output: {
      name: 'lib',
      path: resolve('../dist', 'lib')
    },
    bundle: {
      path: `admin-cl/lib`
    }
  }
};

export const buildModules = async () => {
  const input = excludeFiles(
    await glob('**/*.{js,ts,vue}', {
      cwd: resolve('../../packages/components'),
      absolute: true,
      onlyFiles: true
    })
  );

  console.log(input);

  const bundle = await rollup({
    input,
    plugins: [
      DefineOptions(),
      vue({
        isProduction: false
      }),
      json(),
      vueJsx(),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts']
      }),
      commonjs(),
      esbuild({
        sourceMap: true,
        target: 'es2018',
        loaders: {
          '.vue': 'ts'
        }
      })
    ],
    treeshake: false
  });

  await Promise.all(
    Object.entries(buildConfig)
      .map(([module, config]): OutputOptions => {
        {
          return {
            // format: config.format,
            dir: config.output.path,
            exports: module === 'cjs' ? 'named' : undefined,
            preserveModules: true,
            preserveModulesRoot: 'packages',
            sourcemap: true,
            entryFileNames: `[name].${config.ext}`
          };
        }
      })
      .map((item) => {
        bundle.write(item);
      })
  );
};
