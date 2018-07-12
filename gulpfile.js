const gulp = require('gulp');
const gulpMinifyCss = require('gulp-minify-css');
const gulpConcat = require('gulp-concat');
const gulpUglify = require('gulp-uglify');
const gulpHtmlmin = require('gulp-htmlmin');
const gulpConnect = require('gulp-connect');
const clean = require('gulp-clean');
const gulpSequence = require('gulp-sequence');

gulp.task('minify-css', function() {
  gulp.src('./public/asset/style/index.css')
    .pipe(gulpMinifyCss({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('./dist/'))
    .pipe(gulpConnect.reload());
});

gulp.task('minify-js', function() {
  gulp
    .src([
      './public/asset/javascript/index1.js',
      './public/asset/javascript/index2.js'
    ])
    .pipe(gulpConcat('bundle.js'))
    .pipe(gulpUglify())
    .pipe(gulp.dest('dist'))
    .pipe(gulpConnect.reload());
});

gulp.task('minify-html', function() {
  gulp.src('view/*.html')
    .pipe(gulpHtmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist'))
    .pipe(gulpConnect.reload());
});

gulp.task('server', function() {
  gulpConnect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch('./public/asset/javascript/*.js', ['minify-js']);
  gulp.watch('./public/asset/style/*.css', ['minify-css']);
  gulp.watch('./view/*.html', ['minify-html']);
});

gulp.task('clean', function() {
  return gulp.src('dist', {
    read: false
  })
    .pipe(clean());
});

gulp.task('build', gulpSequence('clean', 'minify-css', 'minify-js', 'minify-html'));

gulp.task('default', ['watch', 'server']);
