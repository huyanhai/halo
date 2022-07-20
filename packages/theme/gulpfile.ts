import path from 'path';
import { dest, parallel, series, src } from 'gulp';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';

// import { distPath } from '../constants';

const distFolder = path.resolve('./', 'dist');
const distBundle = path.resolve('../../dist', 'theme');

// 构建样式
function buildThemeChalk() {
  const sass = gulpSass(dartSass);
  return src(path.resolve('./', 'src/*.scss'))
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cleanCSS({}, () => {}))
    .pipe(
      rename((path) => {
        if (!['index'].includes(path.basename)) {
          path.basename = `cl-${path.basename}`;
        }
      })
    )
    .pipe(dest(distFolder));
}

// 拷贝构建完成的css
export function copyThemeChalkBundle() {
  return src(`${distFolder}/**`).pipe(dest(distBundle));
}

// 拷贝scss
export function copyThemeChalkSource() {
  return src(path.resolve('./', 'src/**')).pipe(
    dest(path.resolve(distBundle, 'src'))
  );
}

export default parallel(
  copyThemeChalkSource,
  series(buildThemeChalk, copyThemeChalkBundle)
) as any;
