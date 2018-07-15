const gulp = require('gulp');
const gulpMinifyCss = require('gulp-minify-css');
const gulpConcat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const gulpHtmlmin = require('gulp-htmlmin');
const gulpConnect = require('gulp-connect');
const clean = require('gulp-clean');
const gulpSequence = require('gulp-sequence');
const uglifyes = require('uglify-es');
const composer = require('gulp-uglify/composer');
const gulpUglify = composer(uglifyes, console);

gulp.task('minify-css', function() {
  gulp.src('./public/asset/styles/index.css')
    .pipe(gulpMinifyCss({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('./dist/'))
    .pipe(gulpConnect.reload());
});

gulp.task('minify-js', function() {
  gulp
    .src([
      './public/asset/javascripts/index1.js',
      './public/asset/javascripts/index2.js'
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

gulp.task('imagemin', function() {
  gulp
    .src('./public/asset/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'))
});

gulp.task('server', function() {
  gulpConnect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch('./public/asset/javascripts/*.js', ['minify-js']);
  gulp.watch('./public/asset/styles/*.css', ['minify-css']);
  gulp.watch('./view/*.html', ['minify-html']);
  gulp.watch('./public/asset/images/*', ['imagemin']);
});

gulp.task('clean', function() {
  return gulp.src('dist', {
    read: false
  })
    .pipe(clean());
});

gulp.task('build', gulpSequence('clean', 'minify-css', 'minify-js', 'minify-html', 'imagemin'));

gulp.task('default', ['watch', 'server']);
