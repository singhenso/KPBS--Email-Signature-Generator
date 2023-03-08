const gulp = require('gulp');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

// Define paths
const paths = {
  styles: {
    src: 'src/less/style.less',
    dest: 'dist/css/'
  },
  script: {
    src: 'src/js/*.js',
    dest: 'dist/js/'
  },
  images: {
    src: 'src/img/*',
    dest: 'dist/img/'
  }
};

// Compile Less to CSS
function compileStyles() {
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest));
}

// Minify and uglify JS
function minifyJS() {
  return gulp.src(paths.script.src)
    .pipe(uglify({mangle: true}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.script.dest));
}

// Copy images to dist folder
function copyImages() {
  return gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest));
}

// Watch for changes to Less and JS files
function watch() {
  gulp.watch('src/less/**/*.less', compileStyles);
  gulp.watch('src/js/**/*.js', minifyJS);
}

// Export tasks
exports.watch = watch;
exports.minifyJS = minifyJS;
exports.copyImages = copyImages;
exports.default = gulp.series(gulp.parallel(compileStyles, minifyJS, copyImages), watch);
