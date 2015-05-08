var gulp = require('gulp');
var concat = require('gulp-concat');
var source = require('vinyl-source-stream');
var browserify = require('browserify');

gulp.task('build:html', function() {
  gulp.src('./index.html')
    .pipe(gulp.dest('./public'));
});

gulp.task('build:js', function() {
  browserify('./src/app.js')
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./public'));
});

gulp.task('build', ['build:html', 'build:js'], function() {});
