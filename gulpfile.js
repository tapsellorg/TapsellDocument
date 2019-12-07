const argv = require('yargs').argv;
const mode = (argv.mode || '').trim().toLowerCase();
process.env.NODE_ENV = mode === 'development' || mode === 'production' ? mode : 'development';

const config = require('./frasco.config.js');
const gulp = require('gulp');
const del = require('del');
const watch = require('gulp-watch');
const browsersync = require('browser-sync').create();
const cache = require('gulp-cache');

const gulpUtils = require('./gulp/gulp-utils');

const paths = {
  src: 'src/',
  assets: {
    allExceptImages: { watch: ['src/assets/**/*', '!src/assets/images', '!src/assets/images/**/*'], dest: 'assets' },
    images: { watch: 'src/assets/images/**/*', dest: 'assets/images' },
  },
  sass: { watch: ['src/sass/**/*', 'src/style.scss'], dest: 'assets', entry: 'src/style.scss' },
  jekyll: { dest: '._jekyll_build_temp', watch: ['src/jekyll', '_config*.yml'] },
  js: { entry: 'src/js/bundle.js', dest: 'assets' },
  dest: '_site',
};

/**
 * Build the Jekyll Site
 */
function jekyllBuild() {
  return gulp.series(
    gulpUtils.runJekyllCommand(paths.jekyll.dest),
    gulp.parallel(
      function() {
        return gulpUtils.html(paths.jekyll.dest + '/**/*.html', paths.dest);
      },
      function() {
        return gulpUtils.imageMin(`${paths.jekyll.dest}/**/*.{gif,jpeg,jpg,png,gif,svg}`, paths.dest);
      }
    )
  );
}

function deleteDist() {
  return del(paths.dest);
}

function sass() {
  return gulpUtils.sass(paths.sass.entry, paths.dest + '/' + paths.sass.dest, { includePaths: ['node_modules/bootstrap/scss', paths.src] });
}

function assets() {
  return gulpUtils.copy(paths.assets.allExceptImages.watch, paths.dest + '/' + paths.assets.allExceptImages.dest);
}

function imageMin() {
  return gulpUtils.imageMin(paths.assets.images.watch, paths.dest + '/' + paths.assets.images.dest);
}

function webpack() {
  return gulpUtils.webpack(paths.js.entry, paths.dest + '/' + paths.js.dest);
}

function setupBrowserSync(done) {
  return browsersync.init({
    port: config.port,
    browser: 'default',
    server: { baseDir: paths.dest },
  });
}

/**
 * Rebuild Jekyll & do page reload
 */
function browserReload(done) {
  return gulp.series(jekyllBuild(), function(done) {
    browsersync.notify('Rebuilded Jekyll');
    done();
  });
}

gulp.task('build', gulp.series(deleteDist, jekyllBuild(), gulp.parallel(imageMin, sass, webpack, assets)));

gulp.task('watch', function() {
  watch(paths.assets.images.watch, imageMin);
  watch(paths.sass.watch, sass);
  watch(paths.assets.allExceptImages.watch, assets);
  watch(paths.jekyll.watch, browserReload());
  gulp.watch(paths.dest, function(done) {
    cache.clearAll();
    done();
  });
});

gulp.task(
  'default',
  gulp.series(deleteDist, jekyllBuild(), gulp.parallel(imageMin, sass, assets), gulp.parallel(setupBrowserSync, webpack, 'watch'))
);
