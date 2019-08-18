const argv = require('yargs').argv;
process.env.NODE_ENV = argv.mode === 'development' || argv.mode === 'production' ? argv.mode : 'development';

const config = require('./frasco.config.js');
const gulp = require('gulp');
const cp = require('child_process');
const del = require('del');
const watch = require('gulp-watch');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const newer = require('gulp-newer');
const plumber = require('gulp-plumber');
const named = require('vinyl-named');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const browsersync = require('browser-sync').create();

// requireDir('./gulp_tasks', { recurse: true });

const jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
const paths = {
  assets: {
    allExceptImages: { watch: ['src/assets/**/*', '!src/assets/images', '!src/assets/images/**/*'], dest: 'assets' },
    images: { watch: 'src/assets/images/**/*', dest: 'assets/images' }
  },
  sass: { watch: ['src/sass/**/*', 'src/style.scss'], dest: 'assets', entry: 'src/style.scss' },
  jekyll: { dest: '._jekyll_build_temp' },
  js: { entry: 'src/js/bundle.js', dest: 'assets' },
  dest: '_site'
};

/**
 * Build the Jekyll Site
 */
gulp.task(
  'jekyll-build',
  gulp.series(
    function(done) {
      let jekyllConfig = config.jekyll.config.default;
      if (process.env.NODE_ENV == 'production') {
        process.env.JEKYLL_ENV = 'production';
        jekyllConfig += config.jekyll.config.production ? ',' + config.jekyll.config.production : '';
      } else {
        jekyllConfig += config.jekyll.config.development ? ',' + config.jekyll.config.development : '';
      }
      return cp
        .spawn(jekyll, ['build', '--config', jekyllConfig, '--destination', paths.jekyll.dest], { stdio: 'inherit', env: process.env })
        .on('close', done);
    },
    function(done) {
      return gulp.src(paths.jekyll.dest + '/**/*').pipe(gulp.dest(paths.dest));
    }
  )
);

/**
 * Remove _site folder
 */
gulp.task('clear', function() {
  return del(paths.dest);
});

/**
 * Sass
 */
gulp.task('sass', function() {
  return gulp
    .src(paths.sass.entry)
    .pipe(sass({ outputStyle: config.sass.outputStyle, includePaths: ['node_modules/bootstrap/scss'] }).on('error', sass.logError))
    .pipe(
      postcss([
        autoprefixer({
          browsers: config.sass.autoprefixer.browsers
        })
      ])
    )
    .pipe(gulp.dest(paths.dest + '/' + paths.sass.dest));
});

/**
 * Copy assets
 */
gulp.task('assets', function() {
  return gulp.src(paths.assets.allExceptImages.watch).pipe(gulp.dest(paths.dest + '/' + paths.assets.allExceptImages.dest));
});

/**
 * Image min
 */
gulp.task('imagemin', function() {
  const dest = paths.dest + '/' + paths.assets.images.dest;
  return gulp
    .src(paths.assets.images.watch)
    .pipe(plumber())
    .pipe(newer(dest))
    .pipe(
      imagemin({
        progressive: config.imagemin.progressive,
        svgoPlugins: config.imagemin.svgoPlugins,
        use: [pngquant()]
      })
    )
    .pipe(gulp.dest(dest));
});

/**
 * Webpack
 */
gulp.task('webpack', function() {
  const webpackConfig = require('./webpack.config');
  return gulp
    .src(paths.js.entry)
    .pipe(plumber())
    .pipe(named())
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(paths.dest + '/' + paths.js.dest));
});

/**
 * Build once
 */
gulp.task('build', gulp.series('clear', 'jekyll-build', gulp.parallel('imagemin', 'sass', 'webpack', 'assets')));

/**
 * Watch file changes
 */
gulp.task('watch', function() {
  watch(paths.assets.images.watch, gulp.series('imagemin'));
  watch(paths.sass.watch, gulp.series('sass'));
  watch(paths.assets.allExceptImages.watch, gulp.series('assets'));
  watch(
    [
      '!./node_modules/**/*',
      '!./README.md',
      '!' + paths.dest + '/**/*',
      '!' + paths.jekyll.dest + '/**/*',
      '_config*.yml',
      './**/*.html',
      './**/*.md',
      './**/*.markdown',
      '_data/**/*'
    ],
    gulp.series('browser-reload')
  );
});

/**
 * Browsersync
 */
gulp.task('browsersync', function() {
  const browser = config.browsersync.browsers[0] != null ? config.browsersync.browsers : 'default';
  return browsersync.init({
    port: config.port,
    browser: browser,
    server: {
      baseDir: paths.dest
    }
  });
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task(
  'browser-reload',
  gulp.series('jekyll-build', function(done) {
    browsersync.notify('Rebuilded Jekyll');
    done();
  })
);

gulp.task(
  'default',
  gulp.series('clear', 'jekyll-build', gulp.parallel('imagemin', 'sass', 'assets'), gulp.parallel('browsersync', 'webpack', 'watch'))
);
