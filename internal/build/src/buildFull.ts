import { rollup } from 'rollup';
import { resolve } from 'path';
import type { OutputOptions, ModuleFormat } from 'rollup';

import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import esbuild from 'rollup-plugin-esbuild';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import { fullPath, entryName, banner, distPath } from './constants';

export const buildFull = async () => {
  const bundle = await rollup({
    input: resolve(fullPath, 'index.ts'),
    plugins: [
      vue({
        isProduction: true
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
    external: ['vue', '@vue']
  });

  await Promise.all(
    [
      {
        format: 'umd' as ModuleFormat,
        file: resolve(distPath, 'index.full.js'),
        exports: 'named' as 'default' | 'named' | 'none' | 'auto',
        name: entryName,
        sourcemap: true,
        banner: banner,
        globals: {
          vue: 'Vue'
        }
      },
      {
        format: 'esm' as ModuleFormat,
        file: resolve(distPath, 'index.full.mjs'),
        sourcemap: false,
        banner: banner
      }
    ].map((item: OutputOptions) => {
      bundle.write(item);
    })
  );
};
