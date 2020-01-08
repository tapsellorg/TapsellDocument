const argv = require('yargs').argv;
const mode = (argv.mode || '').trim().toLowerCase();
process.env.NODE_ENV = mode === 'development' || mode === 'production' ? mode : 'development';

const config = require('./frasco.config.js');
const gulp = require('gulp');
const del = require('del');
const browsersync = require('browser-sync').create();

const gulpUtils = require('./gulp/gulp-utils');

const paths = {
  src: 'src/',
  assets: {
    allExceptImages: { watch: ['src/assets/**/*', '!src/assets/images', '!src/assets/images/**/*'], dest: 'assets' },
    images: { watch: 'src/assets/images/**/*', dest: 'assets/images' },
  },
  sass: { watch: ['src/sass/**/*', 'src/style.scss'], dest: 'assets', entry: 'src/style.scss' },
  jekyll: { dest: '._jekyll_build_temp', watch: ['src/jekyll/**/*', '!src/jekyll/{.jekyll-cache,.jekyll-cache/**}', '_config.yml'] },
  admin: { entry: ['admin/**/*', '!admin/admin.js'], watch: ['admin/**/*', '!admin/admin.js'], dest: 'admin' },
  adminJs: { entry: ['admin/admin.js'], watch: ['admin/admin.js'], dest: 'admin' },
  dest: '_site',
};

/**
 * Build the Jekyll Site
 */
const jekyllBuild = gulp.series(
  gulpUtils.runJekyllCommand(paths.jekyll.dest),
  gulp.parallel(
    function minifyJekyllHtml() {
      return gulpUtils.html(paths.jekyll.dest + '/**/*.html', paths.dest);
    },
    function minifyJekyllImages() {
      return gulpUtils.imageMin(`${paths.jekyll.dest}/**/*.{gif,jpeg,jpg,png,gif,svg}`, paths.dest);
    }
  )
);

const deleteDist = gulp.parallel(
  function deleteDestinationFolder() {
    return del(paths.dest);
  },
  function deleteJekyllTempFolder() {
    return del(paths.jekyll.dest);
  }
);

function sass() {
  return gulpUtils.sass(paths.sass.entry, `${paths.dest}/${paths.sass.dest}`, { includePaths: ['node_modules/bootstrap/scss', paths.src] });
}

function assets() {
  return gulpUtils.copy(paths.assets.allExceptImages.watch, `${paths.dest}/${paths.assets.allExceptImages.dest}`);
}

function imageMin() {
  return gulpUtils.imageMin(paths.assets.images.watch, `${paths.dest}/${paths.assets.images.dest}`);
}

function webpack() {
  return gulpUtils.webpack('src/js/bundle.js', '_site/');
}

const admin = gulp.parallel(function copyAdmin() {
  return gulpUtils.copy(paths.admin.entry, `${paths.dest}/${paths.admin.dest}`);
});

function setupBrowserSync(done) {
  return browsersync.init({
    port: config.port,
    browser: 'default',
    server: { baseDir: paths.dest },
  });
}

gulp.task('build', gulp.series(deleteDist, jekyllBuild, gulp.parallel(imageMin, sass, webpack, assets), admin));

gulp.task('watch', function() {
  gulp.watch(paths.assets.images.watch, imageMin);
  gulp.watch(paths.sass.watch, sass);
  gulp.watch(paths.assets.allExceptImages.watch, assets);
  gulp.watch(paths.jekyll.watch, jekyllBuild);
});

gulp.task(
  'default',
  gulp.series(deleteDist, jekyllBuild, gulp.parallel(imageMin, sass, assets), gulp.parallel(setupBrowserSync, webpack, 'watch'))
);
