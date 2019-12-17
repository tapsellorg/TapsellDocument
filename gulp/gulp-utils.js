const sourcemaps = require('gulp-sourcemaps');
const gulpSass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const gulpif = require('gulp-if');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const plumber = require('gulp-plumber');
const named = require('vinyl-named'); // arbitrary chunk names
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const cp = require('child_process');
const jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
const cleanCSS = require('gulp-clean-css');
const versionNumber = require('gulp-version-number');

const envDevMode = process.env.NODE_ENV === 'development';

module.exports = {
  html: function(src, dest, { devMode = envDevMode } = {}) {
    return gulp
      .src(src)
      .pipe(
        gulpif(!devMode, htmlmin({ collapseWhitespace: true, minifyCSS: true, minifyJS: true, minifyURLs: true, removeComments: true }))
      )
      .pipe(versionNumber({ append: { to: ['css', 'js'] } }))
      .pipe(gulp.dest(dest));
  },
  sass: function(src, dest, { includePaths = [], devMode = envDevMode } = {}) {
    return gulp
      .src(src)
      .pipe(plumber())
      .pipe(gulpif(devMode, sourcemaps.init()))
      .pipe(gulpSass({ outputStyle: 'compressed', includePaths }).on('error', gulpSass.logError))
      .pipe(postcss([autoprefixer()]))
      .pipe(cleanCSS({ inline: ['none'] }))
      .pipe(gulpif(devMode, sourcemaps.write('.')))
      .pipe(gulp.dest(dest));
  },
  copy: function(src, dest) {
    return gulp.src(src).pipe(gulp.dest(dest));
  },
  imageMin: function(src, dest) {
    return gulp
      .src(src)
      .pipe(plumber())
      .pipe(newer(dest))
      .pipe(imagemin())
      .pipe(gulp.dest(dest));
  },
  webpack: function(src, dest, { customWebpackConfig = {} } = {}) {
    const webpackConfig = { ...require('../webpack.config'), ...customWebpackConfig };
    return gulp
      .src(src)
      .pipe(plumber())
      .pipe(named())
      .pipe(webpackStream(webpackConfig, webpack))
      .pipe(gulp.dest(dest));
  },
  runJekyllCommand: function(dest) {
    return function buildJekyll(done) {
      let jekyllConfig = '_config.yml';
      const jekyllDevConfig = '_config_development.yml';
      const jekyllProdConfig = '';
      if (process.env.NODE_ENV == 'production') {
        process.env.JEKYLL_ENV = 'production';
        jekyllConfig += jekyllProdConfig ? ',' + jekyllProdConfig : '';
      } else {
        jekyllConfig += jekyllDevConfig ? ',' + jekyllDevConfig : '';
      }
      return cp
        .spawn(jekyll, ['build', '--config', jekyllConfig, '--destination', dest], { stdio: 'inherit', env: process.env })
        .on('close', done);
    };
  },
};
