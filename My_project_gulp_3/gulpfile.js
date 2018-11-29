const gulp = require('gulp');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');



gulp.task('copy', function () {
    gulp.src('src/**')
        .pipe(gulp.dest('dist'));
    
});

gulp.task('clean' , function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());

});

gulp.task('scripts', function() {
    return gulp.src('src/css/**/*.css')
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'src'
        },
        notify: false
    });

});

gulp.task('watch', ['copy', 'scripts', 'browser-sync'], function() {
    gulp.watch('src/css/**/*.css', ['scripts']);
    gulp.watch('src/*.html', ['copy', browserSync.reload])
});