import { resolve } from 'path';
import { dest, parallel, series, src } from 'gulp';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';
import rename from 'gulp-rename';

const distFolder = resolve('./', 'dist');
const distBundle = resolve('../../dist', 'theme');

// 构建样式
function buildTheme() {
  const sass = gulpSass(dartSass);
  return src(resolve('./', 'src/*.scss'))
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cleanCss({}, () => {}))
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
export function copyTheme() {
  return src(`${distFolder}/**`).pipe(dest(distBundle));
}

// 拷贝scss
export function copyThemeBySource() {
  return src(resolve('./', 'src/**')).pipe(dest(resolve(distBundle, 'src')));
}

export default parallel(
  copyThemeBySource,
  series(buildTheme, copyTheme)
) as any;
