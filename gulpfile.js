'use strict';

// Require
var gulp = require('gulp');
var uglify = require('gulp-uglify');                        // minifies JavaScript
var concat = require('gulp-concat');                        // concat JavaScript
var del = require('del');
var path = require('path');

// Vars
var src = 'Agave/';
var dst = './';
var jsFile = 'agave-angularjs-sdk.min.js';

gulp.task('clean', function (cb) {
  del(dst + '/' + jsFile, cb);
});

gulp.task('concat-uglify-js', ['clean'], function() {
  return gulp.src([
    src + '/*.js',
      src + '/*/*.js',
      dst + '/' + jsFile
    ])
    .pipe(concat(jsFile))
    .pipe(uglify())
    .pipe(gulp.dest(dst));
});

gulp.task('default', ['concat-uglify-js']);
gulp.task('build', ['default']);
