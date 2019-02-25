'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

var SCSS_SRC = './src/Assets/scss/**/*.scss';//input folder for scss(change it to your desired folder)
var SCSS_DEST = './src/Assets/css';//output folder(create this folder)

gulp.task('compile_scss', function(){

  return gulp.src(SCSS_SRC)
  .pipe(sass().on('error', sass.logError))
  .pipe(minifyCSS())
  .pipe(rename({ suffix: '.min' }))
  .pipe(changed(SCSS_DEST))
  .pipe(gulp.dest(SCSS_DEST));
});

gulp.task('watch_scss', function(){
  gulp.watch(SCSS_SRC, gulp.series(['compile_scss']));
});

gulp.task('default', gulp.series(['watch_scss']));
