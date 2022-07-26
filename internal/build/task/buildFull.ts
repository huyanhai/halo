import type { OutputOptions, ModuleFormat } from 'rollup';

import { parallel } from 'gulp';
import { rollup } from 'rollup';
import { resolve } from 'path';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import esbuild from 'rollup-plugin-esbuild';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import DefineOptions from 'unplugin-vue-define-options/rollup';

import {
  fullEntryPath,
  entryName,
  banner,
  distPath
} from '@admin-cl/build-constants';

const build = async (minify: boolean) => {
  const bundle = await rollup({
    input: resolve(fullEntryPath, 'index.ts'),
    treeshake: true,
    plugins: [
      DefineOptions(),
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
        minify,
        treeShaking: true,
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
        file: resolve(distPath, minify ? 'index.full.min.js' : 'index.full.js'),
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
        file: resolve(
          distPath,
          minify ? 'index.full.min.mjs' : 'index.full.mjs'
        ),
        sourcemap: false,
        banner: banner
      }
    ].map((item: OutputOptions) => {
      bundle.write(item);
    })
  );
};

export const buildFull = parallel(
  () => build(false),
  () => build(true)
);
