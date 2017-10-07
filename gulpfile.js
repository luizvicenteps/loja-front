'use strict'

var gulp = require('gulp');
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var connect = require('gulp-connect');
var htmlReplace = require('gulp-html-replace');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var obfuscate = require('gulp-js-obfuscator');
var jshint = require('gulp-jshint');

var js = [
  './scripts/**/*.js',
  './scripts/*.js'
];

var watch = ['index.html', 'robots.txt', '404.html', './scripts/**/*.js', './styles/scss/*.scss',
  'favicon.ico', './utils/**/*.js', './views/**/*.html'];

var files = ['index.html', 'robots.txt', '404.html', 'favicon.ico'];

gulp.task('css-generate', function () {
  return gulp.src('./styles/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./styles'));
})

gulp.task('files', function () {
  gulp.src(watch).pipe(connect.reload());
});

gulp.task('copy-html', function () {
  return gulp
    .src('./views/**/*.html')
    .pipe(gulp.dest('dist/views'))

})

gulp.task('connect', function () {
  connect.server({ livereload: true });
});


gulp.task('minify-js', function () {
  gulp.src(js)
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    // .pipe(obfuscate())                    
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('copy', function () {
  return gulp
    .src(files)
    .pipe(gulp.dest('dist'))
});

gulp.task('copy-deps', function () {
  return gulp
    .src('bower_components/**/*')
    .pipe(gulp.dest('./dist/bower_components'))
})


gulp.task('files-replace', function () {
  gulp.src('./dist/index.html')
    .pipe(htmlReplace({
      'css': './styles/styles.min.css',
      'js': './js/script.min.js'
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('lint',function(){
gulp.src([ "./scripts/**/*.js" ])
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('clean', function () {
  return gulp.src('./dist', { 'read': false })
    .pipe(clean());
});

gulp.task('watch', function () {
  gulp.watch(watch, ['css-generate', 'files']);
});

gulp.task('prep', ['clean']);

gulp.task('build', function (done) {
  runSequence('clean', 'css-generate', 'minify-js', 'copy', 'copy-deps', 'copy-html', 'files-replace', function () {
    done();
  });
});

gulp.task('after', ['files-replace']);

gulp.task('dev', ['css-generate', 'connect', 'watch']);
