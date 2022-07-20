import { resolve } from 'path';
import { projectsName } from './files';

export const rootPath = resolve(__dirname, '../../');
export const packagesPath = resolve(rootPath, 'packages');
export const componentsPath = resolve(packagesPath, 'components');
export const fullEntryPath = resolve(packagesPath, projectsName);

export const distPath = resolve(rootPath, 'dist');
