import { rollup } from 'rollup';
import { resolve } from 'path';
import type { OutputOptions } from 'rollup';

import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import esbuild from 'rollup-plugin-esbuild';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export const buildFull = async () => {
  const bundle = await rollup({
    input: resolve('../../packages/admin-cl/index.ts'),
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
    external: ['vue', '@vue'],
    treeshake: true
  });

  await Promise.all(
    [
      {
        format: 'umd',
        file: resolve('../../dist/admin/index.full.min.js'),
        exports: 'named',
        name: 'AdminCl',
        sourcemap: true,
        banner: `/**xxx_v1**/`,
        globals: {
          vue: 'Vue'
        }
      },
      {
        format: 'esm',
        file: resolve('../../dist/admin/index.full.mjs'),
        sourcemap: false,
        banner: `/**xxx_v1**/`
      }
    ].map((item: OutputOptions) => {
      bundle.write(item);
    })
  );
};
