const gulp  = require('gulp');

gulp.task('copy', function(){
   return gulp.src('src/**')
       .pipe(gulp.dest('dist'));
});

var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean', function () {
    return gulp.src('app/tmp', {read: false})
        .pipe(clean());
});