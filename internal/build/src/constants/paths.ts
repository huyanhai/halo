import { resolve } from 'path';

export const rootPath = resolve(__dirname, '../../../../');
export const packagesPath = resolve(rootPath, 'packages');
export const fullPath = resolve(packagesPath, 'admin-cl');
export const componentsPath = resolve(packagesPath, 'components');
export const distPath = resolve(rootPath, 'dist');
